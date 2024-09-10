var express = require('express')
const loginService = require('../service/authService')
var router = express.Router()

router.post("/login", function (req, res, next) {
    loginService(req)
})

//url- http://localhost:2020/auth/login
// method: post


module.exports = router;