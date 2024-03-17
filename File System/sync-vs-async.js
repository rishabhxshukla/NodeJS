const fs = require("fs");


//Writing to file :
fs.writeFileSync("test.txt", "This operation takes some time");


//Synchronous Reading :
//Here the compiler doesn't move forward till the operation of readFileSync() is completed.
data = fs.readFileSync("test.txt", "utf-8");
console.log(data);
console.log("After...");


//Asynchronous Reading :
//Here the compiler puts the readFile() on the side and moves forward.
fs.readFile("test.txt", "utf-8",
    (err, data) => {
        if (!err)
            console.log(data);
        else
            console.log(err);
    }
);
console.log("After...");