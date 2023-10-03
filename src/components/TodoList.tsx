import Task from './Task';
import { List, Typography } from '@mui/material';
import { useAppSelector } from '../store/store';

export default function TodoList() {
	const tasks = useAppSelector(state => state.task.tasks);

	return (
		<>
			{
				tasks.length > 0
					?
					<List sx={{ py: 2 }}>
						{tasks.map((task) => (
							<Task task={task} />
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