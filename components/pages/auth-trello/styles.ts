import { makeStyles, withStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    maxHeight: '100%'
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  input: {
    '& .MuiTextField-root': {
      width: '25rem',
    },
  }
}));
