var db = require("../models");

module.exports = function(app) {

  app.get("/api/burgers", function(req, res) {
    db.Burger.findAll({}).then(function(burgers) {
      res.json(burgers);
    });
  });

  app.post("/api/burgers", function(req, res) {
    console.log(req.body);
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: false
    }).then(function(burgers) {
      res.json(burgers);
    });
  });

  app.put("/api/burgers", function(req, res) {
    console.log(req.body);
    
    var burgerName = req.body.burger_name;

    db.Burger.update(
        { devoured: true },
        { where: { burger_name: burgerName } }
    ).then(edits => {
      res.json(edits);
    });
  });
};
