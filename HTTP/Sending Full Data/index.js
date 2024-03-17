const fs = require("fs");
const http = require("http");


const server = http.createServer((req, res) => {

    switch (req.url) {
        case "/":
            /* Reading the json file if user is on homepage */
            fs.readFile("data.json", "utf-8",
                (err, data) => {
                    /* If no error, then display the json file */
                    if (!err) {
                        res.write(data);
                        res.end();
                    }

                    /* If error, then display it */
                    else {
                        res.write(err.message);
                        res.end();
                    }
                }
            );
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