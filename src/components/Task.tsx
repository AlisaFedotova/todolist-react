import {
  Checkbox,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../store/store';
import { deleteTask, toggleChecked } from '../store/taskSlice';

export default function Task({ task }:
 {
  task: { title: string; completed: boolean; id: string };
}) {
  const dispatch = useAppDispatch();

  const handleToggle = (id: string) => () => {
    dispatch(toggleChecked({ id }));
  };

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          sx={{
            opacity: 0,
            transition: '0.1s',
          }}
          onClick={() => dispatch(deleteTask({ id: task.id }))}>
          <DeleteIcon />
        </IconButton>
      }
      sx={{
        '&:hover, &:focus': { '& button': { opacity: 1 } },
      }}>
      <ListItemButton role={undefined} onClick={handleToggle(task.id)} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={task.completed}
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
