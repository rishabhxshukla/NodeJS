const fs = require("fs");
const http = require("http");


const server = http.createServer((req, res) => {
    /* Error flag */
    let error = true;

    switch (req.url) {
        case "/":
            if (!error) {
                res.write("Home Page");
                res.end();
            }

            else {
                let message = `Date : ${Date()} \n  Path : ${req.url} \n  Message: An error has occurred!`;
                fs.writeFile("./log.txt", message,
                    (err) => {
                        if (!err) {
                            res.write("Error occurred!\nCheck the log file.");
                            res.end();
                        }
                    }
                );
            }
            break;

        case "/about":
            res.write("About Page");
            res.end();
            break;

        default:
            res.write("Error Page");
            res.end();
    }
});


server.listen(3000, () => {
    console.log("Server started...");
});