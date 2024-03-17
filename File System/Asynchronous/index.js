const fs = require("fs");


//Writing to file :
fs.writeFile("test.txt", "This is my test file",
    (err) => {
        if (err)
            console.log(err);
    }
);


//Appending new data :
fs.appendFile("test.txt", " , hello new data.",
    (err) => {
        if (err)
            console.log(err);
    }
);


//Reading from file (No encoding) :
fs.readFile("test.txt",
    (err, buf_data) => {
        if (!err)
            console.log(buf_data.toString());
        else
            console.log(err);
    }
);


//Reading from file (utf-8 encoding) :
fs.readFile("test.txt", "utf-8",
    (err, data) => {
        if (!err)
            console.log(data);
        else
            console.log(err);
    }
);


//Copying file :
fs.copyFile("test.txt", "test2.txt",
    (err) => {
        if (err)
            console.log(err);
    }
);


//Renaming file :
fs.rename("test2.txt", "renamed.txt",
    (err) => {
        if (err)
            console.log(err);
    }
);


//Deleting file :
fs.unlink("renamed.txt",
    (err) => {
        if (err)
            console.log(err);
    }
);


//Making directory :
fs.mkdir("fsDir/temp", { recursive: true },
    (err) => {
        if (err)
            console.log(err);
    }
);


//Deleting directory :
fs.rmdir("fsDir", { recursive: true },
    (err) => {
        if (err)
            console.log(err);
    }
);


/*
NOTE :
There might be some errors on the console when you run the whole file together.
In such case, try to comment everything and run the code line-by-line.
 */