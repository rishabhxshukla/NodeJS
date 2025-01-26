const fs = require("fs");
const http = require("http");


const port = 3000;

const server = http.createServer((req, res) => {

    switch (req.url) {
        case "/":
            /* Reading the json file when user visits homepage */
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


server.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});