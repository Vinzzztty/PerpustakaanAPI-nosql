const db = require("../models");
const Post = db.posts;

exports.findAll = (req, res) => {
    Post.find()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error while retreiving posts",
            });
        });
};

exports.create = (req, res) => {
    const post = new Post({
        title: req.body.title,
        year: req.body.body,
        author: req.body.body,
        summary: req.body.body,
        publisher: req.body.body,
        pageCount: req.body.body,
        readPage: req.body.body,
        reading: req.body.reading ? req.body.reading : false,
    });

    // Create Query
    post.save(post)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.status(409).send({
                message: err.message || "Some error while create post",
            });
        });
};
