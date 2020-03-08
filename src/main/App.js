import React from 'react';

import Rotas from './router'
import Navbar from '../components/navbar'

import 'toastr/build/toastr.min.js'

import 'bootswatch/dist/lux/bootstrap.css'
import '../custom.css'
import 'toastr/build/toastr.css'

class App extends React.Component {
  render(){
    return(
      <>
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col-md-6" style={{position: 'relative', left: '300px'}}>
            <div className="bs-docs-section">
              <Rotas />
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default App;
