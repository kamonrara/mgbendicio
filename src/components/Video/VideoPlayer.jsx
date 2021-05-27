import React, { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';
import { SocketContext } from '../../context/Context.js';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  },
}));

const VideoPlayer = () => {

  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();


  const user = JSON.parse(localStorage.getItem('profile'));

  console.log('[VIDEOPLAYER] stream', stream)

  console.log('[VIDEOPLAYER] PARAMS: ','\n',
  'call.stream: ',stream,'\n',
  'callAccepted: ', callAccepted,'\n',
  'callEnded: ', callEnded,'\n',
  '------------[VIDEOPLAYER]'
  )

  return (
    <Grid container className={classes.gridContainer}>
      {/* owner vid */}
      {stream  && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}

      {/* conversation with vid */}
      {callAccepted && !callEnded && (
        <Paper>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
            <video playsInline ref={userVideo} autoPlay className={classes.video} />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
