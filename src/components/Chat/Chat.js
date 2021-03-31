import { Grid, Grow, Container, Paper, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Conversation from './Conversation';
import Message from './Message';
import { getConversation } from '../../actions/chat/conversation';
import { createMessage } from '../../actions/chat/message';
import { createConversationAndMessage } from '../../actions/chat/conversation';
import io from 'socket.io-client';
import UserList from './../User/UserList';

let socket;
const ENDPOINT = 'localhost:5555';
socket = io(ENDPOINT);

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

  sendButton : {
    // margin: 0,
    // top: 'auto',
    // right: 20,
    // bottom: 20,
    // left: 'auto',
    // position: 'fixed',

    display: 'flex',
    justifyContent: 'flex-end',
  },
  messageBody: {
    padding: 10,
    height: 666,
  
  },
  userList: {
    padding: 10,
    height: 666,
    alignItems: 'right'
  },
  messageTextfield : {

    paddingBottom: 10
  },
  messagePaper : {
    paddingTop: 30
  }

});
    

const Chat = () => {

    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const userId = user?.result?._id;

    const dispatch = useDispatch();

    //socket = io(ENDPOINT);

    const conversation = useSelector((state) => state.conversations);
    const conversation_data = useSelector((state) => state.conversation_data);

    const [messsageData, setMessageData] = useState({ owner: '', conversationId : '', content: ''});

      //TODO: change this code into const var, useState no need
     const [conAndMsgData, setConAndMsgData] = useState({
      conversation:{
        participants: [], name: '', lastMessageId: 333
      },
      messages: {
        owner: '', conversationId : '', content: ''
      }
     })

     const [myMessage, setMyMessage] = useState('');

    console.log('[CHAT] conversation/participants: ', conversation);
    useEffect(() => {
        dispatch(getConversation(userId));
    },[]);

    const handleSubmit = async (e) => {
          e.preventDefault();

         if(conversation_data?.conversation_with === undefined) {

            dispatch(createMessage({...messsageData, owner: userId, conversationId: conversation_data?.conversation_id}));

            await socket.emit('sendMessage', { conversationId: conversation_data.conversation_id }, () => {
                    console.log('[CHAT]: socket.io. emit/sendMessage');
              });

         } else if (conversation_data?.conversation_with !== undefined) {

           dispatch(createConversationAndMessage(
             {...conAndMsgData,  

                conversation: {
                  participants: [userId, conversation_data?.conversation_with?._id], 
                  name: `${user?.result?.firstname} / ${conversation_data?.conversation_with?.name}`
                },
                messages: {
                    owner: userId,
                    content: myMessage
                } 
             }
            
            ));

         } else {
           console.log('[CHAT]: do nothing...')
         }

    };




    const handleMessage = (message) => {
      if(conversation_data.conversation_with === undefined) {
    
        setMessageData({ ...messsageData, content: message })
        console.log('messsageData: ', messsageData);

      } else {
        setMyMessage(message);
      }

    }

  return (
    <Grow in>
    <Container>
        <Grid container justify="space-between" alignItems="stretch" >
           <Grid item xs={3} sm={3} md={3} lg={3}  component={Paper} className={classes.messageBody} >
                <UserList/>
           </Grid>
           <Grid item xs={3} sm={3} md={3} lg={3}  component={Paper} className={classes.userList} >
                <Conversation /> 
           </Grid>
           <Grid item xs={6} sm={6} md={6} lg={6} component={Paper} className={classes.messageBody}>
             {conversation !== null ? <Message /> : null}
           
               {/* TODO:: refactor => seperate this code and set as a component => Input.js component*/}
                 <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                   <TextField 
                       className={classes.messageTextfield} 
                       name="message"
                       variant="outlined" 
                       label="Message"
                       fullWidth multiline rows={2} 
                       onChange={(e) => handleMessage(e.target.value)} 
                      //  onChange={(e) => setMessageData({ ...messsageData, content: e.target.value })} 
                   />

                   <Button type="submit" className={classes.sendButton} color="primary" variant="contained"> Send </Button>
                 </form>
 
                </Grid>
              </Grid>
          </Container>
      </Grow>
  );
}

export default Chat;