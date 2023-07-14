const passport = require('passport')
const { Strategy } = require('passport-local')
const { hashPassword } = require('../Utils/helpers')
const User = require('../Models/userSchema');
const { comparePassword } = require('../Utils/helpers');


passport.use(
    new Strategy({
        usernameField: "email"
    }, async(email, password, done) => {
        console.log(email)
        console.log(password)
        try{
            if(!email || !password){
                done("Bad Request, missing credentials", null, null)
            }
            const userFile = await User.findOne({email});
            if(!userFile) throw Error('User not Found');
            const isValid = comparePassword(password, userFile.password);
            if(isValid){
                console.log("Authenticated Successfully");
                done(null, userFile)
            } else {
                console.log("Failed to Authenticate");
                done(null, null)
            }
        } catch{
            console.error(err);
            done(err, null)
        }
    })
)
