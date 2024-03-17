/*
Visit this url on Thunder Client :
http://localhost:3000/users?name=rishabh&id=3

Change the name and id and see the effects.
*/


const url = require("url");
const http = require("http");


const server = http.createServer((req, res) => {

    //Fetching the requested url :
    const path = req.url;

    //Complete url details :
    console.log("*** COMPLETE URL DETAILS ***");
    let parsedURL = url.parse(path, true);
    console.log(parsedURL);

    //Separate query parameters :
    console.log("*** QUERY PARAMETERS OBJECT ***");
    console.log(parsedURL.query);

    //Storing the query parameters :
    let id = parsedURL.query.id;
    let name = parsedURL.query.name;


    switch (path) {
        case "/":
            res.write("Home Page");
            res.end();
            break;

        case `/users?name=${name}&id=${id}`:
            res.write("Employee name : " + name);
            res.write("\n");
            res.write("Employee id : " + id);
            res.end();
            break;

        default:
            res.write("Error Page");
            res.end();
            break;
    }
});


server.listen(3000, () => {
    console.log("Server started...");
});