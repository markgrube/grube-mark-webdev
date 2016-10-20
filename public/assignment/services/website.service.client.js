(function () {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);

    function WebsiteService() {
        var websites = [
            {"_id": 001, "name": "Bjerg's Address Book", uid: 123, "description": ""},
            {"_id": 002, "name": "Blogger", uid: 123, "description": ""},
            {"_id": 003, "name": "Blogging App", uid: 123, "description": ""},
            {"_id": 004, "name": "Script Testing App", uid: 123, "description": ""},
            {"_id": 005, "name": "Doublelift's Address Book", uid: 234, "description": ""},
            {"_id": 006, "name": "Blogger", uid: 234, "description": ""},
            {"_id": 007, "name": "Blogging App", uid: 234, "description": ""},
            {"_id": 008, "name": "Script Testing App", uid: 234, "description": ""},
            {"_id": 009, "name": "Dyrus' Address Book", uid: 345, "description": ""},
            {"_id": 010, "name": "Blogger", uid: 345, "description": ""},
            {"_id": 011, "name": "Blogging App", uid: 345, "description": ""},
            {"_id": 012, "name": "Script Testing App", uid: 345, "description": ""}
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