const express = require("express");

const app = express();

// Return setiap request menjadi JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./src/app/models");

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log(`Database connected!`);
    })
    .catch((err) => {
        console.log(`Cannote connect to the database!`, err);
        process.exit();
    });

// Route Home
app.get("/", (req, res) => {
    res.json({
        message: "Halo",
    });
});

require("./src/app/routes/postRoute")(app);

const PORT = 3100;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
