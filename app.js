const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

// import database
const { sequelize } = require("./src/models");
sequelize.sync();


app.listen(PORT, () => {
    console.log("http://localhost" + PORT);
})