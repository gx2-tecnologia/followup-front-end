import { makeStyles } from '@material-ui/core/styles';
// import { drawerWidth } from 'params/params';
import { primary, clean } from 'params/colors';

export const useStylesAppbar = makeStyles(theme => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - 240px)`,
      marginLeft: 240,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: primary,
  },
  actions: {
    color: clean,
  },
}));
