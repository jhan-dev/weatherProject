const express = require("express")
const https = require("https")
const app = express()

app.get("/", function(req, res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Lasvegas&appid=b10af37aefcd92734f4b755e42453aa0&units=imperial"

    https.get(url, function(response){
        console.log(response.statusCode)

        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDesc = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imgURL = `http://openweathermap.org/img/wn/${icon}@2x.png`

            res.write(`<h1>The temperature in Las Vegas is ${temp} fahrenheit.</h1>`)

            res.write(`<p>The weather is currently ${weatherDesc}.</p>`)

            res.write(`<img src="${imgURL}">`)

            res.send()
        })
    })
})




app.listen(3000, function(){
    console.log("Server is running on port 3000.")
})