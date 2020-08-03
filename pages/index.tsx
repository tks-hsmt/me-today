import Layout from '../components/layout';
import AppPaper from '../components/elements/paper';
import Box from '@material-ui/core/Box';
import AppCard from '../components/elements/card';
import { useStyles } from './styles';
import TrelloBox from '../components/blocks/trello-box';
import TodayBox from '../components/blocks/today-box';

export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <Box display='flex' className={classes.root}>
        <Box mr={2}>
          <TodayBox />
        </Box>
        <Box mr={1}>
          <TrelloBox />
        </Box>
      </Box>
    </Layout>
  )
}
