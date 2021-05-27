import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({

  appBar: {
   
    borderRadius: 33,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  rightDiv: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: '3em',
    fontWeight: 'bold'
  },

  leftDiv: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '33px'
  },

  heading: {
    color: 'rgba(0,183,255, 1)',
    fontFamily: 'Segoe UI',
    textDecoration: 'none',
    fontSize: '18px'
  },
  image: {
    marginLeft: '15px',
  },

  profile: {
    display: 'flex',
  },
  userName: {
    display: 'flex',
    fontFamily: 'Segoe UI',
    alignItems: 'center',
    padding : '11px 11px 11px 11px'
  },

  avatar: {
    padding : '11px 11px 11px 11px',
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },

}));
