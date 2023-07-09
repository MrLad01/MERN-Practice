const { default: mongoose } = require('mongoose');

require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/practice')
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.log(err));

