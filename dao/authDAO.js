var mongodb = require('mongodb')
async function loginDAO(data) {
    try {
        // connect with DB
        var url = "mongodb+srv://nit:nit@7amcluster.ilg9t.mongodb.net/"
        var mongoClient = mongodb.MongoClient
        var server = await mongoClient.connect(url)
        var db = server.db('7am')
        var collection = db.collection('admin')

        // server -  install db s/w - run - databases - collections - documents
        // server - install db s/w - run - database - table - rows
    } catch (ex) {

    } finally {

    }
}

module.exports = loginDAO