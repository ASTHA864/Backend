const express = require('express');
const app = express();

// Blob converter- makes data in readable format
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// Middleware
app.use(function(req,res,next) {
  console.log("first middleware")
  next();
});
app.use(function(req,res,next){
  console.log("second midleware")
  next();
});

// Routes
app.get("/", function(req,res) {
  res.send("Home Page");
});
app.get("/profile", function(req, res) {
  res.send("Profile Page");
});
app.get("/about", function (req, res,next) {
  return next(new Error("Not implemented"));
});

// Error handlers
app.use((err,req,res,next) => {
 console.error(err.stack)
 res.status(500).send("Something broke")
})
app.listen(3000);