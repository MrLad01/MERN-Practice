const { Router } = require('express');
const router = Router();
const User = require('../Models/userSchema')

router.post('/login', async(req, res) => {
    const { email, password } = req.body

    if(!email || !password ) res.send(400)
    const UserFile = await User.findOne({email})
    if(!UserFile) return res.sendStatus(401);
    
    if(password === UserFile.password) {
        req.session.user = UserFile
        return res.sendStatus(200)
    } else {
        return res.sendStatus(401)
    }
})
module.exports = router;