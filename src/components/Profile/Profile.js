import React from 'react';
import {useSelector} from "react-redux";


export const Profile = () => {

    const pasteLogin = useSelector((state) => state.auth.pasteLogin)
    console.log("here must be:", pasteLogin)
    return (
        <div>

            <h1> {pasteLogin}</h1>
            <h2> dfasdfas</h2>
        </div>
    )
}