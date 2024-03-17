const path = require("path");


//Directory name :
x = path.dirname("D:/PROGRAMMING/Node JS/Path/index.js");
console.log(x);


//File name :
x = path.basename("D:/PROGRAMMING/Node JS/Path/index.js");
console.log(x);


//Extension name :
x = path.extname("D:/PROGRAMMING/Node JS/Path/index.js");
console.log(x);


//Detailed info :
x = path.parse("D:/PROGRAMMING/Node JS/Path/index.js");
console.log(x);
console.log(x.root);