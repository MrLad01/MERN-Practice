const  { Router } = require('express');
const router = Router();
const User = require('../Models/userSchema')


router.post('/register', async(req, res) => {
    const {id, first_name, last_name, email, gender, ip_address, password} = req.body
    const UserFile = await User.findOne({$or: [{id}, {email}, {ip_address}]})

    if(UserFile){
        res.sendStatus(400).send({msg: "You motherfucker again!!!"})
    } else {
        const newUser = await User.create({id, first_name, last_name, email, gender, ip_address, password})
        res.sendStatus(200).send({msg:"Welcome to our association, you bloody thwart"})
    }
})

module.exports = router