'use strict'

const express = require("express")
const router = express.Router()

const firstPageController = require("./controller/bluedot");
//const callBackController = require("./controller/callbackController");
//const welcome = require("./controller/welcome");
//const makeaBookingController = require("./controllers/makeabooking");
//const showAvailableCarsAsFilter = require("./controllers/showavailablecarsqbc");

//post route for registering new vehicle and adding it into abailable list
router.get("/", firstPageController.welcome)
//router.get("/callback", callBackController.callback)
//router.get("/start", authController.forbidden)
//router.post("/filter", callBackController.filter)
//router.get("/logout", callBackController.logout)
router.get("/about", firstPageController.about)
router.get("/contact", firstPageController.contact)
//router.get("/", firstPageController.welcome)


//get method for showing booking details of particular vehicle using vehicle number
//router.get("/showcarwithvehicleNumber", showCarDetailsController.showCarDetailsUsingVehicleNumber)



//get method for showing booking details of all vehicles of particular model
//router.get("/showAllCarWithModelName", showCarDetailsController.showAllCarWithModelName)

module.exports = router