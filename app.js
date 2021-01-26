const express = require('express');
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser');;
const PORT = 3030

app.use(cors())
app.use(cookieParser())
app.get("/", (req, res)=>{
    console.table(req.cookies)
    return res.status(200).json({"message":"here"})
})
app.get("/cookie", (req, res)=>{
    console.log(req.cookies)
    res.cookie("localCookies", "vfg nrew", { maxAge: 900000, httpOnly: true })
    res.cookie("cenco", "orkig", { maxAge: 900000, httpOnly: true })
    return res.status(200).json({"message":"cookie route"})
})
app.listen(PORT)