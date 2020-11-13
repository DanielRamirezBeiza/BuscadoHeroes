import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'


export const PrivateRouter = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    //Rest es un nombre para bautizar las props restantes del componente
    //console.log(rest);
    //--------------------

    //Guardar en el localStorage ultimo lugar visitado (en este router)
    //-->Ver valor del ultimo url: console.log(rest.location.pathname);
    //-->Ver valor de busqueda realizada: console.log(rest.location.search);
    
    //--->Concatenacion de valores para recordar url compuesta varias variables
    localStorage.setItem('lastPath', rest.location.pathname+rest.location.search)

    return (
        <Route
            {...rest}
            component={ (props)  =>(
                (isAuthenticated)
                ? <Component {...props} />
                : (<Redirect to= "/login" />)
            )}
        />
    )
}



PrivateRouter.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}