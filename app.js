const fs= require("fs")
let data = fs.readFileSync("./welcome.txt")
console.log(data.toString())