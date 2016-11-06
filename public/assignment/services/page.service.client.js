(function(){
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);

    function PageService($http) {
        var api = {
            findPageByWebsiteId: findPageByWebsiteId,
            findPageById: findPageById,
            createPage: createPage,
            updatePage: updatePage,
            deletePage: deletePage
        };
        return api;

        function createPage(websiteId, page){
            var url = '/api/website/'+websiteId+'/page';
            return $http.post(url, page);
        }

        function findPageById(pageId) {
            var url = '/api/page/'+pageId;
            return $http.get(url);
        }

        function findPageByWebsiteId(webId) {
            var url = '/api/website/'+webId+'/page';
            return $http.get(url);
        }

        function updatePage(pageId, page){
            var url = '/api/page/'+pageId;
            return $http.put(url, page);
        }

        function deletePage(pageId){
            var url = '/api/page/'+pageId;
            return $http.delete(url);
        }

    }
})();