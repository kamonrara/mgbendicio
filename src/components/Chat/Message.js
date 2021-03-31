import { CircularProgress, Typography, Paper, Grid } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import { getMessages } from '../../actions/chat/message';
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
    borderRight500: {
        borderRight: '1px solid #e0e0e0', 
   
    },
    messageArea: {
      height: '70vh',
      overflowY: 'auto'
    },
    gridList: {
      width: 300,
      height: 450,
    },
    mainContainer: {
      display: 'flex',
      height: '53vh',
      overflowY: 'auto',
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
    }
  
  });

const Message = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.messages);
    const conversation_data = useSelector((state) => state.conversation_data);
    const ENDPOINT = 'localhost:5555';

    console.log('[MESSAGES]: conversation_id', conversation_data.conversation_id);

    useEffect(() => {
      
    console.log('[MESSAGES]: useEffect 1', conversation_data.conversation_id, '\n',conversation_data.conversation_name);

        if(conversation_data.conversation_id === undefined || conversation_data.conversation_id.length === 0) {
           //do nothing....
        }
        else {
          dispatch(getMessages(conversation_data.conversation_id));
          scrollToBottom();
        }

    },[]);

  
    const [kamon, setKamon] = useState(0);

    socket = io(ENDPOINT);
    socket.on('updateMessage', (data) => {
      setKamon(data.kamon);
    });

    useEffect(() => {
      if(conversation_data.conversation_id === undefined || conversation_data.conversation_id.length === 0) {
        //do nothing....
      }
      else {
       dispatch(getMessages(conversation_data.conversation_id));
       scrollToBottom();
      }

    },[kamon])

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })

    }

    return(
        <>
        <Typography> 
          CONVERSATION WITH : &nbsp;&nbsp; {!conversation_data?.conversation_with?.name?.length ? conversation_data.conversation_name :  conversation_data?.conversation_with?.name}
        </Typography>
         {!messages?.length ? <CircularProgress /> : (
   
               <Grid container className={classes.mainContainer} component={Paper} >
          
                   {messages.map((message) => (
                       <Grid className={classes.borderRight500}key={message._id} container item xs={12} sm={12} md={12}>
                            &nbsp;&nbsp;
                 
                           <Typography>{message.content}</Typography> 
                       </Grid>
                   ))}    
               <div ref={messagesEndRef} />
               </Grid> 
      )}
        </>
    );
}

export default Message;