const productController = require('./../controllers/productController');

module.exports = (router) => {

    router.route('/product')
        .get(productController.getAll)
        .post(productController.insert)
    
    router.route('/product/:ref')
        .get(productController.getOne)
        .put(productController.update)
        .delete(productController.delete)
}