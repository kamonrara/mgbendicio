import { CircularProgress, Typography, Paper, Grid } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import { getMessages } from '../../actions/chat/message';
import Messages from './Messages.js';

import ReactScrollableFeed from 'react-scrollable-feed';

let socket;

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    chatSection: {
      width: '100%',
      height: '70vh'
    },
    headBG: {
        backgroundColor: '#e0e0e0'
    },
    borderLeft500: {
      borderLeft: '1px solid #e0e0e0'
    },
    messagesContainer: {
      //  display: "flex",
      //  justifyContent: "flex-end"
   
    },
    messageArea: {
      height: '70vh',
     // overflowY: 'auto'
    },
    gridList: {
      width: 300,
      height: 450,
    },
    mainContainer: {
      display: 'flex',
      height: '53vh',
      //overflowY: 'auto',
      backgroundColor: '#fda01d',
     // scrollIntoView: 'end'

    },
    purple: {
      // color: deepPurple[500],
      backgroundColor: deepPurple[500],
    },
    messsages: {
      height: 600,
      width: 400
    },
    scrollFeed: {
      height: 200,
      backgroundColor: '#e0e0e0'
    }

  
  });

const Message = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.messages);
    const conversation_data = useSelector((state) => state.conversation_data);
    const ENDPOINT = 'localhost:5555';

    console.log('[MESSAGE]: conversation_id', conversation_data.conversation_id);

    useEffect(() => {
      
    console.log('[MESSAGE]: useEffect 1', conversation_data.conversation_id, '\n',conversation_data.conversation_name);

        if(conversation_data.conversation_id === undefined || conversation_data.conversation_id.length === 0) {
           //do nothing....
        }
        else {
          dispatch(getMessages(conversation_data.conversation_id));

        }

    },[]);

  
    const [receiveMessage, setReceiveMessage] = useState(0);

    socket = io(ENDPOINT);
    socket.on('updateMessage', (data) => {
      console.log('kamon-[MESSAGE] socket.on.updateMessage data:', data);
      setReceiveMessage(data.updatingFlag);
    });

    useEffect(() => {
      if(conversation_data.conversation_id === undefined || conversation_data.conversation_id.length === 0) {
        //do nothing....
      }
      else {
       dispatch(getMessages(conversation_data.conversation_id));
     
      }

    },[receiveMessage])

 
    return(
        <>
          <Typography> 
            CONVERSATION WITH : &nbsp;&nbsp; {!conversation_data?.conversation_with?.name?.length ? conversation_data.conversation_name :  conversation_data?.conversation_with?.name}
          </Typography>

          {!messages?.length ? <CircularProgress /> : (
              <ReactScrollableFeed className={classes.scrollFeed}>
                    {messages.map((message) => (
                        <Grid  key={message._id} container item xs={12} sm={12} md={12}>
                            <Messages message={message}/>
                        </Grid>
                    ))}          
                </ReactScrollableFeed>
          )}
          
        </>
    );
}

export default Message;