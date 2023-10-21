import './App.css';
import '@fontsource/roboto';
import { Container, Button, Stack, Typography, Divider } from '@mui/material';
import TodoList from './components/TodoList';
import StateTabs from './components/StateTabs';
import AddTaskField from './components/AddTaskField';
import { useAppSelector } from './store/store';

function App() {
  const tasks = useAppSelector(state => state.task.tasks);
  let completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="App">
      <Typography variant="h1" align='center' sx={{ p: 2, pt: 4, color: "rgb(30, 32, 34)" }}>
        Todos
      </Typography>
      <Container maxWidth="md" sx={{ backgroundColor: '#fff', p: 2 }}>
        <AddTaskField />
        <TodoList />
        <Divider />
        <Stack
          sx={{ pt: 2 }}
          direction="row"
          justifyContent="space-between"
          alignItems="center">
          <span>{tasks.length - completedTasks.length} items left</span>
          {/* TODO: add item counting */}
          <StateTabs />
          <Button variant="text">Clear completed</Button>
          {/* TODO: add clearing tasks */}
        </Stack>
      </Container>
    </div>
  );
}

export default App;
