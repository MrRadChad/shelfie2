import React, { Component } from 'react';
import Axios from 'axios';
import Product from './Product';
import Header from './Header'
import './css/dashboard.css'


class Dashboard extends Component {

    constructor(props){
        super(props)

        this.state= {
            inventory: [],
            selectedProduct: null,
        }
    }

    componentDidMount(){
        this.getInventory();
    }

    deleteProduct=(id)=>{
        Axios.delete(`/api/product/${id}`).then(response => {
            this.getInventory();
        });
    };

    getProduct=(id)=>{
        Axios.get(`/api/product/${id}`).then(response => {
            this.setState({
                selectedProduct: response.data
            })
            console.log(response.data)
        })
    };

    getInventory(){
        Axios.get('/api/inventory').then(response => {
            this.setState({
                inventory: response.data
            })
        })
    } 

    render() {
        const {inventory} = this.state;
        const mappedInventory = inventory.map((product, id) => (
            <Product key={id} product={product} deleteProduct={this.deleteProduct} getProduct={this.getProduct} />
        ))
        return (
            <div className="fullContainer">
                <div className="header">
                    <Header />
                </div>
                <div className="productList">
                    {mappedInventory}
                </div>
            </div>
        )
    }
}

export default Dashboard