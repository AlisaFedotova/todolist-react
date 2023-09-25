import * as React from 'react';
import Task from './Task';
import { List } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const taskList = [{ title: 'task1', completed: true, id: uuidv4() },{ title: 'task2', completed: false, id: uuidv4() }];

export default function TodoList() {
	const [tasks, setTasks] = React.useState(taskList);
	return (
		<List sx={{ py: 2 }}>
			<Task task={tasks[0]} />
			<Task task={tasks[1]} />
		</List>
	);
}