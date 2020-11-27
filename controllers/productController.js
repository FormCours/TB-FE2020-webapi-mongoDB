const Product = require('./../models/product');

// Méthode des CRUD
module.exports = {

    insert: (req, res) => {
        try {
            const newProduct = Product(req.body);

            newProduct.save()
                .then(() => {
                    res.status(200).json(newProduct);
                })
                .catch(error => {
                    res.status(400).json(error);
                })
        }
        catch(err) {
            res.status(500).json(err);
        }
    },

    getAll: (req, res) => {
        Product.find()
            .then(products => {
                res.status(200).json(products);
            })
            .catch(error => {
                res.status(500).json(error);
            })
    },

    getOne: (req, res) => {
        const {ref} = req.params;

        Product.findById(ref)
            .then(product => {
                if(product) {
                    res.status(200).json(product);
                }
                else {
                    res.sendStatus(404);
                }
            })
            .catch(error => {
                res.status(500).json(error);
            })
    },

    update: (req, res) => {
        const {ref} = req.params;

        Product.findByIdAndUpdate(ref, req.body, {
            useFindAndModify: false
        }).then(async product => {
            if(product) {
                const p = await Product.findById(ref)
                res.status(200).json(p);
            }
            else {
                res.sendStatus(404);
            }
        }).catch(err => {
            res.status(500).json(err);
        })
    },

    delete: (req, res) => {
        const {ref} = req.params;

        Product.findByIdAndDelete(ref)
            .then(product => {
                if(product) {
                    res.status(200).json(product); 
                    // res.sendStatus(204)
                }
                else {
                    res.sendStatus(404);
                }
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }
}