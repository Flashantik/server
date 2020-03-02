const array = []
let count =0

// function generateId() {
//     const str = "qWertyuiOpAsDfghjklZxcVbnm"
//     let time = new Date
//     let strSlice = (Math.random*10)
//     console.log(strSlice)
//     return str[Math.ceil(Math.random())]+Math.random()+ time.getTime()+ str.slice(strSlice, 26)
// }

module.exports = {
    Query: {
        getUser(root, {id}){
        return id
        }
    },
    Mutation:{
        createUser(root, {user}) {
            return {...user, id: generateId()}
        },
        // setMessage: (root, {message}) => {
        // return message;
        // },
        // addBook(root, {title}){
        //     return title
        // }
    }
}
