const fs = require("fs");
const http = require("http");


const port = 3000;

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            //Reading HTML content
            let content = fs.readFileSync("index.html", "utf-8");
            //Writing it on page
            res.write(content);
            res.end();
            break;

        default:
            res.write("Error Page!");
            res.end();
            break;
    }
});


server.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});