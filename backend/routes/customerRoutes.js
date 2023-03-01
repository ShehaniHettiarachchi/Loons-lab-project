const express = require("express");
const router = express.Router();
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const { Customer } = require("../models/customerModel.js");
const { CustomerAuth } = require("../middleware/customerAuth.js");
const { customerToken } = require("../models/customerToken.js");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "../frontend/public/uploads/customer");
  },

  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//Localhost:5000/customer/register
http: router.post("/register", upload.single("customerImage"), (req, res) => {
  Customer.find({ email: req.body.email })
    .exec()
    .then((customer) => {
      if (customer.length >= 1) {
        return res.status(409).json({
          status: false,
          message: "Email already exists",
          date: undefined,
        });
      } else {
        bycrypt.hash(req.body.password, 2, (err, hash) => {
          if (err) {
            return res.status(500).json({
              status: false,
              message: "Error cannot encrypt password",
              date: undefined,
            });
          } else {
            const customerImage=req.file.originalname
            const customer = new Customer({...req.body,customerImage,password: hash});
            customer.save((err, doc) => {
              if (err)
                return res.json({
                  status: false,
                  message: err,
                  data: undefined,
                });

              return res.status(200).json({
                status: true,
                message: "Register Successfully",
                data: doc,
              });
            });
          }
        });
      }
    });
});

//Localhost:5000/customer/login
http: router.post("/login", (req, res) => {
  Customer.findOne({ email: req.body.email })
    .exec()
    .then((customer) => {
      if (!customer) {
        return res.status(401).json({
          status: false,
          message: "User not found",
          date: undefined,
        });
      }
      bycrypt.compare(
        req.body.password, 
        customer.password,
        async (err, result) => {
          if (err) {
            return res.status(401).json({
              status: false,
              message: "Server Error, authentication failded",
              date: undefined,
            });
          }
          if (result) {
            const token = jwt.sign(
              {
                email: customer.email,
                customerId: customer._id,
              },
              process.env.JWT_KEY,
              {
                expiresIn: "1h",
              },
            );

            await customerToken.findOneAndUpdate(
              { _customerId: Customer._Id, tokenType: "login" },
              { token: token },
              { new: true, upsert: true },
            );
            return res.status(200).json({
              status: true,
              message: "Login Successfully",

              data: {
                token,
                customer,
              },
            });
          }
          return res.status(401).json({
            status: false,
            message: "Wrong Password",
            date: undefined,
          });
        },
      );
    })
    .catch((err) => {
      return res.status(500).json({
        status: false,
        message: "Server Error, authrntication failded",
        date: undefined,
      });
    });
});



//Localhost:5000/customer/getCustomer/:id
http: router.route("/getCustomer/:id").get(async (req, res) => {
  let customerId = req.params.id;
  const customer = await Customer.findById(customerId)
    .then((customer) => {
      res.status(200).send({ status: "Customer data fetch", customer });
    })
    .catch(() => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get Customer data", error: err.message });
    });
});

module.exports = router;