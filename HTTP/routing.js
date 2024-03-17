const http = require('http');


//Creating server :
const server = http.createServer((req, res) => {

    //Fetching the path and method from the address bar
    const path = req.url;
    const method = req.method;

    switch (path) {
        case "/":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.write("Hello from the server!\n\nThis is my homepage..");
            res.end();
            break;
        case "/about":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.write("This is the ABOUT section");
            res.end();
            break;
        case "/contact":
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.write("This is the CONTACT US section");
            res.end();
            break;
        default:
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write("<h1> ERROR 404 : Page not found :( </h1>");
            res.end();
    }
});


//Listening server :
server.listen(3000, () => {
    console.log("Listening on port 3000..");
});