import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppPaper from '../../elements/paper';
import AppCard from '../../elements/card';
import { useStyles } from './styles';
import { TodayTask } from '../../../models/today';

type Props = {
  isFetching?: boolean;
  tasks: TodayTask[];
}

const TodayBox: React.FC<Props> = props => {
  const { isFetching, tasks } = props;
  const classes = useStyles();
  return (
    <Box display='flex' flexDirection='column' className={classes.root}>
      <Typography>Today Tasks</Typography>
      <AppPaper className={classes.appPaper}>
        {tasks.map(task => (
          <AppCard key={task.id} className={classes.card} title={task.title} subTitle='Content sub' headerImage='me-today_icon.png'></AppCard>
        ))}
      </AppPaper>
    </Box>
  )
}

export default TodayBox;