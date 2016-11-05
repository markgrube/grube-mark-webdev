/**
 * Created by Mark on 11/5/2016.
 */
module.exports = function(app){
    var websites = [
        {"_id": 001, "name": "Bjerg's Address Book", uid: 001, "description": "addresses"},
        {"_id": 002, "name": "Blogger", uid: 001, "description": "some blog"},
        {"_id": 003, "name": "Blogging App", uid: 001, "description": "blogging app?"},
        {"_id": 004, "name": "Script Testing App", uid: 001, "description": "TDD"},
        {"_id": 005, "name": "Doublelift's Address Book", uid: 002, "description": ""},
        {"_id": 006, "name": "Blogger", uid: 002, "description": ""},
        {"_id": 007, "name": "Blogging App", uid: 002, "description": ""},
        {"_id": 008, "name": "Script Testing App", uid: 002, "description": ""},
        {"_id": 009, "name": "Dyrus' Address Book", uid: 003, "description": ""},
        {"_id": 010, "name": "Blogger", uid: 003, "description": ""},
        {"_id": 011, "name": "Blogging App", uid: 003, "description": ""},
        {"_id": 012, "name": "Script Testing App", uid: 003, "description": ""}
    ];

    app.post('/api/user/:userId/website', createWebsite);
    app.get('/api/user/:userId/website', findAllWebsitesForUser);
    app.get('/api/website/:websiteId', findWebsiteById);
    app.put('/api/website/:websiteId', updateWebsite);
    app.delete('/api/website/:websiteId', deleteWebsite);

    function createWebsite(req, res){}
    function findAllWebsitesForUser(req, res){}
    function findWebsiteById(req, res){}
    function updateWebsite(req, res){}
    function deleteWebsite(req, res){}

}