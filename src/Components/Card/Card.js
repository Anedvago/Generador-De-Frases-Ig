import React from "react";
import Button from "../Button/Button";
import "./Card.css";
export default class Card extends React.Component {
  render() {
    return (
      <div id="quote-box" class="card shadow p-3 mb-5 bg-body-tertiary rounded">
        <div id="text">"{this.props.cita.frase}"</div>
        <div id="author">
          <span>
            <a target="_top" href="twitter.com/intent/tweet" id="tweet-quote">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i class="bi bi-instagram"></i>
            </a>
          </span>
          <span>- {this.props.cita.autor} -</span>
        </div>
        <Button handleClick={this.props.funcion} />
      </div>
    );
  }
}
