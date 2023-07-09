const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();


app.listen(4000, ()=>{
    console.log("Hello");
})

app.use(express.json());
app.use(cookieParser());

require('./database')
// app.use(express.urlencoded());
app.use((req, res) => {
    console.log(`${req.url} : ${req.method}`)
})
