import { Button, CircularProgress, Link, Grid, Grow, Paper, Typography } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../../actions/chat/message';
import { getConversation } from '../../actions/chat/conversation';
import { setConversationId, setConversationWith } from '../../actions/chat/conversation';
import io from 'socket.io-client';
import MessageIcon from '@material-ui/icons/Message';
let socket;
const ENDPOINT = 'localhost:5555';
socket = io(ENDPOINT)

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
        borderRight: '1px solid #e0e0e0'
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
     // height: '53vh',
      overflowY: 'auto',
      backgroundColor: '#fda01d'
    },
    purple: {
      // color: deepPurple[500],
      backgroundColor: deepPurple[500],
    },
  
  });

const Conversation = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const conversation = useSelector((state) => state.conversations);
 
    const user = JSON.parse(localStorage.getItem('profile'));
    const userId = user?.result?._id;

    console.log('[CONVERSATION] conversation:', conversation);
    const [conversationData, setConversationData] = useState({ conversation_id: '', conversation_name: ''});

    useEffect(() => {
      if(conversationData.conversation_id !== 0 || conversationData.conversation_id.length !== 0 || conversationData.conversation_id !== undefined) {
        dispatch(getMessages(conversationData.conversation_id));
        dispatch(setConversationId({ conversation_id: conversationData.conversation_id, conversation_name: conversationData.conversation_name }));
        dispatch(setConversationWith(conversation.name));
      }

    },[conversationData]);

    //This useEffect will run only once for initial process of conversation-message db insertion.
   
    const [updatingFlag, setUpdatingFlag] = useState(0);

    socket.on('updateConversation', (data) => {
      console.log('[kamon-CONVERSATION] socket.on.updateMessage data:', data);
      setUpdatingFlag(data.updatingFlag);
    })

    useEffect(() => {
        dispatch(getConversation(userId));
    },[updatingFlag]);

    return(
           !conversation?.length ? <CircularProgress /> : (       
                  <Grid container className={classes.mainContainer} component={Paper} >
                    <Typography> INBOX </Typography> 
                        {conversation.map((conversation) => (
                          <Grid container item lg={12} md={12} sm={12}>
                                     
                               <MessageIcon/> 
                               <Link component="button" onClick={() =>setConversationData({conversation_id: conversation._id, conversation_name: conversation.name})}>
                               <Typography > {conversation.name}</Typography>
                              </Link>
                          </Grid> 

                        ))}            
                  </Grid>)
    );
};

export default Conversation;