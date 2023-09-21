import './App.css';
import '@fontsource/roboto';
import { TextField, Container, Button, Stack, Typography } from '@mui/material';
import TodoList from './TodoList';
import StateTabs from './StateTabs';

function App() {


  return (
    <div className="App">
      <Typography variant="h1" align='center'>
        Todos
      </Typography>
      <Container maxWidth="md" sx={{ backgroundColor: '#fff' }}>
        <div className='add-task'>
          <img alt="add task" onClick={() => { }} />
          {/* //TODO: add click hendler 
              //TODO: add search icon
          */}
          <TextField
            id="add-task"
            label="What needs to be done?"
            variant="standard"
            autoFocus={true}
            fullWidth={true} />
        </div>
        <TodoList />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center">
          <span>N items left</span>
          <StateTabs />
          <Button variant="text">Clear completed</Button>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
