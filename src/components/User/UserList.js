import React, { useEffect, useState } from 'react';
import { Button, CircularProgress, Grid, Paper, Typography } from '@material-ui/core';
import { getUsers } from '../../actions/users';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { setConversationWith } from '../../actions/chat/conversation'
import {  resetMessages } from '../../actions/chat/message'

const useStyles = makeStyles({
    mainContainer: {
     // height: '53vh',
      overflowY: 'auto',
      backgroundColor: '#fda01d',
      align: 'left'
    },
  
  });


const UserList = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const userlist = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(getUsers());
    },[]);

    const [participants, setParticipants] = useState({ name: '', id: ''});
    console.log('[USERLIST] participants: ', participants);
    console.log('[USERLIST] userlist: ', userlist);

     useEffect(() => {
         if(participants.length !== 0 || participants !== undefined) {
            dispatch(setConversationWith(participants));
            dispatch(resetMessages());
           //todo: check if the participants has conversation if null reset the message component into new OR =>
           //optimize userList => show only the user that has no conversation at all to current user logged in
         }

     },[participants])

    return (
         
        !userlist?.length ? <CircularProgress /> : (                        
                    <Grid container className={classes.mainContainer} component={Paper} >
                        
                        <Typography> USER LIST  </Typography> 
                        {userlist.map((user) => (
                         <Grid item lg={12} md={12} sm={12}>
                            <Button  variant="contained" color="primary" fullWidth onClick={() => setParticipants({name: user.firstname, id: user._id})}>
                               <Typography> {user.firstname}  </Typography>                     
                            </Button>  
                         </Grid>
                        ))}            
                    </Grid>              
            )
    );
}

export default UserList