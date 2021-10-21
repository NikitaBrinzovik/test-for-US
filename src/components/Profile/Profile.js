import React from 'react';
import {useSelector} from "react-redux";

export const Profile = () => {
    const pasteLogin = useSelector((state) => state.auth.pasteLogin)

    return (
        <div>
            <h1> {pasteLogin}</h1>
        </div>
    )
}