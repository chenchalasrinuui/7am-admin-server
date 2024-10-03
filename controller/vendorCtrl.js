var express = require('express')
var router = express.Router()

var { saveVendorService, getVendorService, updateVendorService } = require('../service/vendorService')

router.post('/save', async function (req, res, next) {
    try {
        var result = await saveVendorService(req)
        res.send(result)
    } catch (ex) {
        res.send(ex?.message)
    }
})

router.put('/update', async function (req, res, next) {
    try {
        const result = await updateVendorService(req)
        res.send(result)
    } catch (ex) {
        res.send(ex?.message)
    }

})

router.get("/get", async function (req, res, next) {
    try {
        var result = await getVendorService();
        res.send(result)
    } catch (ex) {
        res.send(ex?.message)
    }

})

router.delete("/delete", function (req, res, next) {

})

module.exports = router;

