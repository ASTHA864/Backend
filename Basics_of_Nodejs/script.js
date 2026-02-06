const fs = require('fs');
const http = require('http');
const server = http.createServer(function(req,res) {
  res.end("Hey!! Listen");
})
server.listen(3000);
// Write/Create File
// fs.writeFile(file, data[, options], callback)
// fs.writeFile("data.txt", "Welcome to backend series", function(err) {
//   if(err) console.error(err);
//   else console.log("done");
// })

// Append File - Adding more content to the preexisting file
// fs.appendFile(path, data[, options], callback)
// fs.appendFile("data.txt"," By Sheryians Coding School", function(err){
//   if(err) console.error(err);
//   else console.log("Done")
// })

// Rename
// fs.rename(oldPath, newPath, callback)
// fs.rename("data.txt","db.txt",function(err){
//   if(err) console.error(err);
//   else console.log("File Renamed")
// })

// Copy File
// fs.copyFile(src, dest[, mode], callback)
// fs.copyFile("db.txt","./copy/copy.txt", function(err) {
//   if(err) console.error(err.message);
//   else console.log("File Copied")
// })

// Unlink - Deleting the file
// fs.unlink(path, callback)
// fs.unlink("db.txt", function(err) {
//   if(err) console.error(err);
//   else console.log("File Deleted");
// })

// Remove Directory -rmdir
// fs.rmdir(path[, options], callback)
// fs.rmdir("./copy" , {recursive:true}, function(err){
//      if(err) console.error(err);
//      else console.log("Directory removed");
// })