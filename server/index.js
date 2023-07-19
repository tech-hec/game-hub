import express from "express"
import mysql from "mysql" 
import cors from "cors" 

const app = express()

const db = mysql.createConnection({
    //Branch: main, Role; admin
    host:"localhost",
    //host: "aws.connect.psdb.cloud",
    user:"root",
    //user: "kt4wned6i6w7iefikjah",
    password:"ChiliuMsAhpen2710!",
    //password: "pscale_pw_jldRqIfuJ8s1P32Cjq3XaFfIOKE4g81DsDNXHOt8KKV",
    database:"game_schema"
    //database:"game-hub"
})

app.use(express.json())
app.use(cors())

// Connect with MySQL : "mysql -h aws.connect.psdb.cloud -u kt4wned6i6w7iefikjah -p************ --ssl-mode=VERIFY_IDENTITY --ssl-ca=/etc/ssl/certs/ca-certificates.crt"


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
    const values = [
        req.body.name,
        req.body.prep,
        req.body.gameplay,
        req.body.coverimg,
    ]

    db.query(q,[values], (err,data) => {
        if (err) return res.json(err);
        return res.json("Game has been created successfully!");
    })

})

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})