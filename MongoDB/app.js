const express = require('express');
const app = express();
const userModel = require('./usermodel');



app.get('/', (req,res) => {
  res.send('Welcome  to MongoDB database')
})

app.get('/create', async (req,res) => {
let createduser = await  userModel.create({
    name: 'Johni ',
    email: 'Johni@gmail.com'
  })
  
  res.send(createduser)

})

app.get('/update', async (req,res) => {
  let updateduser = await userModel.findOneAndUpdate( { name: 'John Doe'}, {name  : 'John Smith'}, {new : true})
  res.send(updateduser)
})

app.get('/read' , async (req,res) => {
  let readusers = await userModel.find();
  res.send(readusers)
})

app.get("/delete", async (req, res) => {
  let deletedusers = await userModel.findOneAndDelete({ name: "Johni" });
  res.send(deletedusers);
});

app.listen(3000 , function(){
  console.log('Server is running on port 3000');
});