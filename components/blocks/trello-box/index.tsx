import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppPaper from '../../elements/paper';
import AppCard from '../../elements/card';
import { TrelloTask } from '../../../models';
import { useStyles } from './styles';

type Props = {
  isFetching?: boolean;
  tasks: TrelloTask[];
}

const TrelloBox: React.FC<Props> = props => {
  const { isFetching, tasks } = props;
  const classes = useStyles();
  return (
    <Box display='flex' flexDirection='column' className={classes.root}>
      <Typography>Trello Tasks</Typography>
      <AppPaper className={classes.appPaper}>
        {tasks.map(task => (
          <AppCard className={classes.card} title={task.title} subTitle='Content sub' headerImage='trello-mark-blue.png'></AppCard>
        ))}
      </AppPaper>
    </Box>
  )
}

export default TrelloBox;