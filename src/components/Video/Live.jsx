
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import VideoPlayer from '../Video/VideoPlayer';
import Notifications from '../Video/Notifications';
import Sidebar from '../Video/Sidebar';

const useStyles = makeStyles((theme) => ({
    appBar: {
      borderRadius: 15,
      margin: '30px 100px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '600px',
      border: '2px solid black',
  
      [theme.breakpoints.down('xs')]: {
        width: '90%',
      },
    },
    image: {
      marginLeft: '15px',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
  }));

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Live = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const query = useQuery();
  const user = JSON.parse(localStorage.getItem('profile'));

  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);

  console.log('[HOME] user?.result?._id: ', user?.result?._id)
 
  return (

    <div className={classes.wrapper}>
          {user !== undefined ? (
            <>
                <VideoPlayer />
                <Sidebar>
                    <Notifications />
                </Sidebar>
            </>
          ) : (
                <>
                    FORBIDDEN
                </>
          )}
    </ div>


  );
};

export default Live;
