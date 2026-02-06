var arr = [1, 2, 2, 3, 4];
// ForEach
// arr.forEach(function(val){
//   console.log(val + " hello");
// });

// Map
// let newarr= arr.map(function(val) {
//   return val*2;
// });
// console.log(newarr);

// Filter
// var newarr= arr.filter(function(val){
//   if(val>=3) {return true;}
//   else { return false;}
// });
// console.log(newarr);

// Find
// var newarr = arr.find(function (val) {
//   if (val == 2) {
//     return true;
//   }
// });
// console.log(newarr);

// Objects
var obj = {
  Name: "Astha",
  Email: "astha@gmail.com",
};
Object.freeze(obj);
obj.Name = "Test";
console.log(obj.Name);
