import React, { Component } from 'react';
import Cita from './Cita'
import { connect } from 'react-redux'
import { obtenerCitas } from '../actions/citasActions'
// const ListaCitas = ({ citas, eliminarCita }) => {
class ListaCitas extends Component {
    render() {
        const citas = this.props.citas

        const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra tus citas quí'

        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center">a
                    {/* {mensaje} */}
                    </h2>

                    <div className="lista-citas">
                        {Object.keys(this.props.citas).map(cita => (
                            <Cita
                                key={cita}
                                cita={this.props.citas[cita]}
                                eliminarCita={this.props.borrarCita}
                            />
                        ))}
                    </div>
                </div>
            </div>

        )
    }
}
const mapStateToProps = state => ({
    citas: state.citas.citas
})
export default connect(mapStateToProps, { obtenerCitas })(ListaCitas);