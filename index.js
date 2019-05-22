const express = require("express")
const app = express()
const port = 8080
const path = require("path")
const hbs = require("hbs")


//changing views hbs path by :
let hbsPath = path.join(__dirname,"views")
app.set("views", hbsPath)
app.use(express.static(path.join(__dirname,"/public")))




let hf = path.join(__dirname, "/views/parts")
app.set("view engine", "hbs")
hbs.registerPartials(hf)
app.get("/",(res,req)=> req.render("index"))






// all pages
const fs = require("fs")
const pages = (fs.readdirSync("./views"))
let all = pages.pop()
console.log(all)
console.log(pages)
app.get("/:page", (req,res)=>{
if (pages.find((e)=> e.replace(".hbs", "") === req.params.page)){
    res.render(req.params.page)
    }else {
    res.render("zzzzz")
    }
})






app.listen(port, ()=> console.log("listening to port : "+ port))




