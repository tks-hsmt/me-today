import Paper from '@material-ui/core/Paper';
import { useStyles } from './styles';

type Props = {
  className?: string;
}

const AppPaper: React.FC<Props> = props => {
  const { children, className } = props;
  // スタイルの取得
  const classes = useStyles();

  return (
    <Paper className={`${classes.root} ${className}`}>
      {children}
    </Paper>
  )
}

export default AppPaper;