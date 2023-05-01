import {connect} from 'react-redux'
import HomeComponents from '../../components/Home/HomeComponents'
import * as HomeModule from '../../modules/HomeModule/homeModule'

const mapStateToProps =(state) => ({
    isProcess: HomeModule.getProcess(state),
    isLoading: HomeModule.getLoading(state),
    isError: HomeModule.getError(state),
    isMessageInfo: HomeModule.getMessageInfo(state),
    isData: HomeModule.getHomeData(state),
    modal: HomeModule.getModal(state),
    transactions: HomeModule.getTransactions(state),
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
        HomeModule.getCounts(dispatch)
    },
    getOnClose: (request) =>{
        HomeModule.onClose(dispatch)
    },
    getOnOpen: (request) =>{
        HomeModule.onOpen(dispatch)
    },
    onModal: (modal) =>{
        HomeModule.onModal(dispatch, modal)
    },
    onclearMessage:() => {
        HomeModule.clearMessageInfo(dispatch)
    },
})
export default connect (mapStateToProps, mapDispatchToProps)(HomeComponents)