const express = require("express");
const router = express.Router();

const mainController = require("../controllers/main-controller");

// El primer parametro del router.get va a ser lo que iría inmediatamente despues
// de "http://localhost:3418"
router.get('/', mainController.home);

// Create
router.post('/products', mainController.productCreate);

// Read
router.get('/products', mainController.productsList);
router.get('/products/:id', mainController.productDetail);

// Update
router.put('/products/:id', mainController.productUpdate);

// Delete
router.delete('/products/:id', mainController.productDelete);

module.exports = router;