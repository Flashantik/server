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
    }
}