// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const app = express();

// // ✅ Updated CORS config to allow frontend on localhost:3000
// app.use(cors({
//   origin: "http://localhost:3000",
//   methods: ["GET", "POST"],
//   credentials: true
// }));

// app.use(express.json());

// // ✅ Connect to MongoDB
// mongoose.connect("mongodb+srv://lakkadiabhigna:tTn5MC0TBJtCUWv0@cluster0.ie67rev.mongodb.net/userAuth", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.log("MongoDB connection error:", err));

// // ✅ Define User schema
// const UserSchema = new mongoose.Schema({
//   username: String,
//   email: { type: String, unique: true },
//   password: String,
// });

// const User = mongoose.model("User", UserSchema);

// // ✅ Signup route
// app.post("/signup", async (req, res) => {
//   const { username, email, password } = req.body;
//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email already registered" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     await User.create({ username, email, password: hashedPassword });

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (err) {
//     console.error("Signup error:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // ✅ Login route
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }

//     const token = jwt.sign({ id: user._id }, "secret_key", { expiresIn: "1d" });
//     res.json({ message: "Login successful", token });
//   } catch (err) {
//     console.error("Login error:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // ✅ Start server on correct port (5000)
// app.listen(5000, () => console.log("Server running on port 5000"));



require('dotenv').config(); // Load environment variables from .env

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

// CORS config to allow frontend on localhost:3000
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

// Connect to MongoDB using URI from .env
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB connection error:", err));

// Define User schema
const UserSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model("User", UserSchema);

// Signup route
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashedPassword });

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id }, "secret_key", { expiresIn: "1d" });
    res.json({ message: "Login successful", token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
