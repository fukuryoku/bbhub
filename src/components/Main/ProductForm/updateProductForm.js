import React, { Component } from 'react'
import {connect} from 'react-redux'
import {postNewProduct, updateProduct} from '../../../store/actions/products'


class updateProductForm extends Component {
  
  state = {
    title: "",
    text:"",
    price:"",
    img1:'',
    img2:'',
    img3:'',
    img:[]
  };

  ConcatImgValues = () => {
    this.setState(state => {
      const img = state.img.concat(state.img1, state.img2, state.img3);
      return {
        img,
        img1:'',
        img2:'',
        img3:'',
    
      };
    });
  };


  async componentDidMount(){
    let prod = await this.props.products.filter(product=>product._id === this.props.match.params.pid)
    this.setState({
      title: prod[0].title,
      text: prod[0].text,
      price:prod[0].price,
      img1:prod[0].img[0],
      img2:prod[0].img[1],
      img3:prod[0].img[2],  
      img:[]
    })
    console.log(prod[0].title)
  }


 
  handleUpdateProduct = event =>{
    event.preventDefault();
    event.target.className += " was-validated";
    this.props.updateProduct (this.props.currentUser.user.id, this.props.match.params.pid, this.state.title, this.state.text, this.state.price, this.state.img);
    this.setState({
      title: "",
      text:"",
      price:"",
      img1:'',
      img2:'',
      img3:'',
      img:[]
    })
    this.props.history.push('/profile')
  }

  render() {

    return (
      
   <form onSubmit={this.handleUpdateProduct} className="container d-flex flex-column needs-validation text-center my-5" noValidate>
    
    <div className="form-row align-items-center">
        {this.props.errors.message && (
          <div className="alert alert-danger">{this.props.errors.message}</div>
        )}
     </div>

     <div className="form-row align-items-center">
        <div className="col-12">
        <label htmlFor="validationCustom01">Course title</label>
        <input
          type="text"
          className="form-control"
          value={this.state.title}
          onChange={e => this.setState({ title: e.target.value })}
          id="validationCustom01"
          placeholder="Title"
          required
        />
        <div className="valid-feedback">
          Отлично
        </div>
        <div className="invalid-feedback">
          Нужно имя продукта
         </div>

        </div>
      </div>

      <div className="form-row align-items-center">
        <div className="col-12">
        <label htmlFor="validationCustom01">Course text description</label>
        <input
          type="text"
          className="form-control"
          value={this.state.text}
          onChange={e => this.setState({ text: e.target.value })}
          id="validationCustom01"
          placeholder="Text"
          required
        />
        <div className="valid-feedback">
          Отлично
        </div>
        <div className="invalid-feedback">
          Нужно имя продукта
         </div>

        </div>
      </div>
      <div className="form-row align-items-center">
        <div className="col-12">
        <label htmlFor="validationCustom01">Course price</label>
        <input
          type="text"
          className="form-control"
          value={this.state.price}
          onChange={e => this.setState({ price: e.target.value })}
          id="validationCustom01"
          placeholder="PRICE"
          required
        />
        <div className="valid-feedback">
          Отлично
        </div>
        <div className="invalid-feedback">
          Нужно имя продукта
         </div>

        </div>
      </div>

           <div className="form-row align-items-center">
        <div className="col-4">
          <label htmlFor="validationCustom01">Course img url 1</label>
            <input
              type="text"
              className="form-control"
              value={this.state.img1}
              onChange={e => this.setState({ img1: e.target.value })}
              id="validationCustom01"
              placeholder="IMG URL"
            />
            <div className="valid-feedback">
              Отлично
            </div>
            <div className="invalid-feedback">
              Нужна ссылка на картинку 1
            </div>

        </div>

        <div className="col-4">
          <label htmlFor="validationCustom01">Course img url 2</label>
            <input
              type="text"
              className="form-control"
              value={this.state.img2}
              onChange={e => this.setState({ img2: e.target.value })}
              id="validationCustom01"
              placeholder="IMG URL 2"
            />
            <div className="valid-feedback">
              Отлично
            </div>
            <div className="invalid-feedback">
              Нужна ссылка на картинку 2
            </div>

        </div>


        <div className="col-4">
          <label htmlFor="validationCustom01">Course img url 3</label>
            <input
              type="text"
              className="form-control"
              value={this.state.img3}
              onChange={e => this.setState({ img3: e.target.value })}
              id="validationCustom01"
              placeholder="IMG URL 3"
            />
            <div className="valid-feedback">
              Отлично
            </div>
            <div className="invalid-feedback">
              Нужна ссылка на картинку 3
            </div>

        </div>

      </div>

        <button type="submit" className="btn btn-success my-3" onClick={this.ConcatImgValues}>
          Update course!
        </button>
      </form>
    )
  }
}

function mapSatetoProps (state) {
  return{
    errors: state.errors,
    currentUser: state.currentUser,
    products: state.products,
  }
}
export default connect(mapSatetoProps, {postNewProduct, updateProduct}) (updateProductForm)