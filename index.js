const express= require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
// app.set is used for setting different type of method and view engine एक template engine specify करता है जो HTML files render करने के लिए use होता है।view engine एक template engine specify करता है जो HTML files render करने के लिए use होता है।
app.listen(port, () =>{
    console.log("app is listingh on port:", port);
})

app.get("/", (req, res) =>{
    res.render("home.ejs");  
})
//res.rendr is used for sharing a ejs file to the server with the help of express

app.get("/apple", (req, res) =>{
    res.send("hello");
})

// app.get("/rolldic", (req, res) =>{ 
//     res.render("rooldic.ejs");
// })  //when we call the rolldic in the browser the we will get a random number 

app.get("/rolldic", (req, res) =>{
    let diceval = Math.floor(Math.random() * 6) + 1;

    res.render("rooldic.ejs", {diceval})
})

// app.get("/ig/:username", (req, res) =>{
//     const followers = ["adam", "nikhil", "krishna" , "nikhil"];
//     let { username } = req.params;
//     res.render("instagram.ejs", {username , followers});
// })   // in this we transfer username and followers array in the instagram.ejs file

  app.get("/ig/:username", (req, res) =>{
    const { username } = req.params;
    const instaData = require("./data.json"); 
    const data = instaData[username];
    // console.log(data);
      if(data){
        res.render("instagram.ejs", {data});
      } else {
        res.render("error.ejs");
      }
    
}) 