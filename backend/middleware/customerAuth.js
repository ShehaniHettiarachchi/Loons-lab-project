const { customerToken } = require("../models/customerToken.js");
const jwt = require("jsonwebtoken");

let customerAuth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_KEY);

  customerToken.findOne(
    { customerID: decoded.customerID, token, tokenType: "login" },
    (err, customerToken) => {
      if (err) throw err;
      if (!customerToken) {
        return res.json({
          isAuth: false,
        });
      }
      req.token = token;
      req.customerID = decoded.customerID;
      next();
    }
  );
};

module.exports = { customerAuth };
