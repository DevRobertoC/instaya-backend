module.exports = app => {
    const orders = require("../controllers/order.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Order
    router.post("/", orders.create);
  
    // Retrieve all Orders
    router.get("/", orders.findAll);
  
    // Retrieve all published Tutorials
    //router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    //router.get("/:id", tutorials.findOne);
  
    // Update a Tutorial with id
    //router.put("/:id", tutorials.update);
  
    // Delete a Tutorial with id
    //router.delete("/:id", tutorials.delete);
  
    // Create a new Tutorial
    //router.delete("/", tutorials.deleteAll);
  
    app.use("/api/orders", router);
  };
