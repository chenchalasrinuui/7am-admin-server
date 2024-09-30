var { saveVendorDAO } = require('../dao/vendorDAO')
async function saveVendorService(req) {
    var data = req.body.data
    var result = await saveVendorDAO(data)
    return result;
}

function getVendorService() {

}

function updateVendorService() {

}

function deleteVendorService() {

}

module.exports = {
    saveVendorService,
    updateVendorService,
    deleteVendorService,
    getVendorService
}