import React from 'react'
import NavbarItem from './navbaritem'

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Codeminio</a>
            <button className="navbar-toggler" 
                    type="button" data-toggle="collapse" data-target="#navbarColor01" 
                        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                <NavbarItem href="#/" label="Início">

                </NavbarItem>
                <NavbarItem href="#/chooseRole" label="Login">

                </NavbarItem>
                <NavbarItem href="#/morador/cadastrar" label="Cadastrar-se">

                </NavbarItem>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar