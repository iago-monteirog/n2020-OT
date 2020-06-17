const express = require("express");
const routes = require("./routes");
const app = express();
const cors = require("cors");
const connection = require('./database/connection')
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);