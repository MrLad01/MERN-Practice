const { Router } = require('express');
const router = Router();
const User = require('../Models/userSchema');


router.get('/:last_name', async (req, res)=>{
    const {last_name} = req.params;
    try{
        const userProfile = await User.find({last_name});
        const user = userProfile[0]
        res.status(200).send(user)
    }catch(err){
        console.error(err);
        res.status(500).send('Server Error');
    }
})


module.exports = router;