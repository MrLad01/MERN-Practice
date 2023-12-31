const  { Router } = require('express');
const router = Router();
const User = require('../Models/userSchema')
const { hashPassword } = require('../Utils/helpers');
const passport = require('passport');


router.post('/register', async(req, res) => {
    const {id, first_name, last_name, email, gender, ip_address, password} = req.body
    const UserFile = await User.findOne({$or: [{id}, {email}, {ip_address}]})
    const hashed = hashPassword(password)

    if(UserFile){
        res.status(400).send({msg: "You again motherfucker!!!"})
    } else {
        const newUser = await User.create({id, first_name, last_name, email, gender, ip_address, password: hashed})
        res.status(200).send({msg:"Welcome to our association, you bloody thwart"})
    }
})


module.exports = router