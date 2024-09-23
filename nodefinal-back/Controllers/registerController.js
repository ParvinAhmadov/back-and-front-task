// const { User, validate } = require("../models/user");
// const bcrypt = require("bcrypt");

// const registerUser = async (req, res) => {
//   try {
//     const { error } = validate(req.body);
//     if (error) {
//       return res.status(400).send({ message: error.details[0].message });
//     }

//     const existingUser = await User.findOne({ email: req.body.email });
//     if (existingUser) {
//       return res
//         .status(409)
//         .send({ message: "User with given email already exists!" });
//     }

//     const salt = await bcrypt.genSalt(Number(process.env.SALT));
//     const hashPassword = await bcrypt.hash(req.body.password, salt);

//     const newUser = new User({ ...req.body, password: hashPassword });
//     await newUser.save();

//     return res
//       .status(201)
//       .send({ message: "User created successfully", redirectTo: "/" });
//   } catch (error) {
//     console.error("Registration error:", error); 
//     return res.status(500).send({ message: "Internal Server Error" });
//   }
// };

// module.exports = { registerUser };
