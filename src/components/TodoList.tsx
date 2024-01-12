import Task from './Task';
import { List, Typography } from '@mui/material';
import { useAppSelector } from '../store/store';
import { ITask } from '../store/taskSlice';

export default function TodoList() {
  const tasks = useAppSelector((state) => state.task.tasks);
  const tabState: string = useAppSelector((state) => state.stateTabs.state);

  const taskList = tasks.filter((task: ITask) => {
    const state: { [key: string]: boolean } = {
      all: true,
      active: !task.completed,
      completed: task.completed,
    };
    return state[tabState];
  });

  const getPalceholder = () => {
    const placeholder: { [key: string]: string } = {
      all: 'Task list is empty',
      active: 'The list of active tasks is empty',
      completed: 'The list of completed tasks is empty',
    };
    return placeholder[tabState];
  };

  return (
    <>
      {taskList.length > 0 ? (
        <List sx={{ py: 2 }}>
          {taskList.map((task) => (
            <Task task={task} key={task.id} />
          ))}
        </List>
      ) : (
        <Typography
          sx={{ py: 4, color: 'rgba(0, 0, 0, 0.6)', textAlign: 'center' }}>
          {getPalceholder()}
        </Typography>
      )}
    </>
  );
}
