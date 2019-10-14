import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ErrorModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color = "primary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>ERROR!</ModalHeader>
          <ModalBody>
            <div style = {{textAlign: "center"}}>
              <p style = {{fontSize: "30px"}}>¡Debes iniciar sesión primero!</p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color = "danger" onClick={this.toggle}>Aceptar</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}