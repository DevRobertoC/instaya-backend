const db = require("../models");
const Order = db.orders;

// Create and Save a new Order
exports.create = (req, res) => {
    // Validate request
    if (!req.body.fecha) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create an Order
    const order = new Order({
        fecha: req.body.fecha,
        hora: req.body.hora,
        largo: req.body.largo,
        ancho: req.body.ancho,
        alto: req.body.alto,
        peso: req.body.peso,
        direccionRecogida: req.body.direccionRecogida,
        ciudadRecogida: req.body.ciudadRecogida,
        nombreDestinatario: req.body.nombreDestinatario,
        cedulaDestinatario: req.body.cedulaDestinatario,
        direccionEntrega: req.body.direccionEntrega,
        ciudadEntrega: req.body.ciudadEntrega        
    });

    // Save Order in the database
    order
    .save(order)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Order."
        });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};