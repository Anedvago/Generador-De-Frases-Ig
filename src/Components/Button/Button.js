import React from "react";
import "./Button.css";
export default class Button extends React.Component {
  render() {
    return (
      <button
        id="new-quote"
        type="button"
        class="btn"
        onClick={this.props.handleClick}
      >
        Generar nueva frase
      </button>
    );
  }
}
