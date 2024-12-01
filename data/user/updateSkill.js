const { randomBytes } = require('crypto')
const randomHex = randomBytes(5).toString('hex')
const updateSkill = 
{
    "client_id": "5454de2c-2136-11ee-be56-0242ac120023",
    "file_id": "742aef62-f517-4142-9ec4-8b3e59dc117a",
    "title": "Update skill test from jest",
    // "version": "1",
    // "description": "test update"
    "version": `${randomHex}`,
    "description": `${randomHex}`
}
module.exports.updateSkill = updateSkill;
