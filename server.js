var express = require("express");
var bodyParser = require("body-parser");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8080;

db.sequelize.sync()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require(path.join(__dirname, './routes/routing'))(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  