import Box from '@material-ui/core/Box';
import { useStyles } from './styles';
import Layout from '../../layout';
import TrelloBoxContainer from '../../blocks/trello-box/container';
import TodayBoxContainer from '../../blocks/today-box/container';

export const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Box display='flex' className={classes.root}>
        <Box display='flex' mr={2}>
          <TodayBoxContainer />
        </Box>
        <Box display='flex'>
          <TrelloBoxContainer />
        </Box>
      </Box>
    </Layout>
  )
}

export * from './container';
