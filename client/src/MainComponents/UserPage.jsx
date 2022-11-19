import React from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import './UserPage.css';

import { UserContext } from "./UserContext";

import ChannelNav from "./AppComponents/ChannelNav";
import ChannelInfo from "./AppComponents/Channellnfo"

const UserPage = () => {
    //const LogoButton = process.env.PUBLIC_URL + '/images/button_logo.png';
    const [params] = useSearchParams();
    const [contextValues, setContextValues] = useState([{}]);

    useEffect(() => {
        fetch('/channels/load?' + new URLSearchParams({userID: params.get("userID")}))
        .then(res => {return res.json()})
        .then(data => {
            setContextValues(curr => [...curr, ...data]);
        });
    }, []);

    const values = {contextValues, setContextValues};
    return (
        <UserContext.Provider value={values}>
            <ChannelNav/>
            <ChannelInfo/>

            <div className="chat-container">
                <div className="chat">
                    <h1>ui</h1>
                </div>
                <div className="input-area">
                    <input type="text" autoFocus></input>
                </div>
            </div>

            <div className="members-section">
            </div>
        </UserContext.Provider>
    )
}

export default UserPage;