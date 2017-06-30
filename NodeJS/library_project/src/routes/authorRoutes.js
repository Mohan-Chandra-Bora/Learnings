var express = require('express');

var authorRouter = express.Router();

var router = function(nav){
    var authors = [
    {
        title: "abc",
        genre: "Historical fiction",
        author: "abc123",
        read: "false"
    },
    {
        title: "def",
        genre: "Historical fiction",
        author: "def123",
        read: "false"
    },
    {
        title: "ghi",
        genre: "History",
        author: "ghi123",
        read: "false"
    },
    {
        title: "jkl",
        genre: "Biography",
        author: "jkl123",
        read: "false"
    }
]

    authorRouter.route('/')
            .get(function(req, res){
                res.render('authorListView', {title:'Authors',
    nav: nav,
        authors: authors
        });
            });

    authorRouter.route('/:id')


            .get(function(req, res){
                var id = req.params.id;
                res.render('authorView', {title:'Author',
    nav: nav,
        book: books[id]
        });
            });

return authorRouter;

}

module.exports = router;