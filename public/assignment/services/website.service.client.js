(function () {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);

    function WebsiteService($http) {
        var api = {
            findWebsitesByUser: findWebsitesByUser,
            findWebsiteById: findWebsiteById,
            createWebsite: createWebsite,
            updateWebsite: updateWebsite,
            deleteWebsite: deleteWebsite
        };
        return api;

        function createWebsite(userId, website) {
            var url = '/api/user/'+userId+'/website';
            return $http.post(url, website);
        }

        function findWebsiteById(wid) {
            var url = '/api/website/'+wid;
            return $http.get(url);
        }

        function findWebsitesByUser(userId) {
            var url = '/api/user/'+userId+'/website';
            return $http.get(url);
        }

        function updateWebsite(websiteId, website) {
            var url = '/api/website/'+websiteId;
            return $http.put(url, website);
        }

        function deleteWebsite(websiteId) {
            var url = '/api/website/'+websiteId;
            return $http.delete(url);
        }
    }
})();