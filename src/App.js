import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { StrictMode } from 'react';
import './App.css';
import history from './history';
import {ViewportProvider} from "./Viewport";
import Home from "./containers/HomeContainers/HomeContainer";
import {Provider} from "react-redux";
import store from './store';

/*
* CODIGO EN RESPUESTA A WORD COUNTER (DESAFIO BANCO INTERNACIONAL)
*
* AUTOR: CARLOS PATRICIO FUENTES CORTES
* RUT: 18.676.359-9
*
* EN ESTE CODIGO SE PUEDE VISUALIZAR SOLO EL RESULTADO DEL CONTEO DE LAS PALABRAS,
* ADEMAS SE PUEDE VISUALIZAR SU ARQUITECTURA ES COMPONENTS-CONTAINERS-MODULES-SERVICE
*
* ESTRUCTURA DE EJECUCIÓN:
*   - APP.JS
*       -CONTAINERS
*       - COMPONENTS MODULE AND SERVICE
*
*
*  SE DEBE TENER CUENTA QUE SE UTILIZO DIFERENTES HERRAMIENTAS DE FRONT, PARA SU DEMOSTRACIÓN TANTO COMO MIU A BOOTSTRAP.
* */
function App() {
  return (
      <StrictMode>
        <ViewportProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes history={history}>
                        <Route exact path="/" element={<Home/>} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </ViewportProvider>
      </StrictMode>
  )
}
export default App