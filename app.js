'use strict'
/*
request_token_url = 'https://api.twitter.com/oauth/request_token'
access_token_url = 'https://api.twitter.com/oauth/access_token'
authorize_url = 'https://api.twitter.com/oauth/authorize'


//Support keys from environment vars (Heroku).
app.config['APP_CONSUMER_KEY'] = os.getenv(
    'TWAUTH_APP_CONSUMER_KEY', 'API_Key_from_Twitter')
app.config['APP_CONSUMER_SECRET'] = os.getenv(
    'TWAUTH_APP_CONSUMER_SECRET', 'API_Secret_from_Twitter')
*/
    //const path = require("path")
const express = require("express")
const app = express()
const router = require("./router")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
//app.use(express.static("public"))
//app.set("views", "views")
//app.set("view engine", "json")
app.use(express.static("public"))
app.use(express.static(__dirname + 'public'))
app.set("views", "view")
app.set("view engine", "hbs")
app.use("/", router)

app.listen(process.env.PORT||3000, () => {
  console.log("The server is now running on Port 3000")
})