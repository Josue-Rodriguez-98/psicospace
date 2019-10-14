import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
  FormLabel,
  FormGroup,
  FormControl,
} from "react-bootstrap";
import firebase from "firebase";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class MyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      appointmentDate: new Date(Date.now() - 864e5),
      appointmentDateValid: false,
      appointmentHour: "N/A",
      psychologist: "N/A",
      message: "",
      data: {},
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleDateChange = newDate => {
    let yesterday = new Date(Date.now() - 864e5);
    if(newDate > yesterday){
      console.log("es menor papu");
      this.setState({
        appointmentDate: newDate,
        appointmentDateValid: true,
      });
    }else{
      this.setState({
        appointmentDateValid: false,
      });
    }
  }

  handleSubmit = async () => {
    if(this.state.appointmentDateValid && this.state.appointmentHour !== "N/A" && this.state.psychologist !== "N/A"){
      
      let data = {
        appointmentDate: this.state.appointmentDate,
        appointmentHour: this.state.appointmentHour,
        psychologist: this.state.psychologist,
        message: this.state.message,
        price: this.props.price,
        type: this.props.type,
        patient: "",
        email: "",
        cellphone: "",
        skypeUser: "",

      }
      Object.values(this.state.data).map(snap =>{
        if(snap.email === firebase.auth().currentUser.email){
          data.patient = snap.name;
          data.email = snap.email;
          data.skypeUser = snap.skypeUser;
          data.cellphone = snap.cellphone;
        }
      })
      console.log("afuera del object map: ", data.author);
      
      console.log("antes de hacer el push", data.author)
      await firebase
        .database()
        .ref()
        .child("/appointments")
        .push(data);
      console.log("Submitted succesfully");
      alert("¡Su cita ha sido reservada!");
      this.toggle();


    }else{
      alert("ERROR: Por favor, seleccione datos validos.")
    }

  }

  componentDidMount = async () => {
    await firebase
      .database()
      .ref()
      .child("/users")
      .once("value", async values =>{
        let val = await values.exportVal();
        await this.setState({data: val});
      });
      console.log(this.state.data);
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Reservación de {this.props.type}</ModalHeader>
          <ModalBody>
          <FormGroup>
          <FormLabel>Seleccione la Fecha de la Cita</FormLabel>
          <br/>
          <DatePicker
              selected = {this.state.appointmentDate}
              onChange = {this.handleDateChange}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Seleccione Hora de la Cita</FormLabel>
            <FormControl
              as="select"
              onChange={event => {
                console.log(event.target.value);
                if(event.target.value === "0"){
                  console.log("es cero papu");
                  this.setState({appointmentHour: "N/A"});
                }else{
                  this.setState({appointmentHour: event.target.value});
                }
              }}>
                <option value = "0">Horarios</option>
                <option value="1:00 pm">1:00 pm</option>
                <option value="2:00 pm">2:00 pm</option>
                <option value="3:00 pm">3:00 pm</option>
                <option value="4:00 pm">4:00 pm</option>
                <option value="5:00 pm">5:00 pm</option>
                <option value="6:00 pm">6:00 pm</option>
                <option value="7:00 pm">7:00 pm</option>
                <option value="8:00 pm">8:00 pm</option>
                <option value="9:00 pm">9:00 pm</option>
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel>Seleccione un Psicólogo</FormLabel>
            <FormControl
              as="select"
              onChange={event => {
                console.log(event.target.value);
                if(event.target.value === "0"){
                  console.log("es cero papu");
                  this.setState({psychologist: "N/A"});
                }else{
                  this.setState({psychologist: event.target.value});
                }
              }}>
                <option value = "0">Psicólogos</option>
                <option value="Ana Espinal">Ana Espinal</option>
                <option value="Fernando Casco">Fernando Casco</option>
                <option value="María Santos">María Santos</option>
            </FormControl>
            </FormGroup>
            <FormGroup controlId="exampleForm.ControlTextarea1">
              <FormLabel>Mensaje para el Psicólogo</FormLabel>
              <FormControl as="textarea" rows="3" onChange = {event => {
                this.setState({message: event.target.value});
                //console.log(event.target.value);
              }}/>
            </FormGroup>
        </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>Reservar</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default MyModal;