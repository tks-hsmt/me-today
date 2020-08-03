import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    overflow: 'visible'
  },
  headerImage: {
    height: '2rem',
    width: '2rem'
  }
}));
