module.exports = (app) => {
    const posts = require("../user/userController");
    const router = require("express").Router();

    router.get("/", posts.findAll);

    router.post("/", posts.create);

    app.use("/api/posts", router);
};
