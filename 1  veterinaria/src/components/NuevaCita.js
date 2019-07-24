import React, { Component } from 'react';
import uuid from 'uuid'

const stateInicial = {
    cita: {
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    },
    error: false
}
class NuevaCita extends Component {
    state = {
        ...stateInicial
    }

    //se coloca lo que el usuario escribe en el state
    handleChange = e => {
        this.setState({
            cita: {
                ...this.state.cita,
                [e.target.name]: e.target.value
            }
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        //extraer los valores del state
        const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;

        //validar que los campos estén llenos
        if (mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '') {
            this.setState({
                error: true
            });

            return;
        }
        //  else {
        //     this.setState({
        //         error: false
        //     });
        // }

        //crear nuevo objeto con los datos
        const nuevaCita = { ...this.state.cita };
        nuevaCita.id = uuid();
        //Agregar la cita al state de app ???
        this.props.crearNuevaCita(nuevaCita)
        //reiniciar state


        this.setState({
            ...stateInicial
        })
    }

    render() {
        const { error } = this.state;
        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5 ">
                        Llena el formulario para crear una nueva cita
                    </h2>

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre de mascota"
                                    name="mascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input

                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre de Dueño"
                                    name="propietario"
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>
                            <label className="col-sm-4 col-lg-1 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-2">
                                <input
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Síntomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea className="form-control" onChange={this.handleChange} value={this.state.cita.sintomas} name="sintomas" placeholder="Describe los síntomas"></textarea>
                            </div>
                        </div>
                        <input type="submit" className="py-3 mt-2 btn-success btn-block" value="AGREGAR NUEVA CITA" name="" id="" />
                    </form>
                    {error ? <div className="alert alert-danger mt-4 mb-2 text-center">Todos los campos son obligatorios</div> : null}
                </div>
            </div>
        );
    }
}

export default NuevaCita;