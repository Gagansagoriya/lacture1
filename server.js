// Create a server using Node.js.

// 1. Import http library/module

const { log } = require('console');
const http = require('http');


// 2.Create a server.
const server =  http.createServer((req, res) =>{
     
    console.log(req.url);
    res.write('Welcome to my application ');

    if(req.url =='/product' ){
        
        // response ends

        return res.end("This is product Page");

    }else if(req.url =='/user'){
         res.end("This is User base page");
    }
    // Here comes the request.
    // res.end("Welcome to Node.Js Server");
});

// 3.Specify a port number to listen to client's request.

server.listen(3100 , () =>{

console.log("Server is listening on port 3100");

});

// console.log("Server is listening on port 3100");
