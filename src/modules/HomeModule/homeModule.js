//Constantes
import {
    HOME_MESSAGE as MSG_HOME
} from '../../constants/message'
import axios from "axios";
export const initializer = () => {}

export const actions = {
    START: 'START_REQUEST_WORDS_SEARCH',
    FINISH: 'FINISH_REQUEST_WORDS_SEARCH',
    ERROR: 'ERROR_REQUEST_WORDS_SEARCH',
    MESSAGE_INFO: 'MESSAGE_INFO_WORDS_SEARCH',
    CLEAR_MESSAGE_INFO: 'CLEAR_MESSAGE_INFO_WORDS_SEARCH',
    PROCESS: 'PROCESS_WORDS_SEARCH',
    MODAL: 'MODAL_REQUEST_SEARCH_WORDS',
    TRANSACTION: 'TRANSACTION_REQUEST_SEARCH_WORDS',
}
/*
* FUNCIONES QUE SE UTILIZAN:
*       - getCounts: Funcion para extraer los datos del backend
*       - onModal: abrir modal
*       - onOpen: abrir error
*       - onClose: cerrar error
*       - onclearMessage: limpieza
* */
export const getCounts = (dispatch) => {
    dispatch({ type: actions.START, isError: {open: false, },  })
    dispatch({
        type: actions.PROCESS,
        isProcess: {
            ...MSG_HOME.SEARCH_WAIT,
        }
    })
    const handleSuccessfully = (response) => {
        setTimeout(()=>{
            dispatch({
                type: actions.PROCESS,
                isProcess: { ...INITIAL_STATE.isProcess },
            })
        }, 900)
        if (
            response.data === undefined ||
            response.data === null ||
            response.data === '' ||
            response.data.length === 0
        ) {
            const messageError = {
                ...MSG_HOME.SEARCH_NOT_FOUND,
            }

            dispatch({
                type: actions.MESSAGE_INFO,
                messageInfo: messageError,
            })
        } else {
            dispatch({
                type: actions.FINISH,
                data: response.data,
            })
        }
    }

    const handlesError = (response) => {
        dispatch({
            type: actions.PROCESS,
            isProcess: { ...INITIAL_STATE.isProcess },
        })
        //Mostramos modal
        const messageError = {
            ...MSG_HOME.SEARCH_ERROR,
        }

        dispatch({
            type: actions.MESSAGE_INFO,
            messageInfo: messageError,
        })
    }
    const url = 'http://localhost:8080/counter'

    return axios.post(url, {timeout: 900})
        .then(handleSuccessfully)
        .catch(handlesError)
}
export const reducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case actions.START:
            return {
                ...INITIAL_STATE,
                isLoading: true,
            }
        case actions.FINISH:
            return {
                ...state,
                isLoading: false,
                data: action.data,
                modal:{
                    open: true,
                }
            }
        case actions.TRANSACTION:
            return {
                ...state,
                isLoading: false,
                transactions: action.transactions,
            }
        case actions.MESSAGE_INFO:
            return {
                ...state,
                isLoading: false,
                messageInfo: action.messageInfo,
            }
        case actions.PROCESS:
            return {
                ...state,
                isProcess: action.isProcess,
                isError: false,
                isLoading: false,
                messageInfo: { ...INITIAL_STATE.messageInfo },
            }
        case actions.ERROR:
            return {
                ...state,
                isError: action.isError,
                messageInfo: { ...INITIAL_STATE.messageInfo },
            }
        case actions.CLEAR_MESSAGE_INFO:
            return {
                ...state,
                messageInfo: { ...INITIAL_STATE.messageInfo },
                data: [],
                transactions: [],
            }
        case actions.MODAL:
            return {
                ...state,
                isLoading: false,
                modal: action.modal,
            }
        default:
            return state
    }
}
const INITIAL_STATE = {
    isLoading: false,
    data: [],
    transactions: [],
    isProcess: {
        open: false,
        title: '',
        message: '',
    },
    isError: {
        open: false,
        title: '',
        message: '',
    },
    isClose: {
        open: false,
        title: '',
        message: '',
    },
    messageInfo: {
        title: '',
        message: '',
        suggestion: '',
    },
    modal: {
        open: false,
        title: '',
        message: '',
        suggestion: '',
        btnCloseLabel: '',
        warning: true,
        closable: true,
    },
}
export const onModal = (dispatch, modal = { ...INITIAL_STATE.modal }) => {
    dispatch({
        type: actions.MODAL,
        modal: modal,

    })
}
export const clearMessageInfo = (dispatch) => {
    dispatch({
        type: actions.CLEAR_MESSAGE_INFO,
        isError: {
            open: false,
        },
    })
}
export const onClose = (dispatch) => {
    dispatch({
        type: actions.ERROR,
        isError: { open: false}
    })
}
export const onOpen = (dispatch) => {
    dispatch({
        type: actions.ERROR,
        isError: { open: true},
    })
}
export const getError = (state) => state.home.isError
export const getProcess = (state) => state.home.isProcess
export const getModal = (state) => state.home.modal
export const getLoading = (state) => state.home.isLoading
export const getTransactions = (state) => state.home.transactions
export const getMessageInfo = (state) => state.home.messageInfo
export const getHomeData = (state) => state.home.data
