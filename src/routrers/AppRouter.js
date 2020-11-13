import React, {useContext} from "react";
import {
  BrowserRouter as Router,
  Switch,

} from "react-router-dom";
import { AuthContext } from "../auth/authContext";
import LoginScreen from "../components/ui/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";


const AppRouter = () => {

    const {user} = useContext(AuthContext)
    const {logged} = user;

    return (
        <Router>
            <div>
            
                <Switch>
                    <PublicRouter 
                        exact path="/login" 
                        component ={LoginScreen} 
                        isAuthenticated= {logged}
                    />
                    
                    <PrivateRouter
                        path="/" 
                        component ={DashboardRoutes}
                        isAuthenticated= {logged} />
                    
                    
                </Switch>
            </div>
        </Router>
        
    )
}

export default AppRouter
