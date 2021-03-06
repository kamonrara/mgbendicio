import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../../actions/chat/message';
import { getConversation } from '../../actions/chat/conversation';
import Messages from './Messages.js';
import ReactScrollableFeed from 'react-scrollable-feed';
import { socket } from '../../service/socket';

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


const Message = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.messages);

    const conversation_data = useSelector((state) => state.conversation_data);

    const user = JSON.parse(localStorage.getItem('profile'));
    const userId = user?.result?._id;

    useEffect(() => {
        if(conversation_data.conversation_id !== undefined) {
            dispatch(getMessages(conversation_data.conversation_id));
        }

    },[]);

    const [typing, SetTyping] = useState();

    useEffect(() => {
            socket.on('typing-activated', data => {
            SetTyping(data);
            // console.log('[MESSAGE] socket.on.typing-activated-data: ', data);
            })
    },[typing])

    const [emitMessageRespond, setEmitMessageRespond] = useState(0);

    useEffect(() => {

        //the syntax below is one-time-run only, when user dont have conversation/message yet (he's newly registerred user) -->
        if(conversation_data.conversation_id === undefined) {
          dispatch(getConversation(userId));
      
        }
        // ------|

        //the syntax below is already has the conversation and just appending messages -->
        if(conversation_data.conversation_id !== undefined) {
          dispatch(getMessages(conversation_data.conversation_id));


          }
        // ------|

      socket.on('updateMessage', data => {
        console.log('[Message]: socket-on-updateMessage ', data);
        // console.log('[Message] Rendered: pleasepleasepleaseplease ', data, '\n','messages: ', messages);
        setEmitMessageRespond(data);
    });

    }, [emitMessageRespond])

    //30-05-->
    const [conversationData, setConversationData] = useState({ conversation_id: '', conversation_name: ''});

    useEffect(() => {

      // console.log('new useEffect: ', conversationData.conversation_id)

      if(conversationData.conversation_id !== '' || conversationData.conversation_id.length !== 0 || conversationData.conversation_id !== '') {
        dispatch(getMessages(conversationData.conversation_id));

        // dispatch(setConversationId({ conversation_id: conversationData.conversation_id, conversation_name: conversationData.conversation_name }));
        // dispatch(setConversationWith(conversation.name));

      }

    },[conversationData]);

    //30-05--|


    return(
        <>
          <Typography className={classes.Label}> 
            CONVERSATION WITH : &nbsp;&nbsp; 
    
            {!conversation_data?.conversation_with?.name?.length 
                ? conversation_data.conversation_name 
                : conversation_data?.conversation_with?.name
            }
            </Typography>
    
              <ReactScrollableFeed className={classes.scrollFeed}>
                    {messages.map((message) => (
                        <Grid key={message._id} container item xs={12} sm={12} md={12}>
                            <Messages message={message}/>
                        </Grid>
                    ))}          
              </ReactScrollableFeed>
      
          {/* {!messages?.length ? <CircularProgress /> : (
              <ReactScrollableFeed className={classes.scrollFeed}>
                    {messages.map((message) => (
                        <Grid key={message._id} container item xs={12} sm={12} md={12}>
                            <Messages message={message}/>
                        </Grid>
                    ))}          
                </ReactScrollableFeed>
          )} */}
        </>
    );
}

export default Message;