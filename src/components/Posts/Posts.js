import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {

  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  console.log('[POSTS] useSelector posts: ', posts);


  // useEffect(() => {
  //   console.log('-[POSTS] useEffect posts: ', posts);
  //   console.log('-[POSTS] useEffect conversations: ', temp);
  // },[posts])


  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );


};

export default Posts;
