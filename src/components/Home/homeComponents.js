import React, { Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {head_home} from '../Structure/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import BootstrapTable from "react-bootstrap-table-next";
import {columns_Home} from "../Config/ConfigHome";
import paginationFactory from "react-bootstrap-table2-paginator";
import LoaderDialog from '../Loader/LoaderDialog';


/*
*  home, archivo de "agrupación de elementos" para su uso
*  se decidio implementar hooks para su elementos externos.
*
*  FUNCIONES QUE SE PUEDEN OBSERVAR:
*
*       onRefresh : FUNCION PARA RECARGAR LA TABLA CON NUEVOS ELEMENTOS DEL BACKEND
* */
class Home extends Component {
    constructor(props) {
        super(props)
        const {getRequestCount} = this.props
        getRequestCount()
        this.state = {head_home}
        this.onRefresh = this.onRefresh.bind(this)
    }

    onRefresh = () =>{
        const {getRequestCount} = this.props
        getRequestCount()
    }
    render() {
        const isRanking = (this.props.isData.ranking || []).length
        return (
            <div className="App" >
                <br />
                <Container fluid className="bg-light">
                    <Row>
                        <Col><h3>{this.props.isData.title} (id:{this.props.isData.id})</h3></Col>
                        <Col><Button variant="primary" onClick={() =>this.onRefresh()}>Refrescar</Button></Col>
                    </Row>
                    <Row>
                        <Col>
                            {isRanking !== 0? (
                                <BootstrapTable keyField='id' data={this.props.isData.ranking} columns={ columns_Home } pagination={ paginationFactory() } />
                            ):(
                                <div></div>
                            )}
                        </Col>
                    </Row>
                    <LoaderDialog
                        open={this.props.isProcess.open}
                        title={this.props.isProcess.title}
                        message={this.props.isProcess.message}
                    />
                </Container>
            </div>
        );
    }
}
Home.propTypes = {
    isError: PropTypes.object,
    isProcess: PropTypes.object,
    isLoading: PropTypes.bool,
    isMessageInfo: PropTypes.object,
    isData: PropTypes.object,
    getRequestCount: PropTypes.func,
    getOnOpen: PropTypes.func,
    getOnClose: PropTypes.func,
    onClearMessageInfo: PropTypes.func,
    onModal: PropTypes.func,
    modal: PropTypes.object,
}

export default Home;