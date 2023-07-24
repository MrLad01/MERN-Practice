const { Router } = require('express');
const router = Router();
const User = require('../Models/userSchema');
const passport = require('passport')
require('../Strategies/local')


router.post('/login', passport.authenticate('local'), (req, res)=> {
    console.log('Logged in!');
    res.status(200).send({'msg':'Welcome you bloody thwart'})
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