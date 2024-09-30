

async function saveVendorDAO(data) {
    var db = await getDB()
    var collection = db.collection('vendors')
    var result = await collection.insertOne(data)
    return result;
}

function getVendorDAO() {

}

function updateVendorDAO() {

}

function deleteVendorDAO() {

}

module.exports = {
    saveVendorDAO,
    updateVendorDAO,
    deleteVendorDAO,
    getVendorDAO
}