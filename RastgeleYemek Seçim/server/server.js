const http = require("http")
const getINFO = require("./getInfo")
const getInfoClass = new getINFO()

const server = http.createServer((req,res) => {
    if(req.url ==="/" && req.method === "GET"){
        console.log("Veri İstegi Geldi")
        res.setHeader("Access-Control-Allow-Origin","*")
        getInfoClass.getFOOD()
        .then(data => {
            res.write(data)
            res.end()
            console.log("Veri Yollandı")
        })
        .catch(error => console.log(error))
    }
    else{
        return
    }
})

server.listen("3000")