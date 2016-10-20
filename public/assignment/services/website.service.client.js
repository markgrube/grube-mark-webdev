(function () {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);

    function WebsiteService() {
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

        var api = {
            findWebsitesByUser: findWebsitesByUser,
            findWebsiteById: findWebsiteById,
            createWebsite: createWebsite,
            updateWebsite: updateWebsite,
            deleteWebsite: deleteWebsite
        };
        return api;

        function createWebsite(userId, website) {
            website._id = websites.length+1;
            website.uid = userId;
            websites.push(website);
        }

        function findWebsiteById(wid) {
            for (var w in websites) {
                if (websites[w]._id === wid) {
                    return websites[w];
                }
            }
            return null;
        }

        function findWebsitesByUser(userId) {
            var result = [];
            for (var w in websites) {
                if (websites[w].uid === userId) {
                    result.push(websites[w]);
                }
            }
            return result;
        }

        function updateWebsite(websiteId, website) {
            website._id = websiteId;

            for (var w in websites) {
                if (websites[w]._id === websiteId) {
                    websites[w] = website;
                    return 0;
                }
            }
            return 1;
        }

        function deleteWebsite(websiteId) {
            for (var w in websites) {
                if (websites[w]._id === websiteId) {
                    websites.splice(w, 1);
                    return 0;
                }
            }
            return 1;
        }
    }
})();