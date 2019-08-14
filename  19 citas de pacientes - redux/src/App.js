// import './App.css';
import React, { Component } from 'react';
import './bootstrap.min.css'
import Header from './components/Header'
import NuevaCita from './components/NuevaCita'
import ListaCitas from './components/ListaCitas'

//redux
import { Provider } from 'react-redux'
import store from './store'


class App extends Component {
  state = {
    citas: []
  }

  //did mount revisa al cargar la aplicación si hay algo guardado en local storage  
  componentDidMount() {
    const citasLocalStorage = localStorage.getItem('citas');
    if (citasLocalStorage) {
      this.setState({
        citas: JSON.parse(citasLocalStorage)
      })
    }
  }
  //cuando se elimina o se agrega nueva cita DID UPDATE
  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.citas))
  }
  crearNuevaCita = datos => {
    const citas = [...this.state.citas, datos]

    // agregar el nuevo state
    this.setState({
      citas: citas
    })
  }
  eliminarCita = id => {
    // console.log(id);
    console.log("DALE BOKITA");
    //tomar una copia del state
    const citasActuales = [...this.state.citas]
    //utilizar filter para sacar el elemento con el id correspondiente
    const citas = citasActuales.filter(cita => cita.id !== id)
    //actualizar state
    this.setState({
      citas
    })
  }
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Header
            titulo='Administrador pacientes veterinaria'
          />
          <div className="row">
            <div className="col-md-10 mx-auto">
              <NuevaCita
                crearNuevaCita={this.crearNuevaCita}
              />
            </div>
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
            />
          </div>
        </div>
      </Provider>
    )
  }
}


// function App() {
// return (
// <div className="App"></div>
// );
// }

export default App;
