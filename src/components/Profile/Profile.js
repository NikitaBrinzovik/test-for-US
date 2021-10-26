import React from 'react';
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

export const Profile = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const pasteLogin = useSelector((state) => state.auth.pasteLogin)
    if (!isLoggedIn) {
        return <Redirect to={'/'}/>
    }

    return (
        <div>
            <h1> {pasteLogin}</h1>
        </div>
    )
}