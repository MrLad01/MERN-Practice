const  { Router } = require('express');
const router = Router();
const User = require('../Models/userSchema')


router.post('/register', async(req, res) => {
    const {id, first_name, last_name, email, gender, ip_address, password} = req.body
    const UserFile = await User.find({$or: [{id}, {email}, {ip_address}]})

    if(UserFile){
        res.status(400).send({msg: "You motherfucker again!!!"})
    } else {
        const newUser = await User.create({id, first_name, last_name, email, gender, ip_address, password})
        res.status(200).send({msg:"Welcome to our association, you bloody thwart"})
    }
})

module.exports = router