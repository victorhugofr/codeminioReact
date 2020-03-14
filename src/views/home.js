import React from 'react'
import {withRouter} from 'react-router-dom'
import AuthService from '../app/service/authService'
import { AuthContext } from '../main/provedorAutenticacao'
import { AuthConsumer } from '../main/provedorAutenticacao'

function Home (props){
   return(
       <h4 className="mt-5">
       pagina principal
       </h4>
   )
}
export default Home