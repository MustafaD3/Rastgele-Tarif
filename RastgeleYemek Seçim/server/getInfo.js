class getINFO{

    constructor(){
        this.fs = require("fs")
    }

    
    getFOOD(){
        return new Promise((resolve,reject) =>{
           this.fs.readFile("foods.json","utf-8",function(error,data){
                if(error){
                    reject(error)
                }
                else{
                    resolve(data)
                }
           })
        })
    }
}
module.exports = getINFO