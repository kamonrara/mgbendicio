import { Grid, Grow, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Conversation from './Conversation';
import Message from './Message';
import { getConversation } from '../../actions/chat/conversation';
import UserList from './../User/UserList';
import Input from './Input';

const useStyles = makeStyles({

  messageBody: {
    padding: 10,
  },
  controller: {
    padding: 10,
  },
 
  messageTextfield : {
    margin: '22px 11px 11px 11px'
  },
  messagePaper : {
    paddingTop: 30
  },
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  padding: {
    padding: '9px 9px 9px 9px'
  }

});
    
const Chat = () => {

    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const userId = user?.result?._id;

    const dispatch = useDispatch();

    const conversation = useSelector((state) => state.conversations);

    useEffect(() => {
        dispatch(getConversation(userId));
    },[]);

  return (
    <Grow in>
    <Container>
        <Grid className={classes.container} container>
           <Grid item xs={12} sm={12} md={12} lg={4} className={classes.padding} elevation={12} >
                <UserList/>
           </Grid>

           <Grid item xs={12} sm={12} md={12} lg={4}  className={classes.padding} elevation={12} >
                <Conversation /> 
           </Grid>

           <Grid item xs={12} sm={12} md={12} lg={4} className={classes.controller} component={Paper} elevation={12} >
 
                {conversation !== null ? <Message /> : null}
                <Input />
            </Grid>
          </Grid>
      </Container>
      </Grow>
  );
}

export default Chat;