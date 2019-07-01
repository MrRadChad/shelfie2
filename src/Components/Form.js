import React, { Component } from 'react'
import Axios from 'axios';
import './css/form.css'
import Header from './Header'
import {Link} from 'react-router-dom'

class Form extends Component {

    constructor(props){
        super(props)

        this.state={
            productName: '',
            price: '',
            image_url: ''
        }
    };

    componentDidMount(){
        if(this.props.selectedProduct !== null){
            this.setState({
                ...this.props.selectedProduct
            })
        }
    }

    resetState=(event)=>{
        this.setState({
            productName: '',
            price: '',
            image_url: ''
        })
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    editProduct=(id)=>{
        const {productName, price, image_url} = this.state;
        const product = {
            productName: productName,
            price: price,
            image_url: image_url
        }
        Axios.put(`/api/product/${id}`, product).then(response => {
            this.resetState();
        })
    }

    createProduct(event){
        const {productName, price, image_url} = this.state;
        const product = {
            productName: productName,
            price: price,
            image_url: image_url
        }
        Axios.post('/api/createproduct', product).then((response) => {
            this.resetState();
        });
    }



    render() {
        return (
            <div className="pageContainer">
                <div className="header">
                    <Header />
                </div>
                <div className='formContainer'>
                    <div className='product'>
                        <div className="productImage">
                            {this.state.image_url ? (
                                <img className='imageRender' src={this.state.image_url} alt={`${this.state.productName}`} />):(
                                <img className='noImage' src={process.env.PUBLIC_URL + '/NoImage.png'} alt={'Not Available'} />
                            )}
                        </div>
                        <div className='form'>
                            Product Name:
                            <input type='text' name='productName' onChange={(event) => this.handleChange(event)} placeholder='Product Name' />
                            Price:
                            <input type='text' name='price' onChange={(event) => this.handleChange(event)} placeholder='Price' />
                            Image URL:
                            <input type='text' name='image_url' onChange={(event) => this.handleChange(event)} placeholder='Image URL' />
                        </div>
                        <div className="buttonContainer">
                            <button type='reset' className="reset" onClick={this.resetState}>Cancel</button>
                            <button type='submit' className="submit" onClick={(event)=> this.createProduct(event)}><Link to={"/"} className="saveChanges">Save Changes</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form