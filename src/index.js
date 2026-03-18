const express = require("express");
const morgan = require("morgan");
const app = express();
const handlebars = require("express-handlebars");
const port = 3000;
const path = require("path");
//HTTP logger
app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    partialsDir: path.join(__dirname, "resources/views/partials"),
  }),
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
