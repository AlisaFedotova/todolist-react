import { TextField, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function AddTaskField() {
	return (
		<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
			<AddIcon onClick={() => { }} sx={{ color: 'action.active', mr: 1, my: 0.5 }} fontSize="medium" />
			{/* //TODO: add click hendler 
          	*/}
			<TextField
				id="add-task"
				label="What needs to be done?"
				variant="standard"
				autoFocus={true}
				fullWidth={true} />
		</Box>
	);
}
