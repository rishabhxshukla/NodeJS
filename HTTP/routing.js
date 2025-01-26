const http = require('http');

//Port
const port = 3000;

//Creating server
const server = http.createServer((req, res) => {

    //Fetching the path and method from the address bar
    const path = req.url;
    const method = req.method;

    switch (path) {
        case "/":
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.write("Hello from the server!\n\nThis is my homepage..");
            res.end();
            break;

        case "/about":
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.write("This is the ABOUT section");
            res.end();
            break;

        case "/contact":
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.write("This is the CONTACT US section");
            res.end();
            break;

        default:
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write("<h1> ERROR 404 : Page not found :( </h1>");
            res.end();
    }
});


//Listening to server
server.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});