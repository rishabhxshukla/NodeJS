const fs = require("fs");
const url = require("url");
const http = require("http");


const port = 3000;

const server = http.createServer((req, res) => {

    //Fetching the requested url
    const path = req.url;

    //Complete url details
    let parsedURL = url.parse(path, true);
    console.log(parsedURL);

    //Storing the query parameter
    let id = parsedURL.query.id;

    switch (req.url) {
        case "/products":
            /* Displaying all products on products page */
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

        case `/products?id=${id}`:
            /* Displaying single product with given id */
            fs.readFile("data.json", "utf-8",
                (err, data) => {
                    /* If no error, then display the element */
                    if (!err) {
                        let arr = JSON.parse(data);
                        let element = arr[id - 1];
                        res.write(JSON.stringify(element));
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

        default:
            res.write("Error Page");
            res.end();
    }
});


server.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});