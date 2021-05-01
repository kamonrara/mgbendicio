import { CircularProgress, Link, Grid, Paper, Typography } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../../actions/chat/message';
import { getConversation } from '../../actions/chat/conversation';
import { setConversationId, setConversationWith } from '../../actions/chat/conversation';
import io from 'socket.io-client';
import MessageIcon from '@material-ui/icons/Message';

let socket = io('localhost:5555');

const useStyles = makeStyles({

    mainContainer: {
      overflowY: 'auto',
      backgroundColor: '#fda01d'
    },
    purple: {
      backgroundColor: deepPurple[500],
    },
    Label: {
      fontWeight: 'bold',
      display: 'flex',

    }
  
  });

const Conversation = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const conversation = useSelector((state) => state.conversations);
    const conversation_data = useSelector((state) => state.conversation_data);
    const user = JSON.parse(localStorage.getItem('profile'));
    const userId = user?.result?._id;
    const conversationId = conversation_data?.conversation_id; 
    const [conversationData, setConversationData] = useState({ conversation_id: '', conversation_name: ''});

    useEffect(() => {
      if(conversationData.conversation_id !== '' || conversationData.conversation_id.length !== 0 || conversationData.conversation_id !== '') {
        
        // console.log('VALIDATION CHECKER','\n',
        // '1st: ', conversationData.conversation_id, '\n',
        // '2nd: ', conversationData.conversation_id.length, '\n',
        // '3rd: ', conversationData.conversation_id
        // )
       
        console.log('[25]check this value before loading on getMessages(this): ', conversationData.conversation_id);
        dispatch(getMessages(conversationData.conversation_id));
        dispatch(setConversationId({ conversation_id: conversationData.conversation_id, conversation_name: conversationData.conversation_name }));
        dispatch(setConversationWith(conversation.name));

      }

    },[conversationData]);


    const [updatingFlag, setUpdatingFlag] = useState(0);
 
    useEffect(() => {

        if(updatingFlag !== 0) {
            socket.on('updateMessage', (data) => {
              setUpdatingFlag(data.updatingFlag);
            });
        
            socket.on('updateConversation', (data) => {
              setUpdatingFlag(data.updatingFlag);
            });

        }


        dispatch(getConversation(userId));

        if(conversationData.conversation_id !== '') {
          dispatch(getMessages(conversationData.conversation_id));
        }
  
    },[updatingFlag]);

    const handleClick = data => {
      if(conversationId !== 0 || conversationId.length !== 0 || conversationId !== undefined) {
        setConversationData({...conversationData, ...data});

      }

    }

    return(
           !conversation?.length ? <CircularProgress /> : (       
                  <Grid container className={classes.mainContainer} component={Paper} >
                    <Typography className={classes.Label}> My Inbox </Typography> 
                        {conversation.map((conversation) => (
                          <Grid key={conversation._id} container item lg={12} md={12} sm={12}>
                                     
                               <MessageIcon/> 
                               {/* <Link component="button" onClick={() => setConversationData({conversation_id: conversation._id, conversation_name: conversation.name})}> */}
                               <Link  key={conversation.conversation_id} component="button" onClick={() => handleClick({conversation_id: conversation._id, conversation_name: conversation.name})}>                              
                               <Typography>{conversation.name}</Typography>
                              </Link>
                          </Grid> 

                        ))}            
                  </Grid>)
    );
};

export default Conversation;