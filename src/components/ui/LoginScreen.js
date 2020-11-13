import React, {useContext} from 'react'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';



const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);
    //console.log(user)

    const handleLogin = () =>{

        //Recuperar ultimo lugar visitado, sino al inicio
        const lastPath = localStorage.getItem('lastPath') || '/'
        
        //Extraer funcion dispatch para llamar una accion que cambie el user
        dispatch({
            type: types.login,
            payload: {
                name:'Invitado'
            }
        })

        //Redireccionar al sitio:
        history.replace(lastPath)
        //history.push('/');
        //history.push('/');
    }

    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Ingresar
            </button>
        </div>
    )
}

export default LoginScreen
