var { saveVendorDAO, getVendorDAO } = require('../dao/vendorDAO')
async function saveVendorService(req) {
    var data = req.body.data
    var result = await saveVendorDAO(data)
    return result;
}

async function getVendorService() {
    var result = await getVendorDAO();
    return result;
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