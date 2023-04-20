const { mongoose } = require(".");

module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            title: String,
            year: Number,
            author: String,
            summary: String,
            publisher: String,
            pageCount: Number,
            readPage: Number,
            reading: Boolean,
        },
        {
            timestamps: true,
        }
    );

    schema.method("toJSON", function () {
        const { __v, id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Post = mongoose.model("posts", schema);
    return Post;
};
