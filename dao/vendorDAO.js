const getDB = require("../common/getDB");


async function saveVendorDAO(data) {
    var db = await getDB()
    var collection = db.collection('vendors')
    var result = await collection.insertOne(data)
    return result;
}

async function getVendorDAO() {
    var db = await getDB()
    var collection = db.collection("vendors")
    var result = await collection.find({}).toArray()
    return result;
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