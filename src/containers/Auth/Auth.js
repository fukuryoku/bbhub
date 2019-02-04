import React, { Component } from "react";
import PropTypes from "prop-types";

class Auth extends Component {
    state = {
      email: "",
      username: "",
      password: "",
      profileImageUrl: ""
    }
    
  handleSubmit = e => {
    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
    this.props
      .onAuth(authType, this.state)
      .then(() => {
        // this.props.history.push("/profile");
        this.props.history.goBack()
      })
      .catch(() => {
        return;
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, username, password, profileImageUrl } = this.state;
    const {
      signUp,
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
              <label htmlFor="email">E-mail</label>
              <input
                autoComplete="off"
                className="form-control"
                id="email"
                name="email"
                onChange={this.handleChange}
                type="text"
                value={email}
              />
              <label htmlFor="password">Password</label>
              <input
                autoComplete="off"
                className="form-control"
                id="password"
                name="password"
                onChange={this.handleChange}
                type="password"
                value={password}
              />
              {signUp ? (
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    autoComplete="off"
                    className="form-control"
                    id="username"
                    name="username"
                    onChange={this.handleChange}
                    type="text"
                    value={username}
                  />
                  <label htmlFor="image-url">Image URL</label>
                  <input
                    autoComplete="off"
                    className="form-control"
                    id="image-url"
                    name="profileImageUrl"
                    onChange={this.handleChange}
                    type="text"
                    value={profileImageUrl}
                  />
                </div>
              ):null}
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
Auth.propTypes = {
  buttonText: PropTypes.string,
  errors: PropTypes.object,
  heading: PropTypes.string,
  history: PropTypes.object,
  onAuth: PropTypes.func,
  signIn: PropTypes.bool,
  removeError: PropTypes.func
};

export default Auth;
