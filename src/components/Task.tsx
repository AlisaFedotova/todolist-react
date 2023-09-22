import * as React from 'react';
import { Paper, Checkbox, ListItem, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';

export default function Task({ task }: { task: { title: string, completed: boolean, id: string } }) {
	const [checked, setChecked] = React.useState(task.completed);

	const handleToggle = (id: string) => () => {
		setChecked(!checked);
	};

	return (
		<ListItem
			key={task.id}
			disablePadding>
			<ListItemButton role={undefined} onClick={handleToggle(task.id)} dense>
				<ListItemIcon>
					<Checkbox
						edge="start"
						checked={checked}
						tabIndex={-1}
						disableRipple
						inputProps={{ 'aria-labelledby': task.id }}
					/>
				</ListItemIcon>
				<ListItemText id={task.id} primary={task.title} />
			</ListItemButton>
		</ListItem>
	);
}