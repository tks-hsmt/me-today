import AppPaper from '../../elements/paper';
import AppCard from '../../elements/card';
import Typography from '@material-ui/core/Typography';

export default function TrelloBox({ ...props }) {
  return (
    <>
      <Typography>Trello Tasks</Typography>
      <AppPaper>
        <AppCard title='Content' subTitle='Content sub' headerImage='trello-mark-blue.png'></AppCard>
      </AppPaper>
    </>
  )
}