const createUser = 
{
    "full_name": "Create User",
    "privy_id": "DEVKO3200",
    //"role_id": "684927e4-2136-11ee-be56-0242ac120002", //Superadmin merchant privyID
    //"role_id": "cf257866-2945-11ee-be56-0242ac120002", //Admin merchant privyID
    //"role_id": "44383653-4a4c-4057-b1df-1a8d04c52238", //User merchant privyID
    "role_id": "684927e4-2136-11ee-be56-0242ac120002", //Admin Merchant Claus
    "email": "devko3200@yopmail.com",
    "is_active": true,
    "client_id" :"0de3c0f1-b101-40f2-987a-fb4d574282fe" // ambil dari database CLIENT ya ges
}
module.exports.createUser = createUser;
