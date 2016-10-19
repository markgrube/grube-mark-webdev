(function(){
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);

    function PageService() {
        var pages = [
            {"_id": 123, "name": "Blog Post", wid: 001},
            {"_id": 234, "name": "Blogs", wid: 001},
            {"_id": 345, "name": "Home", wid: 001},
            {"_id": 456, "name": "About", wid: 001},
            {"_id": 456, "name": "Contact Us", wid: 001},
            {"_id": 123, "name": "Blog Post", wid: 002},
            {"_id": 234, "name": "Blogs", wid: 002},
            {"_id": 345, "name": "Home", wid: 002},
            {"_id": 456, "name": "About", wid: 003},
            {"_id": 456, "name": "Contact Us", wid: 003},
            {"_id": 123, "name": "Blog Post", wid: 003},
            {"_id": 234, "name": "Blogs", wid: 004},
            {"_id": 345, "name": "Home", wid: 004},
            {"_id": 456, "name": "About", wid: 004},
            {"_id": 456, "name": "Contact Us", wid: 005},
            {"_id": 123, "name": "Blog Post", wid: 005},
            {"_id": 234, "name": "Blogs", wid: 005},
            {"_id": 345, "name": "Home", wid: 006},
            {"_id": 456, "name": "About", wid: 006},
            {"_id": 456, "name": "Contact Us", wid: 006},
            {"_id": 123, "name": "Blog Post", wid: 007},
            {"_id": 234, "name": "Blogs", wid: 007},
            {"_id": 345, "name": "Home", wid: 007},
            {"_id": 456, "name": "About", wid: 008},
            {"_id": 456, "name": "Contact Us", wid: 008},
            {"_id": 123, "name": "Blog Post", wid: 008},
            {"_id": 234, "name": "Blogs", wid: 009},
            {"_id": 345, "name": "Home", wid: 009},
            {"_id": 456, "name": "About", wid: 009},
            {"_id": 456, "name": "Contact Us", wid: 010},
            {"_id": 123, "name": "Blog Post", wid: 010},
            {"_id": 234, "name": "Blogs", wid: 010},
            {"_id": 345, "name": "Home", wid: 011},
            {"_id": 456, "name": "About", wid: 011},
            {"_id": 456, "name": "Contact Us", wid: 011},
            {"_id": 123, "name": "Blog Post", wid: 012},
            {"_id": 234, "name": "Blogs", wid: 012},
            {"_id": 345, "name": "Home", wid: 012},
            {"_id": 456, "name": "About", wid: 012},
            {"_id": 456, "name": "Contact Us", wid: 012}
        ];

        var api = {
            findPagesForWebsite: findPagesForWebsite,
            findPageById: findPageById
        };
        return api;

        function findPageById(pid) {
            for (var p in pages) {
                if (websites[p]._id === pid) {
                    return pages[p];
                }
            }
            return null;
        }

        function findPagesForWebsite(wid) {
            var result = [];
            for(var p in pages) {
                if(pages[p].wid === wid) {
                    result.push(pages [p]);
                }
            }
            return result;
        }

    }
})();