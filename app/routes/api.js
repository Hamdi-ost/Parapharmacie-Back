var User = require("../models/user");
var Product = require("../models/produit");
var Category = require("../models/category");

module.exports = function(router) {

//---------------Users-----------------------
  // Create User
  router.post("/users", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    if (
      req.body.username == null ||
      req.body.username == "" ||
      req.body.password == null ||
      req.body.password == "" ||
      req.body.email == null ||
      req.body.email == ""
    ) {
      res.send(JSON.stringify({ msg: "vide" }));
    } else {
      user.save(err => {
        if (err) {
          res.send(JSON.stringify({ msg: "existe" }));
        } else {
          res.send(JSON.stringify({ user: user }));
        }
      });
    }
  });

  //Get all users
  router.get("/users", function(req, res, next) {
    User.find(function(err, users) {
      if (err) return next(err);
      res.json(users);
    });
  });

  //Get user by id
  router.get("/users/:id", function(req, res, next) {
    User.findById(req.params.id, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  //update user
  router.put("/users/:id", function(req, res, next) {
    User.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  //Delete users
  router.delete("/users/:id", function(req, res, next) {
    User.findByIdAndRemove(req.params.id, req.body, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

//---------------Products-----------------------
   // Create Product
   router.post("/products", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    var product = new Product();
    product.name = req.body.name;
    product.cost = req.body.cost;
    product.description = req.body.description;
    product.picturePath = req.body.picturePath;
    product.category = req.body.category;
    if (
      req.body.name == null ||
      req.body.name == "" ||
      req.body.cost == null ||
      req.body.cost == "" ||
      req.body.description == null ||
      req.body.description == ""
    ) {
      res.send(JSON.stringify({ msg: "vide" }));
    } else {
      product.save(err => {
        if (err) {
          res.send(JSON.stringify(err));
        } else {
          res.send(JSON.stringify({ product: product }));
        }
      });
    }
  });

  //Get all products
  router.get("/products", function(req, res, next) {
    Product.find(function(err, products)
    {
      if (err) return next(err);
      res.json(products);
    })
    .populate('category', 'name')
    .exec();
  });

  //Get product by id
  router.get("/products/:id", function(req, res, next) {
    Product.findById(req.params.id, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  //update product
  router.put("/products/:id", function(req, res, next) {
    Product.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  //Delete product
  router.delete("/products/:id", function(req, res, next) {
    Product.findByIdAndRemove(req.params.id, req.body, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  //---------------Category-----------------------
   // Create Categories
   router.post("/category", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    var category = new Category();
    category.name = req.body.name;
    category.description = req.body.description;
    category.products = req.body.products;
    if (
      req.body.name == null ||
      req.body.name == "" ||
      req.body.description == null ||
      req.body.description == ""
    ) {
      res.send(JSON.stringify({ msg: "vide" }));
    } else {
      category.save(err => {
        if (err) {
          res.send(JSON.stringify({ msg: "existe" }));
        } else {
          res.send(JSON.stringify({ category: category }));
        }
      });
    }
  });

  //Get all category
  router.get("/category", function(req, res, next) {
    Category.find(function(err, category) {
      if (err) return next(err);
      res.json(category);
    });
  });

  //Get category by id
  router.get("/category/:id", function(req, res, next) {
    Category.findById(req.params.id, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  //update category
  router.put("/category/:id", function(req, res, next) {
    Category.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  //Delete category
  router.delete("/category/:id", function(req, res, next) {
    Category.findByIdAndRemove(req.params.id, req.body, function(err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  return router;
};
