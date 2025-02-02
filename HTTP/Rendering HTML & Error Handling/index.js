const http = require("http");
const fs = require("fs");


const port = 3000;

const server = http.createServer((req, res) => {

    const url = req.url;

    switch (url) {
        case "/":
            fs.readFile("indexx.html", "utf-8", (err, data) => {
                //If an error occurs
                if (err) {
                    let message = `Date : ${Date()} \nError : ${err.message}`;
                    fs.writeFileSync("errors.txt", message);
                    res.statusCode = 404;
                    res.setHeader("Content-Type", "text/html");
                    res.write(`<h1> ${message} </h1>`);
                    res.end();
                    return;  //Return
                }

                //If no error occurs
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/html");
                res.write(data);
                res.end();
            });
            break;

        default:
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/html");
            res.write("<h1> ERROR: Page not found! </h1>");
            res.end();
            break;
    }
});

server.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});