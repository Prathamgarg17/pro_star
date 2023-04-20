 const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
        mongoose.connect("mongodb://localhost:27017/StarbucksRegistration", {
    useNewUrlParser: true
        }).then(() => {
            console.log(`connection successful`);
        }).catch((e) => {
            console.log(`connection failed`)
        })
