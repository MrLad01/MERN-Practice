const  { Router } = require('express');
const router = Router();
const User = require('../Models/userSchema')
const { hashPassword } = require('../Utils/helpers');
const passport = require('passport');
require('../Strategies/local')


// router.post('/register', async(req, res) => {
//     const {id, first_name, last_name, email, gender, ip_address, password} = req.body
//     const UserFile = await User.find({$or: [{id}, {email}, {ip_address}]})
//     const hashed = hashPassword(password)

//     if(UserFile){
//         res.status(400).send({msg: "You motherfucker again!!!"})
//     } else {
//         const newUser = await User.create({id, first_name, last_name, email, gender, ip_address, password: hashed})
//         res.status(200).send({msg:"Welcome to our association, you bloody thwart"})
//     }
// })

router.post('/register', passport.authenticate('local', (req, res)=> {
    console.log('Logged in!');
    res.status(200).send('Welcome to the association you bloody thwart')
}))





module.exports = router