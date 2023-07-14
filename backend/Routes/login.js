const { Router } = require('express');
const router = Router();
const User = require('../Models/userSchema');
const { comparePassword } = require('../Utils/helpers');
const passport = require('passport')


// router.post('/login', async(req, res) => {
//     const { email, password } = req.body

//     if(!email || !password ) res.send(400)
//     const UserFile = await User.findOne({email})
//     if(!UserFile) return res.sendStatus(401);
//     const isValid = comparePassword(password, UserFile.password)
    
//     if(isValid) {
//         req.session.user = UserFile
//         return res.sendStatus(200)
//     } else {
//         return res.sendStatus(401)
//     }
// })

router.post('/login', passport.authenticate('local'), (req, res)=> {
    console.log('Logged in!');
    res.status(200).send('Welcome to the association you bloody thwart')
})




module.exports = router;