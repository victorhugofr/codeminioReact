import React from 'react';

import Rotas from './router'
import Navbar from '../components/navbar'
import ProvedorAutenticacao from './provedorAutenticacao'

import 'toastr/build/toastr.min.js'

import 'bootswatch/dist/lux/bootstrap.css'
import '../custom.css'
import 'toastr/build/toastr.css'

class App extends React.Component {
  render(){
    return(
      <>
      <ProvedorAutenticacao>
      <Navbar/>
      <div className="container">
        <div className="row">
              <Rotas />
        </div>
      </div>
      </ProvedorAutenticacao>
      </>
    );
  }
}

export default App;
