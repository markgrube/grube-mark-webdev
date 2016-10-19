(function(){
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);

    function WebsiteService() {
        var websites = [
            {"_id": 001, "name": "Bjerg's Address Book", uid: 123},
            {"_id": 002, "name": "Blogger", uid: 123},
            {"_id": 003, "name": "Blogging App", uid: 123},
            {"_id": 004, "name": "Script Testing App", uid: 123},
            {"_id": 005, "name": "Doublelift's Address Book", uid: 234},
            {"_id": 006, "name": "Blogger", uid: 234},
            {"_id": 007, "name": "Blogging App", uid: 234},
            {"_id": 008, "name": "Script Testing App", uid: 234},
            {"_id": 009, "name": "Dyrus' Address Book", uid: 345},
            {"_id": 010, "name": "Blogger", uid: 345},
            {"_id": 011, "name": "Blogging App", uid: 345},
            {"_id": 012, "name": "Script Testing App", uid: 345}
        ];

        var api = {
            findWebsitesForUser: findWebsitesForUser,
            findWebsiteById: findWebsiteById
        };
        return api;

        function findWebsiteById(wid) {
            for (var w in websites) {
                if (websites[w]._id === wid) {
                    return websites[w];
                }
            }
            return null;
        }

        function findWebsitesForUser(uid) {
            var result = [];
            for(var w in websites) {
                if(websites[w].uid === uid) {
                    result.push(websites[w]);
                }
            }
            return result;
        }
    }
})();