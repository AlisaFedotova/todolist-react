import { Paper, FormControlLabel, Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
	//TODO: what Paper is
	//TODO: explore styling components
	...theme.typography.body2,
	padding: theme.spacing(1),
	fontSize: "1.2rem",
	color: theme.palette.text.secondary,
	borderRadius: 0
}));

export default function Task({ title, active }: { title: string, active: boolean }) {
	//TODO: remake to get task as one object
	return (
		<Item>
			<FormControlLabel control={<Checkbox checked={!active} />} label={title} />
			{/* //TODO: add click handler */}
		</Item>

	);
}