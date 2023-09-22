import Task from './Task';
import { List } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const task1 = { title: 'task1', completed: true, id: uuidv4() };
const task2 = { title: 'task2', completed: false, id: uuidv4() };

export default function TodoList() {
	return (
		<List sx={{ py: 2 }}>
			<Task task={task1} />
			<Task task={task2} />
		</List>
	);
}