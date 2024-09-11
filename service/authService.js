const loginDAO = require('../dao/authDAO')
async function loginService(req) {
    console.log(2)
    const data = req.body.data
    const result = await loginDAO(data)
    console.log(5)
    return result;
}


module.exports = loginService