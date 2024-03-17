const fs = require("fs");


//Writing to file :
fs.writeFileSync("test.txt", "This is my test file");


//Appending new data :
fs.appendFileSync("test.txt", " , hello new data.");


//Reading from file (No encoding) :
buf_data = fs.readFileSync("test.txt");
data = buf_data.toString();
console.log(data);


//Reading from file (utf-8 encoding) :
data = fs.readFileSync("test.txt", "utf-8");
console.log(data);


//Copying file :
fs.copyFileSync("test.txt", "test2.txt");


//Renaming file :
fs.renameSync("test2.txt", "renamed.txt");


//Deleting file :
fs.unlinkSync("renamed.txt");


//Making directory :
fs.mkdirSync("fsDir/temp", { recursive: true });


//Deleting directory :
fs.rmdirSync("fsDir", { recursive: true });