import authController from "../controllers/auth.controller.js"
import completeController from "../controllers/complete.controller.js"
export default {
    Query: {
        getUserByToken(root, { token }) {
            return authController.getUser(token)
        },
        getUserData(root, { token }, {contextUser}) {
            let checkToken =authController.checkToken(token)
            if(checkToken) {
                if(contextUser) {
                    return contextUser
                } else {
                    throw new AuthenticationError("Нет пользователя")
                }
            }
        },
        login(root, {user}, {fingerprint}) {
            try {
                return authController.login(user, fingerprint.hash)
            } catch (error) {
                console.log("error in resolver login", error)
            }
        },
    },
    Mutation: {
        createUser(root, {user}, {fingerprint}) {
            try {
                return authController.createUser(user, fingerprint.hash)
            } catch (error) {
                console.log("error in resolver createUser", error)
            }
        },
        refreshToken(root,{refreshToken}, {fingerprint}){
            try {
                return authController.refreshToken(refreshToken, fingerprint.hash)
            } catch (error) {
                console.log("error in resolver refreshToken", error)
            }
        },
        logout(root, {refreshToken}){
            try {
                return authController.logout(refreshToken)
            } catch (error) {
                console.log("error in resolver", error)
            }
        },

//      **     **     ** ********** **      **       ******** ****     ** *******  
//     ****   /**    /**/////**/// /**     /**      /**///// /**/**   /**/**////** 
//    **//**  /**    /**    /**    /**     /**      /**      /**//**  /**/**    /**
//   **  //** /**    /**    /**    /**********      /******* /** //** /**/**    /**
//  **********/**    /**    /**    /**//////**      /**////  /**  //**/**/**    /**
// /**//////**/**    /**    /**    /**     /**      /**      /**   //****/**    ** 
// /**     /**//*******     /**    /**     /**      /********/**    //***/*******  
// //      //  ///////      //     //      //       //////// //      /// ///////   
        setDisabledSidebar(root, {disabledSidebar}, {contextUser}) {
            try {
                return completeController.setDisabledSidebar(disabledSidebar, contextUser)
            } catch (error) {
                console.log("error in resolver", error)
            }
        },
        checkTest(root, {answers}, {contextUser}){
            try {
                return completeController.checkTest(answers, contextUser)
            } catch (error) {
                console.log("error in resolver", error)
            }
        }
    }
}