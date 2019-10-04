import React from "react";
import header from "../images/badge-header.svg";
import avatar from "../images/avatar.png";
import "./styles/Badge.css";

class Badge extends React.Component {
  render() {

    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={header} alt="Logo congerencia" />
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar" src={avatar} alt="avatar" />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>
        <div className="Badge__footer">#kaka</div>
      </div>
    );
  }
}

export default Badge;
