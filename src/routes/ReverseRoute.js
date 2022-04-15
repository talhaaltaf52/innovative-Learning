import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ReverseRoute = () => {

    const {token} = useSelector(state=>state.AuthReducer);

    const useAuth = () => {
        if(token){
            return false;
        }else{
            return true;
        }
    }

    const auth = useAuth();

    return(
        <>
            { auth ? <Navigate to="/" /> : <Outlet /> }
        </>
    );
}

export default ReverseRoute;