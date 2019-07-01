import React from 'react';
import './css/product.css';
import {Link} from 'react-router-dom'

export default function Product(props) {
    const {product, deleteProduct, getProduct} = props;
    return (
        <div className="container">
                <img  className="productImage" src={product.image_url} alt={`${product.name}`} />
            <div className="productDetails">
                Name: {product.productname}
                <br></br>
                Price: {product.price}
            </div>
            <button className="deleteProduct" onClick={() => deleteProduct(product.id)}>Delete</button>
            <button className="editProduct" onClick={()=> getProduct(product.id)}><Link to={`/edit/${product.id}`} className="link">Edit</Link></button>
        </div>
    )
}

