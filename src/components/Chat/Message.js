import { CircularProgress, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../../actions/chat/message';
import Messages from './Messages.js';
import ReactScrollableFeed from 'react-scrollable-feed';
import io from 'socket.io-client';

const useStyles = makeStyles({
  
    scrollFeed: {
      height: 300,
      backgroundColor: '#e0e0e0'
    },
    Label: {
      fontWeight: 'bold',
      fontFamily: 'Segoe UI',
      display: 'flex',
      padding: '11px 11px 11px 11px'
    }

  
  });

  let socket = io('localhost:5555');

const Message = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.messages);
    const conversation_data = useSelector((state) => state.conversation_data);

    useEffect(() => {
        if(conversation_data.conversation_id !== undefined) {
       
            dispatch(getMessages(conversation_data.conversation_id));
          
        }

    },[]);


    const [typing, SetTyping] = useState();

    useEffect(() => {

            socket.on('typing-activated', data => {
            SetTyping(data);
            console.log('[MESSAGE] socket.on.typing-activated-data: ', data);
            })
    },[typing])

    const [emitMessageRespond, setEmitMessageRespond] = useState(0);
    useEffect(() => {

        if(conversation_data.conversation_id !== undefined) {
          console.log('CHEKIRAWWWWWT: ', conversation_data.conversation_id);
          dispatch(getMessages(conversation_data.conversation_id));

          }

      socket.on('updateMessage', data => {
        console.log('[MESSAGE]: socket-on-updateMessage ', data);
        setEmitMessageRespond(data);
    });

    }, [emitMessageRespond])

    return(
        <>
          <Typography className={classes.Label}> 

            CONVERSATION WITH : &nbsp;&nbsp; 
          
            {!conversation_data?.conversation_with?.name?.length 
                ? conversation_data.conversation_name 
                : conversation_data?.conversation_with?.name
            }
            </Typography>

          {!messages?.length ? <CircularProgress /> : (
              <ReactScrollableFeed className={classes.scrollFeed}>
                    {messages.map((message) => (
                        <Grid key={message._id} container item xs={12} sm={12} md={12}>
                            <Messages message={message}/>
                        </Grid>
                    ))}          
                </ReactScrollableFeed>
          )}
        </>
    );
}

export default Message;