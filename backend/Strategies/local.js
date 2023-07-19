const passport = require('passport')
const { Strategy } = require('passport-local')
const { hashPassword } = require('../Utils/helpers')
const User = require('../Models/userSchema');
const { comparePassword } = require('../Utils/helpers');


passport.serializeUser((user, done) => {
    console.log("Serializing User...");
    console.log(user);
    done(null, user.id)
});

passport.deserializeUser(async(id, done) => {
    console.log("Deserializing User...");
    console.log(id);
    try{
        const user = await User.findById(id);
        if(!user) throw Error("User not found");
        done(null, user);
    } catch(err){
        console.error(err);
        done(err, null)
    }
})


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
                console.log("Incorrect username or password");
                done(null, null)
            }
        } catch(err){
            console.error(err);
            done(err, null)
        }
    })
)
