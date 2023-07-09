const cookieParser = require('cookie-parser');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session')
require('./database')
const loginRoute = require('./Routes/login')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    secret: "ladindin",
    resave: false,
    saveUninitialized: false
}))

app.listen(4000, ()=>{
    console.log("Hello");
})

app.use((req, res, next) => {
    console.log(`${req.url}  ${req.method}`)
    next()
})

app.use('/user', loginRoute)

app.use((req, res, next) => {
    if(req.session.user) next();
    else res.send(401);
})
