import React, { Component } from 'react';
import Main from './containers/Main/Main';
import {connect} from "react-redux"
import {fetchProducts} from "./store/actions/products"
import {fetchEcourses} from "./store/actions/ecourses"
import {logout} from "./store/actions/auth"

import {Route, Switch, withRouter, Redirect} from 'react-router-dom';

class App extends Component {

  componentWillMount(){
    this.props.fetchEcourses();
    this.props.fetchProducts();
}

componentDidMount(){
  this.props.logout()
}

  render() {
    return (
        <Main className="main-wraper">
          {this.props.children}
        </Main>
    );
  }
}
function mapStateToProps(state){
  return{
    currentUser: state.currentUser,
    errors: state.errors,
    products: state.products,
    ecourses: state.ecourses
  };
}

// export default App;
export default withRouter(connect(mapStateToProps, {fetchProducts, fetchEcourses, logout})(App));
