import * as React from 'react';
import { TextField, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function AddTaskField() {
	const [taskText, setTaskText] = React.useState('');

	return (
		<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
			<AddIcon onClick={() => { console.log(taskText); }} sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize="medium" />
			{/* //TODO: add click hendler 
          	*/}
			<TextField
				id="add-task"
				label="What needs to be done?"
				variant="standard"
				autoFocus={true}
				fullWidth={true}
				defaultValue={taskText}
				onChange={(e) => setTaskText(e.target.value)}
			/>
		</Box>
	);
}
