import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { userRegister } from "../../actions/auth";

import { Link } from "react-router-dom";

class Register extends Component {
  state = {
    firstname: "",
    lastname: "",

    email: "",
    password: "",
  };
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleState = (e) => {
    this.setState({ stateName: e.target.value });
  };
  submitForm = (e) => {
    e.preventDefault();
    const { firstname, lastname, password, email } = this.state;

    this.props.userRegister(firstname, lastname, password, email);
  };
  render() {
    return (
      <div className="login">
        <i
          className="fa fa-twitter fa-3x"
          aria-hidden="true"
          id="twitter_icons"
        ></i>
        <Form onSubmit={this.submitForm} className="registation_form">
          <h2 className="login_title">Mwitter'a Kaydolun</h2>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPasswsdordL">
              <Form.Control
                type="text"
                placeholder="İsminizi girin"
                name="firstname"
                value={this.state.firstname}
                onChange={this.handleInput}
                controlId="formGridPasswsdordL"
              />
              <hr />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPasswsdordL">
              <Form.Control
                type="text"
                placeholder="Soyadınızı girin"
                name="lastname"
                value={this.state.lastname}
                onChange={this.handleInput}
                controlId="formGridPasswsdordL"
              />
              <hr />
            </Form.Group>
          </Form.Row>
          <Form.Group as={Col} controlId="formGridPasswsdordL">
            <Form.Control
              type="email"
              name="email"
              placeholder="E-postanızı girin"
              value={this.state.email}
              onChange={this.handleInput}
              controlId="formGridPasswsdordL"
            />
          </Form.Group>
          <hr />
          <Form.Group as={Col} controlId="formGridPasswsdordL">
            <Form.Control
              type="password"
              name="password"
              placeholder="Şifrenizi girin"
              value={this.state.password}
              onChange={this.handleInput}
              controlId="formGridPasswsdordL"
            />
          </Form.Group>
          <hr />
          <Button type="submit" className="login_btn" block>
            Kaydol
          </Button>
          <p className="login_footer">
            Eğer hesabınız varsa, 
            <Link to="/">
              <b style={{ color: "black" }}> giriş yapın</b>
            </Link>.
          </p>
        </Form>
      </div>
    );
  }
}

export default connect(null, { userRegister })(Register);
