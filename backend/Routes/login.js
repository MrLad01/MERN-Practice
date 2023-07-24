const { Router } = require('express');
const router = Router();
const User = require('../Models/userSchema');
const passport = require('passport')
require('../Strategies/local')


router.post('/login', passport.authenticate('local'), async(req, res)=> {
    const {email} = req.body;
    const userProfile = await User.find({email});
    console.log('Logged in!');
    res.status(200).send(userProfile)
    // res.status(200).send(user)
})

router.get('/:last_name', async (req, res)=>{
    const {last_name} = req.params;
    try{
        const userProfile = await User.find({last_name});
        res.status(200).send(userProfile)
    }catch(err){
        console.error(err);
        res.status(500).send('Server Error');
    }
})




module.exports = router;