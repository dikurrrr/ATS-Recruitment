const { randomBytes } = require('crypto')
const randomHex = randomBytes(5).toString('hex')

const createJobPost = 
{
    "file_cover_id": "61426b88-80fc-43a3-98f3-c8a7c8cfae32",
    "titles": "Dikur create job Jest #2",
    "job_desc": `${randomHex}`,
    "status": "active",
    "key_responsibility": `${randomHex}`,
    "requirment": `${randomHex}`,
    "location_id": "a1a6a8b8-2712-11ee-be56-0242ac120001", //3ad18568-2712-11ee-be56-0242ac120003 
    "branch_office_id": "",
    "department_id": "047fee40-2718-11ee-be56-0242ac120002",//9f5ebe96-2713-11ee-be56-0242ac120002
    "position_id": "77aa057e-2716-11ee-be56-0242ac120002", //77aa0952-2716-11ee-be56-0242ac120002
    "job_type_id": `${randomHex}`, //e1116fa4-2980-11ee-be56-0242ac120002
    "level_id": "f618f0cc-2712-11ee-be56-0242ac120002", //f618f36a-2712-11ee-be56-0242ac120002
    "until_date": "2023-12-31T00:00:00Z",
    "quota": 5,
    "doc_templates": [
        "bc3d0f06-4a3e-4914-adf4-2d2540cae238",
        "7e01863b-3595-49bc-9b52-a3735eb2bcba"
    ],
    "organizer": [
        "4c387adf-ac15-4987-b0cb-9a9d63408475",
        "0de3c0f1-b101-40f2-987a-fb4d574282fe"
    ]
}

module.exports.createJobPost = createJobPost;