import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Paper, Grid, Typography, Container, Grow } from '@material-ui/core';
import { updateUser } from '../../actions/users';
import useStyles from './styles';
import Input from './Input';

const initialState = { firstname: '', lastname: '', email: '' };

const Profile = () => {
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));

    const currentUserId = user?.result?._id;
    const email = user?.result?.email;
    const firstname = user?.result?.firstname;
    const lastname = user?.result?.lastname;

    console.log('[PROFILE] currentUserId: ', currentUserId);
    console.log('[PROFILE] handleSubmit/localStorage-email: ', email);
    console.log('[PROFILE] handleSubmit/localStorage-firstname: ', firstname);
    console.log('[PROFILE] handleSubmit/localStorage-lastname: ', lastname);
  
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // dispatch(updateUser(currentUserId, {...form, firstName: user?.result?.firstname}));
        dispatch(updateUser(currentUserId, form));
    }

    return(
      <Grow in>    
        <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>

          <Typography component="h1" variant="h5"> Update Profile </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>      
              <Input name="firstname" label="Firstname"  value={firstname} onChange={handleChange}  half />
              <Input name="lastname" label="Lastname" value={lastname}  onChange={handleChange} half />                    
              <Input name="email" label="Email Address" value={email}  onChange={handleChange} type="email" />

            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              UPDATE
            </Button>
          </form>
        </Paper>
      </Container>
      </Grow>
    );
};

export default Profile;