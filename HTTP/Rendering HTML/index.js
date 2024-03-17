const fs = require("fs");
const http = require("http");


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


server.listen(3000, () => {
    console.log("Server started...");
});