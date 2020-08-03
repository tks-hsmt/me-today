import { useEffect } from 'react';
import { useTrelloStore } from '../../../store';
import TrelloBox from '.';

const TrelloBoxContainer: React.FC = () => {
  const { tasks, fetchAll } = useTrelloStore();
  useEffect(() => {
    fetchAll().then(payload => console.log(payload)).catch(error => console.log(error));
  }, [fetchAll]);

  return <TrelloBox tasks={tasks} />;
}

export default TrelloBoxContainer;