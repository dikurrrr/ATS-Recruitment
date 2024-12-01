const { randomBytes } = require('crypto')
const randomHex = randomBytes(5).toString('hex')

const updateJob = 
{
    "file_cover_id": "c713a118-7620-435b-9a43-03caac1921ef",
    "titles": `${randomHex}`,
    "job_desc": "Dikur update job",
    "status": "active",
    "key_responsibility": `${randomHex}`,
    "requirment": "Dikur update job",
    "location_id": "3ad18568-2712-11ee-be56-0242ac120003", //Jogja: 3ad18568-2712-11ee-be56-0242ac120003
    //"branch_office_id": "ini gak di pake yagesyaa",
    "department_id": "9f5ebe96-2713-11ee-be56-0242ac120002",//Quarter: 9f5ebe96-2713-11ee-be56-0242ac120002
    "position_id": "77aa057e-2716-11ee-be56-0242ac120002", //FE: 77aa057e-2716-11ee-be56-0242ac120002
    "job_type_id": "job type",
    "level_id": "f618f0cc-2712-11ee-be56-0242ac120002", //Junior: f618f0cc-2712-11ee-be56-0242ac120002
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

module.exports.updateJob = updateJob