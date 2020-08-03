import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    width: '30rem',
    height: '100%'
  },
  appPaper: {
    display: 'flex',
    flexDirection: 'column'
  },
  card: {
    '&:not(:last-child)': {
      marginBottom: '.5rem'
    }
  }
}));
