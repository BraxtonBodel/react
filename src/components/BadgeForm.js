import React, { Component } from "react";

export class BadgeForm extends Component {
  render() {
    return <div>
        <h1>Nuevo cliente</h1>
        <form action="">
            <div className="form-group">
                <label htmlFor="">Primer Nombre</label>
                <input className="form-control" type="text" name="firstName"/>
            </div>

            <button className="btn btn-primary">Guardar</button>
        </form>
    </div>;
  }
}

export default BadgeForm;
