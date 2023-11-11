let products = require('../data/products_db');

const service = {
    createProduct: (data) => {
        let productsList = service.findAll();
        let newProduct = {
            id: productsList[productsList.length-1].id + 1,
            name: data.name,
            price: data.price
        };
        products.push(newProduct);
    }, // C

    findAll: () => {
        return products;
    }, // R
    findById: (id) => {
        let productsList = service.findAll();
        let productFound = productsList.find(product => product.id == id);
        return productFound;
    }, // R

    updateProduct: (id, data) => {
        let productsList = service.findAll();
        let resultado = productsList.filter(product => product.id == id).length;
        
        products = productsList.map(product => {
            if (product.id == id) {
                product.name = data.name;
                product.price = data.price;
            };
            return product;
        });

        return resultado;
    }, // U

    deleteProduct: (id) => {
        let productsList = service.findAll();
        let resultado = productsList.filter(product => product.id == id).length;
        
        products = productsList.filter(product => product.id != id);

        return resultado;
    } // D
};

module.exports = service;