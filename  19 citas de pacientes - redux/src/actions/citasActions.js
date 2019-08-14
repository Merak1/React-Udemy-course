import {
    MOSTRAR_CITAS,
    AGREGAR_CITAS,
    BORRAR_CITAS
} from './types'

export const obtenerCitas = () => {
    return {
        type: MOSTRAR_CITAS
    }
}