const express = require("express");
const path = require("path");
require("./db/conn");
const Register = require("./models/registers");
const hbs = require("hbs");
const async = require("hbs/lib/async");
    const app = express();
    const port = process.env.PORT || 3000;
const {json} = require("express");
const static_path = path.join(__dirname, "../public") ;
const template_path = path.join(__dirname, "../templates/views") ;
const partials_path = path.join(__dirname, "../templates/partials") ;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set("view engine","hbs");
app.set("views", template_path);
app.use(express.static(static_path));
hbs.registerPartials(partials_path);

        app.get("/", (req, res) => {
            res.render("index")
        });
       app.get("/register",( req, res)=>{
        res.render("register")
       });
       app.post("/register",async(req,res)=>{
        try {
            const password = req.body.password;
            const cpassword = req.body.confirmpassword;

            if(password===cpassword){

               const StarBucksregister = new Register({
                firstname : req.body.firstname,
                lastname  : req.body.lastname,
                email     : req.body.email,
                password  : password,
                confirmpassword: cpassword                 
               })
                const registered = await StarBucksregister.save();
               res.status(201).render("index");
            }
            else{
                res.send('password not match');
            }
        } catch (error) {
            res.status(404).send(error);
        }
       });
       app.get("/login",(req,res)=>{
        res.render("login")
       });
       app.get("/Map",(req,res)=>{
        res.render("Map")
       });
       app.get("/Cart",(req,res)=>{
        res.render("Cart")
       });
       

        app.listen(port, () => {
            console.log(`server is running at port no ${port}`);
        })
