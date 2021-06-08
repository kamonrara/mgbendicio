import { CircularProgress, Link, Grid, Paper, Typography } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../../actions/chat/message';
import { getConversation } from '../../actions/chat/conversation';
import { setConversationId, setConversationWith } from '../../actions/chat/conversation';
import MessageIcon from '@material-ui/icons/Message';
import { socket } from '../../service/socket';


const useStyles = makeStyles({

    mainContainer: {
      overflowY: 'auto',
      backgroundColor: '#FFFFFF',
      padding: '11px 11px 11px 11px'
    },
    purple: {
      backgroundColor: deepPurple[500],
    },
    Label: {
      fontWeight: 'bold',
      display: 'flex',
      fontFamily: 'Segoe UI',
      paddingBottom: '9px'

    },
    UserContent: {
      display: 'flex',
      fontWeight: 'bold',
      fontFamily: 'Segoe UI',
      paddingLeft: '9px'
  },
  
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
        dispatch(getMessages(conversationData.conversation_id));

        dispatch(setConversationId({ conversation_id: conversationData.conversation_id, conversation_name: conversationData.conversation_name }));
        dispatch(setConversationWith(conversation.name));

      }

    },[conversationData]);

         let fuck =  conversation[conversation.length - 1] // get the latest generated ID
         let fucking = `"${JSON.stringify(fuck)}"`;
         let awts = fucking.split(',');

         { awts.map((d) => {
          // console.log('withQoute: ', d)
           let removeQoute = d.replace(/['"]+/g, '')
          //  console.log('removeQoute: ', removeQoute)

            if(removeQoute.includes('_id') === true) {
           
              let finalResult = removeQoute.split("_id:").pop();
              // console.log('create a logic that will handle this: ', conversation_data.conversation_with );
             
              // if conversation_data.conversation_with !== undefined
              if(conversation_data.conversation_with !== undefined) {
                // dispatch(getMessages(finalResult));
         
              }
    
            }
        })}

        /////

      ///


    const [updatingFlag, setUpdatingFlag] = useState(0);

    useEffect(() => {

        // console.log('Conversation useEffect');

        if(updatingFlag !== 0) {
            socket.on('updateMessage', (data) => {
              console.log('[CONVERSATION] : socket.on.updateMessage', data);
              setUpdatingFlag(data.updatingFlag);
            });
        
            socket.on('updateConversation', (data) => {
              console.log('Conversation useEffect updateConversation-data: ', data);
              setUpdatingFlag(data.updatingFlag);
            });

        }
        dispatch(getConversation(userId));

        console.log('[CONVERSATION]-->')
        socket.on('updateMessage', (data) => {
          console.log('[CONVERSATION] : socket.on.updateMessage', data);
          setUpdatingFlag(data.updatingFlag);
        });
        console.log('[CONVERSATION]--|')

        if(conversationData.conversation_id !== '') {
          dispatch(getMessages(conversationData.conversation_id));
        }
  
    },[updatingFlag]);

    const handleClick = data => {

      //add event here auto click when conversation
      if(conversationId !== 0 || conversationId.length !== 0 || conversationId !== undefined) {
        setConversationData({...conversationData, ...data});

      }
    }

    const inputRef = useRef(null)

    useEffect(() => {
        //add validation here so it will nto always click, just click when the inbox is belongs to him/her
      if(inputRef.current !== null){
        inputRef.current.click();
        console.log('inputRef invoked click(): ', inputRef.current)
      }
       
    }, [conversation])
    

    return(
           !conversation?.length ? <CircularProgress /> : (       
                  <Grid container className={classes.mainContainer} component={Paper} >
                    <Typography className={classes.Label}> INBOX </Typography> 
                        {conversation.map((conversation) => (
                          <Grid key={conversation._id} container item lg={12} md={12} sm={12}>
                               <MessageIcon/> 
                               <Link  ref={inputRef} key={conversation.conversation_id} component="button" onClick={() => handleClick({conversation_id: conversation._id, conversation_name: conversation.name})}>                              
                                <Typography className={classes.UserContent}>{conversation.name}</Typography>
                              </Link>
                          </Grid> 

                        ))}            
                  </Grid>)
    );
};

export default Conversation;