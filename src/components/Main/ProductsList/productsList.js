import React, {Component} from 'react';
import {connect} from "react-redux"
import {fetchProducts, removeProduct, updateProduct} from "../../../store/actions/products"
import ProductItem from './ProductItem/productItem'

class ProductsList extends Component {

    componentWillMount(){
        this.props.fetchProducts();
    }

    render(){
        const {products, removeProduct, currentUser, updateProduct } = this.props
        
        let productsList = products.map(product=>(
            <ProductItem 
            key={product._id} 
            date={product.createAt}
            title={product.title}
            text={product.text}
            price={product.price}
            img={product.img}
            currentUserId={currentUser}
            productId={product._id}
            username={product.user.username}
            profileImageUrl={product.user.profileImageUrl}
            removeProduct={removeProduct.bind(this, product.user._id, product._id)}
            updateProduct={updateProduct.bind(this, product.user._id, product._id, product.title, product.text, product.price, product.img)}
            isCorrectUser={currentUser===product.user._id}   
            />
        ))



    return(
        <div className='container-fluid text-center my-5'>
            <h1>ВАШИ КУРСЫ</h1>
            {productsList}
        </div>

    )
    }
    
}

function mapStateToProps(state) {
    return{
        products: state.products,
        currentUser: state.currentUser.user.id
    }
}


export default connect(mapStateToProps,{fetchProducts, removeProduct, updateProduct})(ProductsList);