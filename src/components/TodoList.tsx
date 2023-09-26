import * as React from 'react';
import Task from './Task';
import { List, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const taskList = [{ title: 'Make a test project', completed: true, id: uuidv4() },
{ title: 'Cover with unit tests', completed: false, id: uuidv4() },
{ title: 'Create a Readme file with project description', completed: false, id: uuidv4() },
{ title: 'Host project on Github Pages site', completed: true, id: uuidv4() }];

export default function TodoList() {
	const [tasks, setTasks] = React.useState(taskList);
	return (
		<>
			{
				tasks?.length > 0
					? (
						<List sx={{ py: 2 }}>
							{tasks.map((task) => (
								<Task task={task} />
							))}
						</List>
					) :
					<Typography
						sx={{ py: 4, color: 'rgba(0, 0, 0, 0.6)', textAlign: 'center' }}>
						Task list is empty
					</Typography>
			}
		</>
	);
}