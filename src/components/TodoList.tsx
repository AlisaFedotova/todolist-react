import Task from './Task';
import { List, Typography } from '@mui/material';
import { useAppSelector } from '../store/store';
import { ITask } from '../store/taskSlice';

export default function TodoList() {
	const tasks = useAppSelector(state => state.task.tasks);
	const tabState: string = useAppSelector(state => state.stateTabs.state);

	const taskList = tasks.filter((task: ITask) => {
		const state: { [key: string]: boolean } = {
			"all": true,
			"active": !task.completed,
			"completed": task.completed,
		}
		return state[tabState];
	})

	return (
		<>
			{
				taskList.length > 0
					?
					<List sx={{ py: 2 }}>
						{taskList.map((task) => (
							<Task task={task} key={task.id} />
						))}
					</List>
					:
					<Typography
						sx={{ py: 4, color: 'rgba(0, 0, 0, 0.6)', textAlign: 'center' }}>
						Task list is empty
					</Typography>
			}
		</>
	);
} 