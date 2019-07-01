module.exports = {
    getInventory: (req, res, next)=>{
        const db = req.app.get('db');
        db.getInventory().then(response =>{
            res.send(response);
        }).catch(err=> {
            console.log('getInventory', err)
        });
    },
    getProduct: (req, res, next) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.getSingleProduct([id]).then(response => {
            res.send(response);
        }).catch(err => {
            console.log('getProduct', err);
        });
    },
    createProduct: (req, res, next) => {
        const {productName, price, image_url} = req.body;
        const db = req.app.get('db');

        db.createProduct([productName, price, image_url]).then(response => {
            res.send(response);
        }).catch(err => {
            console.log('createProduct', err)
        });
    },
    deleteProduct: (req, res, next) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.deleteProduct([id]).then(response => {
            res.send(`Product with id ${id} has been deleted`)
        }).catch(err => {
            console.log('deleteProduct', err)
        });
    },
    editProduct: (req, res, next) => {
        const db = req.app.get('db');
        const {productName, price, image_url} = req.body;
        const {id} = req.params.id;
        db.editProduct([productName, price, image_url, id]).then(response => {
            res.send(response);
        }).catch(err => {
            console.log("Couldn't update product.", err)
        })
    }
}