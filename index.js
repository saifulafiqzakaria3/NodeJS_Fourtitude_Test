const express = require("express");
const app = express();
const mongoose = require("mongoose"); //Database purpose
const morgan = require("morgan"); //Checking request logger
const dotenv = require("dotenv");
dotenv.config(); //to connect everything in .env file

const sessionRoute = require("./routes/session");
const generalRoute = require("./routes/general");

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log("connected to assesment DB!")
);

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //take the element in form and pass the value
app.use(morgan("tiny")); //http request logger
app.use("/api", generalRoute); //run generalroute everytime we hit this link
app.use("/api/session", sessionRoute); //run authroute everytime we hit this link

app.set("view-engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

// app.get("/register", (req, res) => {
//   res.render("register.ejs");
// });

// app.post("/register", async (req, res) => {
//   const isoDate = new Date(req.body.timestamp).toISOString();
//   //validate request before saving a user
//   //console.log(isoDate);
// });

const port = 3000;
app.listen(port, () => console.log("Server up and running"));
