import express from "express"
import mysql from "mysql" 

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"ChiliuMsAhpen2710!",
    database:"game_schema"

})

app.get("/", (req, res) => {
    res.json("Hello, this is the backend!")
})


app.get("/games", (req, res)=>{
    const q = "SELECT * FROM games"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data);
    })
})

app.post("/games", (req, res)=> {
    const q = "INSERT INTO games (`name`, `preparation`, `gameplay`, `coverimg`) VALUES (?)"
    //get from user dynamicly
    const values = ["Name from backend", "prep from backend", "gameplay from backend", "coverimg from backend"]

    db.query(q,[values], (err,data) => {
        if (err) return res.json(err);
        return res.json("Game has been created successfully!");
    })

})

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})