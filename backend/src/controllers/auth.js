
const AuthSchema = require('../models/auth.js')


const register = async(req,res) => {
    try {
        const {username, email, password} = req.body;

        const user = await AuthSchema.findOne(email)

    } catch (error) {
        
    }
}

const login = async(req,res) => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = {register, login}