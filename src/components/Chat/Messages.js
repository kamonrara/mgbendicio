import React, { useEffect, useState } from 'react';
import { Typography, Grid } from '@material-ui/core';
import './Messages.css';

const user = JSON.parse(localStorage.getItem('profile'));
let currentUser = user?.result?._id;

const Messages = ({ message }) => {

    const [justifyContentVal, setJustifyContentVal] = useState("");
    const [background, setBackground] = useState("");
    useEffect(() => {

        if(message.owner === currentUser) {
            setJustifyContentVal('flex-start');
            setBackground('#2534da');
        } else {
            setJustifyContentVal('flex-end');
            setBackground('#61658f');
        }

    },[]);

    return (
        // <Grid style={{ display: "flex", justifyContent:`${message.owner === currentUser ? 'flex-start':'flex-end'}` }} item xs={12} sm={12} md={12}>
        <Grid style={{ display: "flex", justifyContent: justifyContentVal }} item xs={12} sm={12} md={12}>    
            {/* <p className="sentText pr-10">{message.owner}</p> */}
            <Typography className="messageBox" style={{ background: background}}>
                    {message.content}
            </Typography>
        </Grid>
    );
}

export default Messages;