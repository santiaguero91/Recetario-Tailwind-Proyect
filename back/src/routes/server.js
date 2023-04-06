const http = require('http');
const getCharById = require("../controllers/getCharById")
const getCharDetail = require("../controllers/getCharDetail")


http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let id = req.url.split("/").at(-1)
    
if(req.url.includes("onsearch")){
    getCharById(res, id)
    console.log(id)
}

if(req.url.includes("detail")){
    getCharDetail(res, id)
    console.log(id)
}



}).listen(3001, 'localhost');