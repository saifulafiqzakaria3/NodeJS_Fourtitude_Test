const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  loginValidation,
  timeStampValidation,
} = require("../helper/validation");

const User = require("../model/User"); // this is what we store in database

//LOGIN
router.get('/login', (req,res) => {
    //get user input from the element's name field in form 
    res.render('login.ejs');
})

router.post("/login", async (req, res) => {
  //validate request before saving a user
  const { error } = loginValidation(req.body);
  if (error) return res.status(403).send(error.details[0].message);

  //check if email is not exist in database
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(403).send("Email not exists in database");

  //Hash Password in database
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid Password");

  //user id is just some data to identify with token, anything can do
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth_token", token).json({
    token: token,
    displayusername: user.displayusername,
    userid: user._id,
  });
});

//LOGOUT
router.post("/logout", verifyToken, async (req, res) => {
  //validate request before saving a user
  const { error } = timeStampValidation(req.body);
  if (error) return res.status(403).send(error.details[0].message);

  jwt.verify(req.token, process.env.TOKEN_SECRET, (err, authData) => {
    if (err) {
      return res.status(403).send("Token Verification Failed");
    } else {
      res.json({
        message: "Logout successful",
      });
    }
  });
});

//verify token for authentication
function verifyToken(req, res, next) {
  //Get auth header value
  const bearerHeader = req.headers["authorization"];

  //Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    //Format of auth_token
    //Authorization: Bearer <Access Token>
    const bearer = bearerHeader.split(" "); //split Bearer and <Access Token> into array
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    //Forbidden
    return res.status(403).send("Token Problem");
  }
}

module.exports = router;
