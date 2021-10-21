const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Coloshop-Layout', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connection is on!....")
}).catch(err => {
    console.log("Error");
    console.log(err);
});
