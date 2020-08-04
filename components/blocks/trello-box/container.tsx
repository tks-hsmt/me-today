import { useEffect } from 'react';
import { useTrelloStore } from '../../../store';
import TrelloBox from '.';

const TrelloBoxContainer: React.FC = () => {
  const { tasks, init, fetchAll, isAuthorized } = useTrelloStore();
  useEffect(() => {
    if (!isAuthorized) {
      init();
      return;
    }
    fetchAll().then(payload => console.log(payload)).catch(error => console.log(error));
  }, [fetchAll, isAuthorized]);

  return <TrelloBox tasks={tasks} isAuthorized={isAuthorized} />;
}

export default TrelloBoxContainer;