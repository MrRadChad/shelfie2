const express = require ('express');
const bodyParer = require ('body-parser');
const massive = require ('massive');

require ('dotenv').config();

const controller = require ('./controller');

const {
    PORT,
    CONNECTION_STRING
} = process.env;

//setup massive database connection
massive(CONNECTION_STRING)
    .then((dbInstance) => {
        app.set('db', dbInstance)
    }).catch((error) => {
        console.log(error)
});

const app = express();

app.use(bodyParer.json());

//endpoints

app.get('/api/inventory', controller.getInventory);
app.get('/api/product/:id', controller.getProduct);
app.post('/api/createproduct', controller.createProduct);
app.delete('/api/product/:id', controller.deleteProduct);
app.put('/api/inventory/:id', controller.editProduct)

app.listen(PORT, () => {
    console.log(`New Shelfie is Running on ${PORT}`)
})