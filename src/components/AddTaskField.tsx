import * as React from 'react';
import { TextField, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch } from '../store/store';
import { addTask } from '../store/taskSlice';

export default function AddTaskField() {
  const title = React.useRef<string>('');
  const dispatch = useAppDispatch();
  const [fieldValue, setFieldValue] = React.useState('');
  const dispatchTask = () => {
    dispatch(addTask({ title: title.current }));
    title.current = '';
    setFieldValue('');
  };
  const setValue = (value: string) => {
    title.current = value;
    setFieldValue(value);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <AddIcon
        onClick={() => {
          dispatchTask();
        }}
        sx={{ color: 'action.active', mr: 1, my: 0.5 }}
        fontSize="medium"
        cursor="pointer"
      />
      <TextField
        id="add-task"
        label="What needs to be done?"
        variant="standard"
        autoFocus={true}
        fullWidth={true}
        value={fieldValue}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          e.key === 'Enter' && dispatchTask();
        }}
      />
    </Box>
  );
}
