const fs = require("fs");
const http = require("http");


const port = 3000;

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
                fs.writeFileSync("./log.txt", message);
                res.write("Error occurred!\nCheck the log file.");
                res.end();
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


server.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});