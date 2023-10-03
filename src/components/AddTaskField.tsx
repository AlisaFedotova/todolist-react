import * as React from 'react';
import { TextField, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch } from '../store/store';
import { addTask } from '../store/taskSlice';

export default function AddTaskField() {
	const title = React.useRef<string>('');
	const dispatch = useAppDispatch();
	const [fieldValue, setfieldValue] = React.useState('');
	const dispatchTask = () => {
		dispatch(addTask({ title: title.current }));
		title.current = '';
		setfieldValue('');
	}

	return (
		<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
			<AddIcon onClick={() => { dispatchTask() }}
				sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize="medium" cursor="pointer" />
			<TextField
				id="add-task"
				label="What needs to be done?"
				variant="standard"
				autoFocus={true}
				fullWidth={true}
				value={fieldValue}
				onChange={(e) => { title.current = e.target.value; setfieldValue(e.target.value) }}
				onKeyPress={(e) => { (e.key === 'Enter') && dispatchTask() }}
			/>
		</Box>
	);
}
