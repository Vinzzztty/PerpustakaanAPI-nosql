module.exports = (app) => {
    const posts = require("../user/userController");
    const router = require("express").Router();

    router.get("/", posts.findAll);

    router.post("/", posts.create);

    router.get("/:id", posts.findOne);

    router.put("/:id", posts.update);

    router.delete("/:id", posts.delete);

    app.use("/api/posts", router);
};
