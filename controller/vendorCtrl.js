var express = require('express')
var router = express.Router()

var { saveVendorService } = require('../service/vendorService')

router.post('/save', async function (req, res, next) {
    try {
        var result = await saveVendorService(req)
        res.send(result)
    } catch (ex) {
        res.send(ex?.message)
    }
})

router.put('/update', function (req, res, next) {

})

router.get("/get", function (req, res, next) {

})

router.delete("/delete", function (req, res, next) {

})

module.exports = router;

