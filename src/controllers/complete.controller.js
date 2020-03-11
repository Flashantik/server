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
    async checkTest(answers, user){ // Создаем pdf если человек прошел тест 80% true, Файл надо бы потом удалять
        if(user) {
            const myUser = await user
            
            const trueAnswersId = [0,3,2,1,0,2,3,0,6,3]
            let isTrueArray = answers.map(element => {
                return element.element.id === trueAnswersId[element.id]
            })
            isTrueArray= isTrueArray.filter((a) =>{
                return a ===true 
            })
            console.log(isTrueArray)
            const resultPoints =(isTrueArray.length * 100) / trueAnswersId.length
            if( resultPoints >= 80) {
                const promise1 = new Promise(function(resolve, reject) {
                    pdf.create(pdfTemplate({ name:myUser.name, lastname: myUser.lastname, result: resultPoints }), { "orientation": "landscape" })  
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
    }
}