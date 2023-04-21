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

// GET by ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Post.findById(id)
        .then((result) => {
            res.status(200).send({
                status: "success",
                message: result,
            });
        })
        .catch((err) => {
            res.status(404).send({
                status: "fail",
                message: err.message || "ID tidak ditemukan",
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Post.findByIdAndUpdate(id, req.body)
        .then((result) => {
            if (!result) {
                res.status(404).send({
                    status: "fail",
                    message: "Post tidak ditemukan",
                });
            }
            res.status(200).send({
                status: "success",
                message: "Post was updated",
            });
        })
        .catch((err) => {
            res.status(404).send({
                status: "fail",
                message: err.message || "Id tidak diteumkan",
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Post.findByIdAndRemove(id)
        .then((result) => {
            if (!result) {
                res.status(404).send({
                    status: "fail",
                    message: "Post not found",
                });
            }
            res.send({
                status: "success",
                message: "Post was deleted",
            });
        })
        .catch((err) => {
            res.status(409).send({
                status: "fail",
                message: err.message || "Some error while delete post",
            });
        });
};
