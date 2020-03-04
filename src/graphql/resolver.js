import controller from "../controllers/auth.controller"
export default {
    Query: {
        getUserByToken(root, { token }) {
            return controller.getUser(token)
        },
        getUserData(root, { token }, {contextUser}) {
            let checkToken =controller.checkToken(token)
            if(checkToken) {
                if(contextUser) {
                    return contextUser
                } else {
                    throw new AuthenticationError("Нет пользователя")
                }
            }
        },
        login(root, {user}) {
            try {
                return controller.login(user)
            } catch (error) {
                console.log("error in resolver", error)
            }
        },
    },
    Mutation: {
        createUser(root, {user}) {
            try {
                return controller.createUser(user)
            } catch (error) {
                console.log("error in resolver", error)
            }
        },

    }
}