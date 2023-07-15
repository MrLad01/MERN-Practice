const { Router } = require('express');
const router = Router();
const User = require('../Models/userSchema');
const passport = require('passport')
require('../Strategies/local')


router.post('/login', passport.authenticate('local'), (req, res)=> {
    console.log('Logged in!');
    res.status(200).send('Welcome you bloody thwart')
})




module.exports = router;