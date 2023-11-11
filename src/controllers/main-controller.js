const Products = require('../services/product');

const controller = {
    home: (req, res) => {
        res.send("Holi");
    },
    // Create
    productCreate: (req, res) => {
        // Todo lo que venga en un formulario vendrá en un req.body
        if (req.body.name && req.body.price) {            
            Products.createProduct(req.body);
            res.send({
                code: 200,
                msg: "Creacion exitosa",
                result: 'http://localhost:3418'
            });
        } else {
            res.send("Error");
        }
    },
    productsList: (req, res) => { // Read -> List
        let productsList = Products.findAll();
        res.send(productsList);
    },
    productDetail: (req, res) => { // Read -> Detail
        const id = req.params.id;
        let product = Products.findById(id);
        res.send(product);
    },
    // Update
    productUpdate: (req, res) => {
        const id = req.params.id;
        let resultado = Products.updateProduct(id, req.body);
        if (resultado > 0) {
            res.send("Edición exitosa");
        } else {
            res.send("Algo malio sal");
        };
    },
    // Delete
    productDelete: (req, res) => {
        const id = req.params.id;
        let resultado = Products.deleteProduct(id);
        if (resultado > 0) {
            res.send("Borrado exitoso");
        } else {
            res.send("Algo malio sal");
        };
    }
}

module.exports = controller;