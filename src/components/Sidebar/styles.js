import { makeStyles } from '@material-ui/core/styles';
// import { drawerWidth } from 'params/params';
import { primary } from 'params/colors';

export const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 240,
      flexShrink: 0,
    },
  },
  toolbar: {
    height: 64,
    backgroundColor: primary,
    display: 'flex',
    justifyContent: 'center',
  },
  drawerPaper: {
    width: 240,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
