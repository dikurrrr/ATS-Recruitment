const { randomBytes } = require('crypto')
const randomHex = randomBytes(5).toString('hex')

const createSkill = 
    {
        "client_id": "5454de2c-2136-11ee-be56-0242ac120002",
        "file_id": "b7362270-76f1-4f9c-aff6-4dbc5f1e48c0",
        "title": "Skill test dikur jest",
        "version": "version 2",
        "description": `${randomHex}`
    }
module.exports.createSkill = createSkill;
