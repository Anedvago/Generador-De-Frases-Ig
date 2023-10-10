import React from "react";
import Card from "../../Components/Card/Card";
import { citas } from "../../Data/frases";
import { colores } from "../../Data/colores";
import "./Main.css";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      random: 1,
      cita: citas[0],
      color: colores[0],
    };
  }

  handleClick(event) {
    const random = Math.floor(Math.random() * citas.length) + 1;
    this.setState({
      random: 2,
      cita: citas[random - 1],
      color: colores[random - 1],
    });
    //alert(frases[random - 1]);
  }
  render() {
    return (
      <div
        class="container-fluid"
        style={{ backgroundColor: this.state.color }}
      >
        <Card cita={this.state.cita} funcion={this.handleClick.bind(this)} />
      </div>
    );
  }
}
