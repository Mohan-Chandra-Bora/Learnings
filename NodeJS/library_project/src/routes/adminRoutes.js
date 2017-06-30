var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
    {
        title: "abc",
        genre: "Historical fiction",
        author: "abc123",
        bookId: 656,
        read: "false"
    },
    {
        title: "def",
        genre: "Historical fiction",
        author: "def123",
        bookId: 24280,
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

var router = function(nav){
    adminRouter.route('/addBooks')
            .get(function(req, res){
                var url = 'mongodb://localhost:27017/libraryApp';
                mongodb.connect(url, function(err, db){
                    var collection = db.collection('books');
                    collection.insertMany(books, 
                    function(err, results){
                        res.send(results);
                    });
                    db.close();
                });
                //res.send('Insert Books');
            });

    return adminRouter;
}

module.exports = router;