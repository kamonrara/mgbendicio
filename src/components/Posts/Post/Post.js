import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';


// import io from 'socket.io-client';
// let socket;
// const ENDPOINT = 'localhost:5555';

const Post = ({ post, setCurrentId }) => {

  // message debugger...
  // console.log('[POST] ', post);

  //THIS SELECTOR WILL FIND THE UPDATED POST AND RE-RENDER THE UPDATED DATA..
  //const updatedPost = useSelector((state) => (state.posts.find((post) => post._id === post._id)));

  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  //socket = io(ENDPOINT);
  const [like, setLike] = useState(false);
  const [likes, setLikes] = useState(post?.likes);


  // useEffect(() => {
  //     console.log(
  //       '-[POST] 1ST useEffect ','\n',
  //       'likes: ', post.likes.length,'\n',
  //       'title', post.title
  //       );

  // },[post]);


  // useEffect(() => {

  //   console.log(
  //     '-[POST] 2ND useEffect ','\n',
  //     'likes: ', post.likes.length,'\n',
  //     'title:', post.title
  //     );

  //     socket.on('updateLike', () => {
  //     console.log('-[POST] ',
  //     '2ND  useEffect when like is clicked => received => dataFrom => server => io.emit.');
  //     setLike(true);
   
  //   });
  // }, []); 

  const userId = user?.result.googleId || user?.result?._id
  const hasLikedPost = post.likes.find((like) => like === userId);

  const handleLikesEvent = async () => {
         dispatch(likePost(post._id));

          //did the current user like the post or not.
         if (hasLikedPost) {
          setLikes(post.likes.filter((id) => id !== userId));

         } else {
            setLikes([ ...post.likes, userId]);
         }
  }

  const Likes = () => { 

      if (likes.length > 0) {
        return likes.find((like) => like === userId)
          ? (
            <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
          ) : (
            <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
          );
      }    

      return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;    
  };

  const openPost = () => history.push(`/posts/${post._id}`);

  return (
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase
       component="span"
       className={classes.cardAction} 
       onClick={openPost}
       >
          <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
          <div className={classes.overlay}>
            <Typography variant="h6">{post.owner}</Typography>
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
          </div>
          {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          <div className={classes.overlay2}>
            <Button onClick={() => setCurrentId(post._id)} style={{ color: 'white' }} size="small">
              <MoreHorizIcon fontSize="default" />
            </Button>
          </div>
          )}
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
          </div>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
          </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        {/* <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}> */}
        <Button size="small" color="primary" disabled={!user?.result} onClick={handleLikesEvent}>

          <Likes /> 
        </Button>
        {/* {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && ( */}
        {(user?.result?._id !== undefined && user?.result?._id === post?.creator) && (
        <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
