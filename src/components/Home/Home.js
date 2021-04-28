
import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.down('md')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
    }
  },


}));

const Home = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());


  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid container className={classes.mainContainer} justify= "space-between" alignItems= "stretch"  >
          <Grid item xs={12} sm={12} md={12} lg={7} >
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} >
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );

};

export default Home;
