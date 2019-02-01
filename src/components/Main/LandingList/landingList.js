import React, {Component} from 'react';
import {connect} from "react-redux"
import {fetchProducts, removeProduct, updateProduct} from "../../../store/actions/products"
import LandingItem from './landingItem'

class LandingList extends Component {

    componentWillMount(){
        // this.props.fetchProducts();
    }

    render(){
        const {products, removeProduct, currentUser, updateProduct } = this.props
        
        let productsList = products.map(product=>(
            <LandingItem 
            key={product._id} 
            date={product.createAt}
            title={product.title}
            text={product.text}
            price={product.price}
            img={product.img}
            currentUserId={currentUser}
            productId={product._id}
            username={product.user.username}
            // profileImageUrl={product.user.profileImageUrl}
            // removeProduct={removeProduct.bind(this, product.user._id, product._id)}
            // updateProduct={updateProduct.bind(this, product.user._id, product._id, product.title, product.text, product.price, product.img)}
            // isCorrectUser={currentUser===product.user._id}   
            />
        ))



    return(     
        <div className="card-columns ">
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


export default connect(mapStateToProps,{fetchProducts, removeProduct, updateProduct})(LandingList);