const { error } = require("console");
const fs = require ("fs")

fs.readFile("./welcome.txt", (error,data)=>{
    error? console.log (error) : console.log(data.toString())
})


const http = require("http");
http.createServer((request, response)=> {
    response.end("hello node")
}).listen(3000)
