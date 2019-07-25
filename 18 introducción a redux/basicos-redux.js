const redux = require('redux');

const createStore = redux.createStore;

//State inicial 

const stateInicial = {
    usuarios: []
}


//Reducer - cambia el estado de la aplicación
// utiliza el stateactual y la acción como parámetros 
const reducerPrincipal = (state = stateInicial, action) => {
    if (action.type === 'AGREGAR_USUARIO') {
        return {
            ...state,
            usuarios: action.nombre
        }
    } if (action.type === 'MOSTRAR_USUARIOS') {
        return {
            ...state,

        }
    }

    return state;
}

//createStore y store (contiene el state de la aplicación)
//createStore toma 3 parámetros
//createStore(reducer, stateinicial, applymiddleware)
const store = createStore(reducerPrincipal);
console.log(store.getState());

//subscribe o subscription 
store.subscribe(() => {
    console.log('Algo le movieron', store.getState())
})






//Dispatch es la única forma de cambiar el state
// dispatch ({ acción que se va a ejecutar, datos que se envían        })
store.dispatch({ type: 'AGREGAR_USUARIO', nombre: 'Juan' })
// console.log(store.getState());
store.dispatch({ type: 'AGREGAR_USUARIO', nombre: 'Benis' })
store.dispatch({ type: 'MOSTRAR_USUARIOS' })
// console.log(store.getState());

