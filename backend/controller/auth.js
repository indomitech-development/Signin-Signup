const userSchema = require("../modal/User");

// const authController = require("../routes/userRoute");

const SignUp = async (req, res) => {
  const newUser = await userSchema.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  console.log(req.body.name);
  res.status(200).json(newUser);
};

module.exports = { SignUp };
