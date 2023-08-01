const { Router } = require('express');
const router = Router();
const User = require('../Models/userSchema');
const passport = require('passport')
require('../Strategies/local')


router.post('/login', passport.authenticate('local'), async(req, res)=> {
    try{
        const { email } = req.body;
        const userProfile = await User.find({email});
        const user = userProfile[0];
        console.log('Logged in!');
        res.status(200).send(user)
    }catch(err){
        console.error(err);
    }

})





module.exports = router;