const express = require("express")
const { UserController } = require("../controller/userController")
const router = express.Router()

router.get("/", UserController.getAllUsers)
router.post("/register", UserController.register)

module.exports = router