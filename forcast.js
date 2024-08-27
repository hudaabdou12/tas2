
const request = require("request")
const forecast = (longitude, latitude, callback) => {
   
const url = "https://api.weatherapi.com/v1/current.json?key=dcbf6e806012431cbdb81243241607&q="
    + longitude + "," + latitude

 request({ url, json: true }, (error, response) => {
 if (error) {
 callback("Error has occured", undefined)
 } else if (response.body.error) {
 callback(response.body.error.message, undefined)
 } else {
  callback(undefined, response.body.location.name + " it is " + response.body.current.condition.text
     + '  and temp = ' + response.body.current.temp_c)
 }
 })
 }
module.exports = forecast