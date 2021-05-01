import React, { useEffect, useState } from 'react';
import { CircularProgress, Grid, Paper, Typography, Link } from '@material-ui/core';
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
      backgroundColor: '#fda01d',
   
      padding: '11px 11px 11px 11px'
    },
    userLink: {
        display: 'flex'
    },
    Label: {
        display: 'flex',
        fontWeight: 'bold'
    }

  });


const UserList = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const userlist = useSelector((state) => state.users)
    const conversation_data = useSelector(state => state.conversation_data)

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

    return (        
        !userlist?.length ? <CircularProgress /> : (                        
                    <Grid container className={classes.mainContainer} component={Paper} >
                        <Typography className={classes.Label}>List of users</Typography> 
                        {userlist.map((user) => (
                            <Link  className={classes.userLink} component="button"  onClick={() => setParticipants({name: user.firstname, id: user._id})}>
                               <Typography > { user.firstname }  </Typography>                     
                            </Link>                    
                        ))}            
                    </Grid>              
            )
    );
}

export default UserList