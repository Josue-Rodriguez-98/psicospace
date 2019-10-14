import React from 'react';
import {
  Container,
  Row,
  Col,
  Nav,
  Tab,
  Form,
  FormLabel,
  FormGroup,
  FormControl,
  FormText,
  Button,
} from "react-bootstrap";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class Dropdowns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointmentDate: new Date(Date.now() - 864e5),
      appointmentHour: "N/A",
      psychologist: "N/A",

    };
  }

  handleDateChange = newDate => {
    let yesterday = new Date(Date.now() - 864e5);
    if(newDate > yesterday){
      console.log("es menor papu");
      this.setState({
        appointmentDate: newDate,
      });
    }
  }

  render() {
    return (
      <div>
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
        <div style = {{textAlign: "center"}}>
          <Button 
            color = "success" 
            size = "lg"
            onClick = {super.setState({modal: false})}
            >Reservar</Button>
        </div>
      </div>
    );
  }
}