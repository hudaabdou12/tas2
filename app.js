

const request = require("request")

const geocode = require("./geaodata")

const forecast = require('./forcast')

const country = process.argv[2]
geocode(country, (error, data) => {
 console.log("Error:", error)
 console.log("data:", data)

forecast(data.longitude, data.latitude, (error, data) => {
 console.log("Error:", error)
 console.log("data:", data)
   })
 })
