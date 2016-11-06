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

    function createWebsite(req, res){
        var website = req.body;
        website._id = (new Date()).getTime();
        websites.push(website);
        res.send(website);
    }

    function findAllWebsitesForUser(req, res){
        var userId = parseInt(req.params.userId);
        var result = [];
        for (var w in websites) {
            if (websites[w].uid === userId) {
                result.push(websites[w]);
            }
        }
        res.json(result);
    }

    function findWebsiteById(req, res){
        var websiteId = parseInt(req.params.websiteId);
        for (var w in websites) {
            if (websites[w]._id === websiteId) {
                res.send(websites[w]);
                return;
            }
        }
        res.send('0');
    }

    function updateWebsite(req, res){
        var website = req.body;
        var websiteId = parseInt(req.params.websiteId);
        for (var w in websites) {
            if (websites[w]._id === websiteId) {
                websites[w] = website;
                return;
            }
        }
        res.send('200');
    }

    function deleteWebsite(req, res){
        var websiteId = parseInt(req.params.websiteId);
        for (var i=0; i < websites.length; i++) {
            if (websites[i]._id == websiteId) {
                websites.splice(i, 1);
            }
        }
        res.send('200');
    }

};