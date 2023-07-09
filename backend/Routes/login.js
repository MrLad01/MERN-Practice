const { Router } = require('express');
const router = Router();
const User = require('../Models/userSchema')

router.post('/login', async(req, res) => {
    const { email, password } = req.body

    if(!email || !password ) res.send(400)
    const UserFile = await User.findOne({email})
    if(!UserFile) return req.send(401);
    
    if(password === UserFile.password) {
        req.session.user = UserFile
        return res.send(200)
    } else {
        return res.send(401)
    }
})
module.exports = router;