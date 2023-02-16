const express = require("express")
const https = require("https")
const app = express()

app.get("/", function(req, res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Henderson&appid=b10af37aefcd92734f4b755e42453aa0&units=imperial"

    https.get(url, function(response){
        console.log(response.statusCode)
    })

    res.send("Server is up and running.")
})




app.listen(3000, function(){
    console.log("Server is running on port 3000.")
})