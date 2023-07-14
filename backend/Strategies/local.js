const passport = require('passport')
const { Strategy } = require('passport-local')
const { hashPassword } = require('../Utils/helpers')
const User = require('../Models/userSchema');
const { comparePassword } = require('../Utils/helpers');


passport.use(
    new Strategy({
        usernameField: "email"
    }, async(id, first_name, last_name,email,gender, ip_address, password, done) => {
        console.log(email)
        console.log(password)
        try{
            if(!email || !password){
                done(Error("Please fill in your details", null, null))
            }
            const userFile = await User.find({$or: [{id}, {email}, {ip_address}]})
            const hashed = hashPassword(password)
            if(userFile){
                done(Error("You motherfuckr again!!!"), null, null)
            } else {
                const newUser = User.create({id, first_name, last_name,email,gender, ip_address, password})
                done(null, newUser, null)
            }
        } catch{
            console.error(err);
            done(err, null)
        }
    })
)

// passport.use(
//     new Strategy({
//         usernameField: "email"
//     }, async(email, password, done) => {
//         console.log(email)
//         console.log(password)
//         try{
//             if(!email || !password){
//                 done("Bad Request, missing credentials", null, null)
//             }
//             const userFile = await User.findOne({email});
//             if(!userFile) throw Error('User not Found');
//             const isValid = comparePassword(password, userFile.password);
//             if(isValid){
//                 console.log("Authenticated Successfully");
//                 done(null, userFile)
//             } else {
//                 console.log("Failed to Authenticate");
//                 done(null, null)
//             }
//         } catch{
//             console.error(err);
//             done(err, null)
//         }
//     })
// )
