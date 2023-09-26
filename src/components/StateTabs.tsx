import React from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

export default function StateTabs() {
	const [alignment, setAlignment] = React.useState('all');

	const handleChange = (
		event: React.MouseEvent<HTMLElement>,
		newAlignment: string,
	) => {
		setAlignment(newAlignment);
	};
	//TODO: add tabs toggling
	return (
		<ToggleButtonGroup
			color="primary"
			value={alignment}
			exclusive
			onChange={handleChange}
		>
			<ToggleButton value="all">All</ToggleButton>
			<ToggleButton value="active">Active</ToggleButton>
			<ToggleButton value="completed">Completed</ToggleButton>
		</ToggleButtonGroup>
	)
}