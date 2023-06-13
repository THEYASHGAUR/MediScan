
import express from "express";
// import path from "path";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "mediscan",
  })
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));

const mediScan = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", mediScan);

// Using Middlewares
// app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));



// Setting up View Engine
app.set("view engine", "ejs");





const isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;
    if (token) {
      const decoded = jwt.verify(token, "sdjasdbajsdbjasd");
  
      req.user = await User.findById(decoded._id);
  
      next();
    } else {
      res.redirect("/login");
    }
  };
  
app.get("/", isAuthenticated, (req, res) => {
    res.render("home", { name: req.user.name });
  });
  

app.get("/login", (req, res) => {
    res.render("login");
  });
  
app.get("/register", (req, res) => {
    res.render("register");
  });
  



app.listen(5555, () => {
    console.log("Server is working");
  });

  