import React from 'react';
import { Container, Row, Col, Modal } from 'reactstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }


  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="main-modal-full text-center">
          <Container>
            <Row>
              <Col xs={{ size: 2, offset: 10 }} md={{ offset: 9 }} lg={{ offset: 8 }}>
                <button type="button" className="main-modal__close" data-dismiss="modal" aria-label="Close">
                  <i className="icon icon-cross" />
                </button>
              </Col>
              <Col xs="12" md={{ size: 6, offset: 3 }}>
                <div className="mb-40">
                  <h1 className="main-title mb-25">Log In</h1>
                  <div className="main-alert main-alert--dark-green">
                    <i className="icon icon-check mr-15" />
                    <span>Success! Your password has been updated.</span>
                    <i className="main-alert__close icon icon-cross font-10" />
                  </div>
                </div>
              </Col>
              <Col xs="12" md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }}>
                <div className="main-input mb-25">
                  <label htmlFor="email" className="main-input__label">Email</label>
                  <input id="email" type="email" className="main-input__input" />
                </div>
                <div className="main-input mb-25">
                  <label htmlFor="pass" className="main-input__label">Password</label>
                  <div className="main-input-with-text">
                    <input id="pass" type="password" className="main-input__input" />
                    <a href="#stub" className="main-input__text main-link">Forgot?</a>
                  </div>
                </div>
                <label htmlFor="checkbox" className="main-checkbox main-checkbox--white mb-25">
                  <input id="remember" type="checkbox" className="main-checkbox__input" />
                  <span className="main-checkbox__icon" />
                  <span className="main-checkbox__text">Remember me</span>
                </label>
                <div>
                  <button className="main-button main-button--blue main-button--lg mb-40" disabled>Log In</button>
                </div>
                <p className="font-12">Don’t have a Prodigy account? <a href="#stub" className="main-link">Create Account</a></p>
              </Col>
            </Row>
          </Container>
        </Modal>
      </div>
    );
  }
}

export default Login;
