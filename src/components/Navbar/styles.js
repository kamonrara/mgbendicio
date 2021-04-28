import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({

  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  leftDiv: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '33px'
  },

  rightDiv: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: '33px'
  },

  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
    fontSize: '16px'
  },
  image: {
    marginLeft: '15px',
  },

  profile: {
    display: 'flex',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    padding : '11px 11px 11px 11px'
  },

  avatar: {
    padding : '11px 11px 11px 11px',
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },

}));
