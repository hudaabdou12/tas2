
const request = require ("request")

const geocode = (address, callback) => {
   
const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address +
      ".json?access_token=pk.eyJ1IjoiaHVkYWFiZG91MTMiLCJhIjoiY2x5c2JuYnpnMGYwbDJwcjA4djh5cmUwZSJ9.uDSZGPCS4zYWRP0-bMuxbg"
 
 request({ url: geocodeUrl, json: true }, (error, response) => {
 if (error) {
 callback("unable to conect", undefined)
 } else if (response.body.message) {
 callback(response.body.message, undefined)
 } else if (response.body.features.length == 0) {
 callback("unable to find location", undefined)
 } else {
 const longitude = response.body.features[0].center[0]
 const latitude = response.body.features[0].center[1]
 callback(undefined, {
  longitude: response.body.features[0].center[0],
  latitude: response.body.features[0].center[1]
 })
 }
 })
 }
 module.exports= geocode