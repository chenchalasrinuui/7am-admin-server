var { saveVendorDAO, getVendorDAO, updateVendorDAO } = require('../dao/vendorDAO')
async function saveVendorService(req) {
    var data = req.body.data
    var result = await saveVendorDAO(data)
    return result;
}

async function getVendorService() {
    var result = await getVendorDAO();
    return result;
}

async function updateVendorService(req) {
    var data = req.body.data
    var id = req.query.id
    var result = await updateVendorDAO(data, id)
    return result;
}

function deleteVendorService() {

}

module.exports = {
    saveVendorService,
    updateVendorService,
    deleteVendorService,
    getVendorService
}