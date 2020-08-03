import { useEffect } from 'react';
import { useTodayStore } from '../../../store';
import TodayBox from '.';

const TodayBoxContainer: React.FC = () => {
  const { tasks, fetchAll } = useTodayStore();
  useEffect(() => {
    fetchAll().then(payload => console.log(payload)).catch(error => console.log(error));
  }, [fetchAll]);

  return <TodayBox tasks={tasks} />;
}

export default TodayBoxContainer;