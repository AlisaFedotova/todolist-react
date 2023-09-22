import './App.css';
import '@fontsource/roboto';
import { Container, Button, Stack, Typography } from '@mui/material';
import TodoList from './components/TodoList';
import StateTabs from './components/StateTabs';
import AddTaskField from './components/AddTaskField';

function App() {
  return (
    <div className="App">
      <Typography variant="h1" align='center' sx={{ p: 2, pt: 4 }}>
        Todos
      </Typography>
      <Container maxWidth="md" sx={{ backgroundColor: '#fff', p: 2 }}>
        <AddTaskField />
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
