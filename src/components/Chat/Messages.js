import React, { useEffect, useState } from 'react';
import { Typography, Grid } from '@material-ui/core';
import './Messages.css';
// import io from 'socket.io-client';

const Messages = ({ message }) => {
    // console.log('[Messages] Rendered: ');
    const [justifyContentVal, setJustifyContentVal] = useState("");
    const [backgroundColor, setBackgroundColor] = useState({ color: ''});
    const user = JSON.parse(localStorage.getItem('profile'));

    let currentUser = user?.result?._id;


    useEffect(() => {

        if(message.owner === currentUser) {
            setJustifyContentVal('flex-start');
            setBackgroundColor({...backgroundColor, color: '#2534da'});
        } else {
            setJustifyContentVal('flex-end');
            setBackgroundColor({...backgroundColor, color: '#61658f'});
        }

    },[message]);

    return (
        <Grid style={{ display: "flex", justifyContent: justifyContentVal }} item xs={12} sm={12} md={12}>    
            <Typography className="messageBox" style={{ background: backgroundColor.color, fontFamily: 'Segoe UI', margin: '1px 3px 1px 3px' }}>
                    {message.content}
            </Typography>
        </Grid>
    );
}

export default Messages;