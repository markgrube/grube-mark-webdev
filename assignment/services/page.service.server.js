/**
 * Created by Mark on 11/5/2016.
 */
module.exports = function(app){
    var pages = [
        {"_id": 001, "name": "Blog Post", wid: 001, "description": ""},
        {"_id": 002, "name": "Blogs", wid: 001, "description": ""},
        {"_id": 003, "name": "Home", wid: 001, "description": ""},
        {"_id": 004, "name": "About", wid: 001, "description": ""},
        {"_id": 005, "name": "Contact Us", wid: 001, "description": ""},
        {"_id": 006, "name": "Blog Post", wid: 002, "description": ""},
        {"_id": 007, "name": "Blogs", wid: 002, "description": ""},
        {"_id": 008, "name": "Home", wid: 002, "description": ""},
        {"_id": 009, "name": "About", wid: 003, "description": ""},
        {"_id": 010, "name": "Contact Us", wid: 003, "description": ""},
        {"_id": 011, "name": "Blog Post", wid: 003, "description": ""},
        {"_id": 012, "name": "Blogs", wid: 004, "description": ""},
        {"_id": 013, "name": "Home", wid: 004, "description": ""},
        {"_id": 014, "name": "About", wid: 004, "description": ""},
        {"_id": 015, "name": "Contact Us", wid: 005, "description": ""},
        {"_id": 016, "name": "Blog Post", wid: 005, "description": ""},
        {"_id": 017, "name": "Blogs", wid: 005, "description": ""},
        {"_id": 018, "name": "Home", wid: 006, "description": ""},
        {"_id": 019, "name": "About", wid: 006, "description": ""},
        {"_id": 020, "name": "Contact Us", wid: 006, "description": ""},
        {"_id": 021, "name": "Blog Post", wid: 007, "description": ""},
        {"_id": 022, "name": "Blogs", wid: 007, "description": ""},
        {"_id": 023, "name": "Home", wid: 007, "description": ""},
        {"_id": 024, "name": "About", wid: 008, "description": ""},
        {"_id": 025, "name": "Contact Us", wid: 008, "description": ""},
        {"_id": 026, "name": "Blog Post", wid: 008, "description": ""},
        {"_id": 027, "name": "Blogs", wid: 009, "description": ""},
        {"_id": 028, "name": "Home", wid: 009, "description": ""},
        {"_id": 029, "name": "About", wid: 009, "description": ""},
        {"_id": 030, "name": "Contact Us", wid: 010, "description": ""},
        {"_id": 031, "name": "Blog Post", wid: 010, "description": ""},
        {"_id": 032, "name": "Blogs", wid: 010, "description": ""},
        {"_id": 033, "name": "Home", wid: 011, "description": ""},
        {"_id": 034, "name": "About", wid: 011, "description": ""},
        {"_id": 035, "name": "Contact Us", wid: 011, "description": ""},
        {"_id": 036, "name": "Blog Post", wid: 012, "description": ""},
        {"_id": 037, "name": "Blogs", wid: 012, "description": ""},
        {"_id": 038, "name": "Home", wid: 012, "description": ""},
        {"_id": 039, "name": "About", wid: 012, "description": ""},
        {"_id": 040, "name": "Contact Us", wid: 012, "description": ""}
    ];

    app.post('/api/website/:websiteId/page', createPage);
    app.get('/api/website/:websiteId/page', findAllPagesForWebsite);
    app.get('/api/page/:pageId', findPageById);
    app.put('/api/page/:pageId', updatePage);
    app.delete('/api/page/:pageId', deletePage);

    function createPage(req, res){
        var page = req.body;
        var websiteId = parseInt(req.params.websiteId);
        page._id = (new Date()).getTime();
        page.websiteId = websiteId;
        pages.push(page);
        res.send(page);
    }

    function findAllPagesForWebsite(req, res){
        var websiteId = parseInt(req.params.websiteId);
        var result = [];
        for (var p in pages) {
            if(pages[p].wid === websiteId) {
                result.push(pages[p]);
            }
        }
        res.send(result);
    }

    function findPageById(req, res){
        var pageId = parseInt(req.params.pageId);
        for (var p in pages) {
            if(pages[p]._id === pageId) {
                res.send(pages[p]);
                return;
            }
        }
        res.send('0');
    }

    function updatePage(req, res){
        var page = req.body;
        var pageId = parseInt(req.params.pageId);
        for(var p in pages) {
            if(pages[p]._id === pageId) {
                pages[p] = page;
            }
        }
        res.send('200');
    }

    function deletePage(req, res){
        var pageId = parseInt(req.params.pageId);
        for (var i=0; i < pages.length; i++) {
            if (pages[i]._id == pageId) {
                pages.splice(i, 1);
            }
        }
        res.send('200');
    }

}