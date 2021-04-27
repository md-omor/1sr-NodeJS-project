const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const userRouter = require("./routes/usersRoute");
require('dotenv').config()
const PORT = process.env.PORT || 8000

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.get("/register", (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// app.post("/register", (req, res) => {
//   const name = req.body.fulname
//   res.send(`your name is ${name}`);
// });



app.get('/', (req, res)=>{
  res.send('/index.html')
})



app.use((req, res) => {
  res.send("404 !!!!!! Page not found");
});

app.listen(PORT, (err) => {
  console.log(err);
});
