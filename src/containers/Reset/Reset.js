import React, { Component } from "react";
import { apiCall } from "../../services/api";

class Reset extends Component {
    state = {
      email: "",
      newPassword: "",
      verifyPassword:""
}
    
  handleSubmit = e => {
    e.preventDefault();
    if(this.props.forgot){
      apiCall('post', '/api/auth/forgot', {email:this.state.email})
      .then (this.setState({
              email: "",
              newPassword: "",
              verifyPassword:""
            })
        )
        .catch(() => {
          return;
        });
  
    } else{
      apiCall('post', '/api/auth/reset', {newPassword:this.state.newPassword, verifyPassword:this.state.verifyPassword, token:this.props.match.params.token})
      .then (
        this.setState({
              email: "",
              newPassword: "",
              verifyPassword:""
            }),
        this.props.history.push('/signin')
            )
        .catch(() => {
          return;
        });
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { email, password } = this.state;
    const {
      forgot,
      heading,
      buttonText,
      errors,
      history,
      removeError
    } = this.props;

    history.listen(() => {
      removeError();
    });

    return (
      <div>
        <div className="row justify-content-md-center text-center">
          <div className="col-md-6 m-3">
            <form onSubmit={this.handleSubmit}>
            <h4>{heading}</h4>

            {errors.message ? <div className="alert alert-danger">{errors.message}</div>:null}

            {forgot?(
              <>
              <label htmlFor="email">Интсрукция по восстановлению будет отправлена вам на почту </label>
              <input
                autoComplete="off"
                className="form-control"
                id="email"
                name="email"
                onChange={this.handleChange}
                type="text"
                value={email}
              />
              </>

            ):(
              <>
              <label htmlFor="newPassword">Новый пароль</label>
              <input
                autoComplete="off"
                className="form-control"
                id="newPassword"
                name="newPassword"
                onChange={this.handleChange}
                type="password"
                value={password}
              />

             <label htmlFor="verifyPassword">Повторите новый пароль</label>
              <input
                autoComplete="off"
                className="form-control"
                id="verifyPassword"
                name="verifyPassword"
                onChange={this.handleChange}
                type="password"
                value={password}
              />

              </>

            )  }



              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg my-3"
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Reset;
