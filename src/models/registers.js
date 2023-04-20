const mongoose = require("mongoose");

            // We will define a schema(database) as shown below
            const StarbucksSchema = new mongoose.Schema({
                firstname: {
                    type:String,
                    required:true
                },
                lastname: {
                    type:String,
                    required:true
                },
                email: {
                    type:String,
                    required:true,
                    unique:true
                },
                password: {
                    type:String,
                    required:true,
                },
                confirmpassword: {
                    type:String,
                    required:true,
                }
            })
const Register = new mongoose.model("Register", StarbucksSchema);

            // Now let us export this model
            module.exports = Register;
