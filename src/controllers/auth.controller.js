import bcrypt from "bcrypt-nodejs"
import jwt from "jsonwebtoken"
import {AuthenticationError} from "apollo-server-express"

import User from "../models/users"
import keys from "../keys"


function getAccessToken(email, name, id) {
    return jwt.sign({
        email,
        name,
        id
    }, keys.jwt, {
        expiresIn: "1d"
    })
}
function getRefreshToken(email) {
    return jwt.sign({
        email
    }, keys.jwtRefresh, {
        expiresIn: "60d"
    }) 
}
export default {
    checkToken(token) {
        return jwt.verify(token, keys.jwt)
    },
    getUser(token) {
        try {
            if (token) {
                let jwtVerified = jwt.verify(token, keys.jwt)
                const user = User.findOne({email: jwtVerified.email})
                return user
            }
            return null
        } catch (err) {
            console.log('error', err)
            return err
        }
    },
   async refreshToken(refreshToken, fingerprint){
        let decodedRefresh = jwt.verify(refreshToken, keys.jwtRefresh)
        if(decodedRefresh) {
            const candidate = await User.findOne({
                email: decodedRefresh.email
            })
            const indexDelete = candidate.refresh.findIndex(element => {
                return element.fingerprint == fingerprint
            })
            if(indexDelete >= 0){
                const newRefreshToken = getRefreshToken(candidate.email)
                candidate.refresh.splice(indexDelete, 1, {token:newRefreshToken, fingerprint})
                candidate.save()
                return {refresh: newRefreshToken, access: getAccessToken(candidate.email, candidate.name, candidate._id)}
           } else {
               throw new Error('Что-то пошло не так') // Токен вероятнее всего украден
           }
        }
    },
    async login(user, fingerprint) {
        console.log("LOGIN")
        const candidate = await User.findOne({
            email: user.email
        })
        console.log('candidate', candidate)
        if (candidate) {
            const isCorrect = bcrypt.compareSync(user.password, candidate.password)
            if (isCorrect) {
                console.log('all correct')
                const token = getAccessToken(candidate.email, candidate.name, candidate._id) 
                const refreshToken = getRefreshToken(candidate.email)
                candidate.refresh.push({refresh:refreshToken, fingerprint})
                candidate.save()
                return {...candidate._doc, token, refresh:refreshToken}
            } else {
                throw new AuthenticationError("Неверный пароль")
            }
        } else {
            throw new AuthenticationError("Пользователь не найден")
        }
    },
    async logout(refreshToken) {
        let decodedRefresh = jwt.decode(refreshToken)
        if(jwt.verify(refreshToken, keys.jwtRefresh)) {
            let candidate = await User.findOne({
                email: decodedRefresh.email
            })
            const indexDelete = candidate.refresh.findIndex(element => {
                return element.token == refreshToken
             })
             if(indexDelete>=0){
                 candidate.refresh.splice(indexDelete, 1)
                 candidate.save()
                 return true
            }
        }
    },
    async createUser(user, fingerprint) {
        const candidate = await User.findOne({
            email: user.email
        })
        if (candidate) {
            //  throw new Error("Такой пользователь уже есть!") 
        } else {
            const salt = bcrypt.genSaltSync(10)
            const refreshToken = getRefreshToken(user.email)
            const newUser = new User({
                password: bcrypt.hashSync(user.password, salt),
                phone: user.phone,
                name: user.name,
                lastname: user.lastname,
                phone: user.phone,
                email: user.email,
                refresh:[{token:refreshToken, fingerprint}],
                roles: ["readWrite"],
                disabledSidebar: [ false, true, true, true, true, true, true, true, true, true] // disabled sidebar
            })
            const userInBase = await newUser.save()
            const token = getAccessToken(userInBase.email, userInBase.name, newUser._id)
            console.log(refreshToken)
            return {
                ...user,
                disabledSidebar: [ false, true, true, true, true, true, true, true, true, true],
                token,
                refresh:refreshToken
            }
        }
    }
}