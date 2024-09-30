const getDB = require('../common/getDB')
async function loginDAO(data) {
    try {
        console.log(3)
        // connect with DB
        var db = await getDB()
        var collection = db.collection('admin')
        var result = await collection.find(data).toArray()
        console.log(4)
        return result;
    } catch (ex) {

    } finally {

    }
}

module.exports = loginDAO