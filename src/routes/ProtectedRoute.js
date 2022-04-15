import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {

    const {token} = useSelector(state=>state.AuthReducer);

    const useAuth = () => {
        if(token){
            return true;
        }else{
            return false;
        }
    }

    const auth = useAuth();

    return(
        <>
            { auth ? <Navigate to="/dashboard" /> : <Outlet /> }
        </>
    );
}

export default ProtectedRoute;