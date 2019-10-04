import React from "react";
import Navbar from "../components/Navbar";
import "./styles/BadgeNew.css";
import logo from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName="Braxton"
                lastName="Bonilla"
                twitter="braxb6"
                jobTittle="Developer"
              />
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>
        <div className="BadgeNew__hero">
          <img className="img-fluid" alt="logo" src={logo} />
        </div>
      </div>
    );
  }
}
export default BadgeNew;
