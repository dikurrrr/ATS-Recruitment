const { randomBytes } = require('crypto')
const randomHex = randomBytes(5).toString('hex')

const updateUser = 
{
    "full_name": `${randomHex}`,
    "privy_id": "SDI3885",
    //"role_id": "684927e4-2136-11ee-be56-0242ac120002", //Superadmin
    //"role_id": "cf257866-2945-11ee-be56-0242ac120002", //Admin biasa
    "role_id": "684927e4-2136-11ee-be56-0242ac120002", //User
    "email": "SDI3885@yopmail.com",
    "is_active": true,
    "client_id" :"0de3c0f1-b101-40f2-987a-fb4d574282fe" // wajib pake iki karena ambil dari database CLIENT
}
module.exports.updateUser = updateUser;
