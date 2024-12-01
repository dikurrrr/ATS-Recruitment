const { randomBytes } = require('crypto')
const randomHex = randomBytes(5).toString('hex')

const createMerchant = 
{
    //Mandatory Login with superadmin Account
    "name": `${randomHex}`,
    "client_id": "",
    "keys": `${randomHex}`,
    "description": `${randomHex}`,
    "address": "Merchant Random",
    "username" : `${randomHex}` // need mandatory to fill
}
module.exports.createMerchant = createMerchant;
