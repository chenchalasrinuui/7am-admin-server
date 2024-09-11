var express = require('express')
const loginService = require('../service/authService')
var router = express.Router()

router.post("/login", async function (req, res, next) {
    console.log(1);
    const result = await loginService(req)
    console.log(6)
    res.send(result)
})

//url- http://localhost:2020/auth/login
// method: post


module.exports = router;