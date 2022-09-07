//creating a  simple express app(registration form and saving its data in a file)
//using pug 


//all about express

const express = require("express");
const { dirname } = require("path");

const app = express();
const path = require('path'); //path module
const fs=require("fs");           //file system module
const port = 80;


//Express stuff
//Rest full api's
//serving static files in express
app.use('/static', express.static('static')) 
//now create a static folder and put files that you want to render inside that folder

//for fetching form's data to express(parsing the application)
app.use(express.urlencoded({ extended: true }));


//pug Stuff
//pug (setting template engine)
app.set('view engine', 'pug');

//set the views/templates directory
app.set('views', path.join(__dirname, 'views'));

//pug end point
// Our pug get endpoint
      app.get("/", (req, res) => {
        res.status(200).render('index.pug', {title: "Registration"})
    });

    //post endpoint
    app.post("/", (req, res) => {
        // console.log(req.body); //fetches the data in the form
        namee=req.body.name; //getting the name from form using its name variable
        password=req.body.password;
        age=req.body.age;
        height=req.body.height;
        dob=req.body.dob;
        // console.log(namee)
        output=`name of the client is ${namee} and his password is ${password} 
        his age is ${age} and his height ${height} with dob ${dob}`
        fs.writeFileSync("output.txt" , output); //writing into the form
        res.status(200).render('index.pug', {title: "Registration"}) //rendring
    });


    //other endpoints without pug
    // app.get("/", (req, res) => {

    //     // res.send("this is my first sended response using express");
    //     //response with status code
    //     res.status(200).send("this is my first etc etc etc");
    // })

    // app.get("/home", (req, res) => {

    //     res.send("this is the home page of my application");
    // })

    // app.post("/about", (req, res) => {

    //     res.send("this is post api");
    // })

    //Listing to the server
    app.listen(port, () => {
        console.log("listening on local host port 80");
    })
