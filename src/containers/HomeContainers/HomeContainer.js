import {connect} from 'react-redux'
import home from '../../components/Home/homeComponents'
import * as homeModule from '../../modules/HomeModule/homeModule'

const mapStateToProps =(state) => ({
    isProcess: homeModule.getProcess(state),
    isLoading: homeModule.getLoading(state),
    isError: homeModule.getError(state),
    isMessageInfo: homeModule.getMessageInfo(state),
    isData: homeModule.getHomeData(state),
    modal: homeModule.getModal(state),
    transactions: homeModule.getTransactions(state),
})

/*
*  los siguientes elementos
*           - getRequestCount: se hace el llamado al backend e ingresa los valores a isData
*           - getOnClose: se utiliza para cerrar un modal de error
*           - getOnOpen: se utiliza para abrir un modal de error
*           - onModal:  se utiliza para abrir  un modal de información
*           - getclearMessage: limpieza de informacion
* */
const mapDispatchToProps = (dispatch) => ({
    getRequestCount: (request)=>{
        homeModule.getCounts(dispatch)
    },
    getOnClose: (request) =>{
        homeModule.onClose(dispatch)
    },
    getOnOpen: (request) =>{
        homeModule.onOpen(dispatch)
    },
    onModal: (modal) =>{
        homeModule.onModal(dispatch, modal)
    },
    onclearMessage:() => {
        homeModule.clearMessageInfo(dispatch)
    },
})
export default connect (mapStateToProps, mapDispatchToProps)(home)