const { Router } = require('express');
const router = Router();
const User = require('../Models/userSchema');
const passport = require('passport')
require('../Strategies/local')


router.post('/login', passport.authenticate('local'), (req, res)=> {
    console.log('Logged in!');
    res.status(200).send('Welcome you bloody thwart')
})

router.get('/:last_name', (req, res)=>{
    const {last_name} = req.params;
    const userProfile = User.find((g)=>g.last_name == last_name);
    res.status(200).send(userProfile)
})




module.exports = router;