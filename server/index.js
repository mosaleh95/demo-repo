const express = require("express")
const app = express()
const db = require("./models")
const cors = require("cors")

app.use(cors())
app.use(express.json())

//Routers 

const Postpaid = require("./routes/Postpaid")
app.use("/postpaid" , Postpaid)

db.sequelize.sync().then(()=>{
    app.listen(3001 , ()=>{
        console.log("This Server is running on PORT 3001")
    })
})

