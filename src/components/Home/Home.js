
import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
//import Chat from '../Chat/Chat';

const Home = () => {
  
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  console.log('[HOME]: I will return the [POSTS] and [FORM] as jsx');
  console.log('-[HOME]: useState | setCurrentId: ', currentId);

  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());

    console.log('[HOME]: useEffect | getPosts/fetchAPI | setCurrentId: ', currentId);
  }, [currentId, dispatch]);



  return (
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={0}>
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );

};

export default Home;
