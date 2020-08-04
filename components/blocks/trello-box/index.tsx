import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import AppPaper from '../../elements/paper';
import AppCard from '../../elements/card';
import { TrelloTask } from '../../../models';
import { useStyles } from './styles';

type Props = {
  isFetching?: boolean;
  isAuthorized?: boolean;
  tasks: TrelloTask[];
}

const TrelloBox: React.FC<Props> = props => {
  const { isFetching, isAuthorized, tasks } = props;
  const classes = useStyles();
  return (
    <Box display='flex' flexDirection='column' className={classes.root}>
      <Typography>Trello Tasks</Typography>
      <AppPaper className={classes.appPaper}>
        {isAuthorized && tasks.map(task => (
          <AppCard key={task.id} className={classes.card} title={task.name} subTitle={task.due} headerImage='trello-mark-blue.png'>
            <Link href={task.url} target='_blank' rel='noopener' color='inherit'>Trelloで開く</Link>
          </AppCard>
        ))}
        {!isAuthorized && <Button component={Link} href='/auth-trello'>Trello connection</Button>}
      </AppPaper>
    </Box>
  )
}

export default TrelloBox;