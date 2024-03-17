const os = require("os");


//Desktop name :
x = os.hostname();
console.log(x);


//Platform :
x = os.platform();
console.log(x);


//Type :
x = os.type();
console.log(x);


//Architecture :
x = os.arch();
console.log(x);


//Free memory (bytes) :
x = os.freemem();
console.log(x / 1024 / 1024 / 1024);


//Total memory (bytes) :
x = os.totalmem();
console.log(x / 1024 / 1024 / 1024);