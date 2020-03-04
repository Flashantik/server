import bcrypt from "bcrypt-nodejs"
import jwt from "jsonwebtoken"
import {AuthenticationError} from "apollo-server-express"

import User from "../models/users"
import keys from "../keys"


function getAcessToken(email, name, id) {
    return jwt.sign({
        email,
        name,
        id
    }, keys.jwt, {
        expiresIn: "1d"
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
                return User.findOne({email: jwtVerified.email})
            }
            return null
        } catch (err) {
            console.log('error', err)
            return err
        }
        // try {
        //     if (token) {
        //       return jwt.verify(token, keys.jwt)
        //     }
        //     return null
        //   } catch (err) {
        //     return null
        //   }
    },

    async login(user) {
        const candidate = await User.findOne({
            email: user.email
        })
        console.log(candidate)
        if (candidate) {
            const isCorrect = bcrypt.compareSync(user.password, candidate.password)
            if (isCorrect) {
                candidate.token = getAcessToken(candidate.email, candidate.name, candidate._id)
                console.log(candidate._id)
                return candidate
            } else {
                throw new AuthenticationError("Неверный пароль")
            }
        } else {
            throw new AuthenticationError("Пользователь не найден")
        }
    },
    async createUser(user) {
        const candidate = await User.findOne({
            email: user.email
        })
        if (candidate) {
            //  throw new Error("Такой пользователь уже есть!") 
        } else {
            const salt = bcrypt.genSaltSync(10)
            const newUser = new User({
                password: bcrypt.hashSync(user.password, salt),
                phone: user.phone,
                name: user.name,
                lastname: user.lastname,
                phone: user.phone,
                email: user.email,
                roles: ["readWrite"],
                disabledSidebar: [ false, true, true, true, true, true, true, true, true, true] // disabled sidebar
            })
            const userInBase = await newUser.save()
            const token = getAcessToken(userInBase.email, userInBase.name, newUser._id)
            return {
                ...user,
                token
            }
        }
    }
}