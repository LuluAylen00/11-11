const Products = require('../services/product');
const path = require('path')

const controller = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/home.html'));
    },
    // Create
    productCreate: async (req, res) => {
        // Todo lo que venga en un formulario vendrá en un req.body
        if (req.body.name && req.body.price) {            
            await Products.createProduct(req.body);
            res.send({
                code: 200,
                msg: "Creacion exitosa",
                result: 'http://localhost:3418'
            });
        } else {
            res.send("Error");
        }
    },
    productsList: async (req, res) => { // Read -> List
        let productsList = await Products.findAll();
        res.send(productsList);
    },
    productDetail: async (req, res) => { // Read -> Detail
        const id = req.params.id;
        let product = await Products.findById(id);
        res.send(product);
    },
    // Update
    productUpdate: async (req, res) => {
        const id = req.params.id;
        let resultado = await Products.updateProduct(id, req.body);
        if (resultado > 0) {
            res.send("Edición exitosa");
        } else {
            res.send("Algo malio sal");
        };
    },
    // Delete
    productDelete: async (req, res) => {
        const id = req.params.id;
        let resultado = await Products.deleteProduct(id);
        if (resultado > 0) {
            res.send("Borrado exitoso");
        } else {
            res.send("Algo malio sal");
        };
    }
}

module.exports = controller;