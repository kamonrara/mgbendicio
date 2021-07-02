import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Box, Paper } from '@material-ui/core';
import { createMessage } from '../../actions/chat/message';
import { createConversationAndMessage } from '../../actions/chat/conversation';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';

let socket = io('localhost:5555');

const useStyles = makeStyles({

    Box: {
      display: 'flex',
      justifyContent: 'space-around',
      margin: '3px 3px 3px 3px',
    },
    
    messageTextfield : {
      display: 'flex',
      margin: '22px 11px 11px 11px'
  },
    sendButton : {
      display: 'flex',
      margin: '3px 3px 3px 3px',
      fontFamily: 'Segoe UI',

    },


  });

const Input = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const userId = user?.result?._id;
    const conversation_data = useSelector((state) => state.conversation_data);
    const [messsageData, setMessageData] = useState({ owner: '', conversationId : '', content: ''});
    const [keyPressCount, setKeyPressCount] = useState(0);
    
    //TODO: change this code into const var, useState no need
     const [conAndMsgData] = useState({
      conversation:{
        participants: [], name: '', lastMessageId: 333
      },
      messages: {
        owner: '', conversationId : '', content: ''
      }
     })
    //  console.log('[Input] Rendered: ',conversation_data);
     const [myMessage, setMyMessage] = useState('');
     const conversationId = conversation_data?.conversation_id; 

     const clear = () => {
      setMyMessage('');
     }
  
    const handleMessage = async message => {
        if(conversation_data.conversation_with === undefined) {
          setMessageData({ ...messsageData, content: message })     
          setMyMessage(prev => message);
          // console.log('myMessagemyMessagemyMessage ', myMessage);
        } else {
          setMyMessage(message);
      
        }
      };

      const handleSubmit =  (e) => {
        e.preventDefault();
        clear();

       //db entry: message only 
       if(conversation_data?.conversation_with === undefined) {

          dispatch(createMessage({...messsageData, owner: userId, conversationId: conversation_data?.conversation_id}));
       
           socket.emit('sendMessage', { type: 'message' }, () => {
                  // console.log('[CHAT]: socket.io. emit/sendMessage');
            });


       //db entry: conversation and message are created <his/her first message sent>   
       } else if (conversation_data?.conversation_with !== undefined) {

         dispatch(createConversationAndMessage(
           {...conAndMsgData,  

              conversation: {
                participants: [userId, conversation_data?.conversation_with?.id], 
                name: `${conversation_data?.conversation_with?.name}`
              },
              messages: {
                  owner: userId,
                  content: myMessage
              } 
           }
          
          ));

            // create logic: add send_message_type: there are 2 types:
            // 1: update conversation and message 
            // 2: message only
           socket.emit('sendMessage', {type: 'conversation-message'});

       } else {
         console.log('[CHAT]: do nothing...')
       }

  };


    const handleKeyPress = () => {

      //when user is typing store the number of keypress in let as counter and use that let on logics ahead
      //avoid the enter key here
       setKeyPressCount(prev => prev + 1);

      // console.log('[INPUT] handleKeyPress: ', keyPressCount);

      socket.emit('typing', { userId: userId, conversationId: conversationId });

      socket.on('typing-activated', data => {
        // console.log('server response: ', data);
      })
    }

    return (
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <Box className={classes.Box} component={Paper}>
              <TextField 
                    className={classes.messageTextfield} 
                    name="message"
                    variant="outlined" 
                    label="Send Message..."
                    fullWidth multiline rows={2} 
                    onChange={(e) => handleMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    value={myMessage}
                />
                <Button type="submit" className={classes.sendButton} color="primary" variant="contained"> Send </Button>
              </Box>

            </form>
    )
};

export default Input;