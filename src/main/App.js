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
          <div className="col-md-8" style={{position: 'relative', left: '220px'}}>
              <Rotas />
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default App;
