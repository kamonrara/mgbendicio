import React, { useEffect, useState } from 'react';
import { CircularProgress, Grid, Paper, Typography, Link, Button } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { getUsers } from '../../actions/users';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { setConversationWith, resetConversationData } from '../../actions/chat/conversation'
import {  resetMessages } from '../../actions/chat/message'

const useStyles = makeStyles({
    mainContainer: {
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
      backgroundColor: '#FFFFFF',
      padding: '11px 11px 11px 11px'
    },
    userLink: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '3px 3px 3px 3px',
        height: '33px'
    },
    Label: {
        display: 'flex',
        fontWeight: 'bold',
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


const UserList = () => {

    const dispatch = useDispatch();
    const classes = useStyles();
    const userlist = useSelector((state) => state.users);
    const user = JSON.parse(localStorage.getItem('profile'));
    const currentUser =  user?.result.firstname;

    useEffect(() => {
        dispatch(getUsers());
    },[]);

    const [participants, setParticipants] = useState({ name: '', id: ''});
    
     useEffect(() => {
         if(participants.length !== 0 || participants !== undefined) {
            //REDUX: Reset the conversation_data when clicking on userlist
            //this reset must go 1st.
            //TODO/TOASK: refactor => w/c is more optimized. reset the whole objects or modify/set the specific props/field *Performance
            dispatch(resetConversationData());
            dispatch(setConversationWith(participants));
            dispatch(resetMessages());
           //todo: check if the participants has conversation if null reset the message component into new OR =>
           //optimize userList => show only the user that has no conversation at all to current user logged in
         }

     },[participants])

    //remove the current user before returning into jsx
     let userListReturn = userlist.filter((user) => user.firstname !== currentUser);




    return (        
        !userListReturn?.length ? <CircularProgress /> : (                        
                    <Grid container className={classes.mainContainer} component={Paper} >
                        <Typography className={classes.Label}>USER LIST</Typography> 
                        {userListReturn.map((user) => (
                                <Link key={user._id} className={classes.userLink} component={Paper} elevation={9} onClick={() => setParticipants({name: user.firstname, id: user._id})}>
                                <Button className={classes.UserContent}> { user.firstname }  </Button>  
                                    <Button style={{ color: 'black' }} size="small">
                                        <MoreHorizIcon fontSize="default" />
                                    </Button>       
                                </Link>       
                            ))}         
                    </Grid>              
            )
    );
}

export default UserList