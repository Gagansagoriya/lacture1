
// Create a server
const http = require('http');
// const { resolve } = require("path");
const fs = require('fs');
// const { log } = require("console");

const server =  http.createServer((requeset, response) =>{
   
     const data = fs.readFileSync('./index.html').toString();

     response.end(data);
});

server.listen(3100,() =>{
    console.log('Servert is listening on 3100');
});



