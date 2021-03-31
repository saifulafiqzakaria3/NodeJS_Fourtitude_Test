const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Joi = require("@hapi/joi");
const { registerValidation, timeStampValidation, carFilterValidation } = require("../helper/validation");

const User = require("../model/User"); // this is what we store in database
const Car = require('../model/Car');


//REGISTER
router.get("/register", (req, res) => {
    res.render("register.ejs");
  });

router.post("/register", async (req, res) => {
    //validate request before saving a user
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
  
    //Hash Password in database
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const isoDate = new Date(req.body.timestamp).toISOString();
  
    //Create new user
    const user = new User({
      username: req.body.username,
      displayusername: req.body.displayusername,
      password: hashedPassword, 
      timestamp: isoDate,
    });
  
    try {
      const savedUser = await user.save();
      //user id is just some data to identify with token, anything can do
      const token = jwt.sign({ _id: savedUser._id }, process.env.TOKEN_SECRET); 
      res.header("auth_token", token).json({
        token: token,
        displayusername: user.displayusername,
        userid: user._id,
      });
    } catch (error) {
      res.status(403).send("Failed to Register");
    }
  });


//GET PROFILE
router.get("/getprofile", verifyToken, async (req, res) => {
  //validate request before saving a user
  const { error } = timeStampValidation(req.body);
  if (error) return res.status(403).send(error.details[0].message);

  jwt.verify(req.token, process.env.TOKEN_SECRET, (err, authData) => {
    if (err) {
      return res.status(403).send("Token Verification Failed");
    } else {
      const options = { new: true };

      //Find my profile in database using id
      User.findOne({ _id: authData._id }, (err, data) => {
        if (err) {
          return res.status(403).send("Get Profile Failed");
        } else {
          res.json({
            username: data.username,
            displayusername: data.displayusername,
            userid: data._id,
          });
        }
      });
    }
  });
});

//UPDATE PROFILE
router.put("/updatemyprofile", verifyToken, async (req, res) => {
  const schema = Joi.object({
    displayusername: Joi.string().required(),
    timestamp: Joi.string().required().isoDate(),
  });

  //validate request before saving a user
  const { error } = schema.validate(req.body);
  if (error) return res.status(403).send(error.details[0].message);

  jwt.verify(req.token, process.env.TOKEN_SECRET, (err, authData) => {
    if (err) {
      return res.status(403).send("Token Verification Failed");
    } else {
      // update profile
      try {
        const updates = req.body;
        const options = { new: true };

        console.log(authData._id);

        User.findByIdAndUpdate(
          { _id: authData._id },
          updates,
          options,
          (err, data) => {
            if (err) {
              return res.status(400).send("Update profile failed");
            } else {
              res.json({
                username: data.username,
                displayusername: data.displayusername,
                userid: data._id,
              });
            }
          }
        );
      } catch (error) {
        res.status(403).send("Update Failed");
      }
    }
  });
});

//GET LIST OF CARS
router.get("/carlist", verifyToken, async (req, res) => {
  //validate request before saving a user
  const { error } = carFilterValidation(req.body);
  if (error) return res.status(403).send(error.details[0].message);

  jwt.verify(req.token, process.env.TOKEN_SECRET, (err, authData) => {
    if (err) {
      return res.status(403).send("Token Verification Failed");
    } else {
      // Return car list response
      let carname = req.body.carname;
      const pageindex = req.body.pageindex;
      const pagesize = req.body.pagesize;

      const startIndex = (pageindex - 1) * pagesize;
      const endIndex = pageindex * pagesize;
      
      const searchResult = Car.carList.filter((car) => {
          if (carname == null) {
              carname = "";
          }
        return car.carname.toLowerCase().includes(carname.toLowerCase());
      });

      const result = searchResult.slice(startIndex, endIndex);

      res.json({
          list: result,
          totalcount: searchResult.length,
      })
      
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
