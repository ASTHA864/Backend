const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

app.use(cookieParser());

// To hash a password:
// app.get("/", function (req, res) {
//    bcrypt.genSalt(10, function (err, salt) {
//     console.log(salt);
//     bcrypt.hash("password", salt, function (err, hash) {
//       console.log(hash);
//       res.send("Hello World");
//     });
//   });
// });


// To check a password:
// app.get('/' , (req,res) => {
//   bcrypt.compare(
//     "password",
//     "$2b$10$CKmE10Gyg2akM6zsLZtcH.uLlav6aNMBrmQxiuUFbHHzVVYlRZ6MG",
//     function (err, result) {
//       // result == true
//       console.log(result);
//       res.send(result)
//     },
//   );
// })

// JWT token:
app.get('/', function (req,res) {
  let token = jwt.sign({email : 'joy@gmail.com'}, 'secret');
  console.log(token);
  res.cookie('token', token);
  res.send('JWT Example')
})

app.get('/read', function(req,res) {
  // console.log(req.cookies.token)
 let data=  jwt.verify(req.cookies.token , 'secret')
 console.log(data)
 res.send('Read Page')
})

app.listen(3000);
