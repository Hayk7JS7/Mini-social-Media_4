const User = require("../model/User")
const bcrypt = require("bcrypt");

class UserController {
    static async getAllUsers(res, req, next) {
        let users;
        try {
            users = await User.find()
        } catch (error) {
            return next(error)
        }
        if (!users) {
            return res.status(500).json({ message: "Internal Server error" })
        }
        return res.status(200).json({ users })
    }

    static async register(res, req, next) {
        try {
            const { name, lastName, age, email, username, password } = req.body
            const existingUser = await User.findOne({
                $or: [{ email }, { username }]
            })
            if (!name && name.trim() == "" && !email && email.trim() == "" && !password && password.length < 8) {
                return res.status(422).json({ message: "Invalid data" })
            }

            if (existingUser) {
                res.status(409).json({ message: "User with email or username already exists" })
            }
            const hashPassword = bcrypt.hashSync(password, 10)
            const newUser = new User({ name, lastName, age, email, username, password: hashPassword })
            await newUser.save()

            res.status(201).json({ message: "User created successfully" })
        } catch (error) {
            res.status(500).json({ message: "server error" })
        }


    }
}



module.exports = { UserController }

