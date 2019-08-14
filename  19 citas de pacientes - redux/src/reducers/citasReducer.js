import {
    MOSTRAR_CITAS,
    AGREGAR_CITAS,
    BORRAR_CITAS
} from '../actions/types.js'

//state inicial, cada reducer debe de tener su propio state 
const initialState = {
    benis: [{

    }]
}
export default function (state = initialState, action) {
    switch (action.type) {
        case MOSTRAR_CITAS:
            return {
                ...state
            }
        default:
            return state
    }
}