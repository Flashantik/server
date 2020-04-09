const pdf = require('html-pdf');
const pdfTemplate = require('../static/pdfTemplate');

export default {
    async setDisabledSidebar(donePage, user){
        if(user){
            console.log("donePage",donePage)
            await user.updateOne({
                disabledSidebar: donePage
            })
            return donePage
        } else {
            throw new Error('Нет пользователя!')
        }
    },


    // ВКЛЮЧИТЬ ПОВОРОТ PDF ФАЙЛА!!!
    async checkTest(answers, user){ // Создаем pdf если человек прошел тест 85% true, Файл надо бы потом удалять
        if(user) {
            const myUser = await user
            
            const trueAnswersId = [0, 3, 2, 1, 0, 2, 3, 0, 6, 3, 1, 0, 3, 3, 1, 3, 1, 0, 0, 1, 2, 0, 2, 1, 2, 0, 2, 2, 1, 3]
            let isTrueArray = answers.map(element => {
                return element.element.id === trueAnswersId[element.id]
            })
            isTrueArray= isTrueArray.filter((a) =>{
                return a ===true 
            })
            console.log(isTrueArray)
            const resultPoints =(isTrueArray.length * 100) / trueAnswersId.length
            if( resultPoints >= 85) {
                const promise1 = new Promise(function(resolve, reject) {
                    pdf.create(pdfTemplate({ name:myUser.name, lastname: myUser.lastname, result: resultPoints }), 
                    {"height": "8in", "width": "10.5in" })  
                    .toFile(`src/users/${myUser.email}/result.pdf`, (err,data) => {
                    if(err) {
                        console.log(err)
                    }
                   resolve(true)
                    // return Promise.resolve()
                })
                  });
                  return await promise1
            } else {
                return null
            }
        }
    },
    async setDoneStep({page, items},user) {
        if(user){
            const myUser = await user
            myUser.pages[page] = items
            myUser.save()
            return items
    }
        return {page, key}
    }
}