import './App.css';
import '@fontsource/roboto';
import { Container, Button, Stack, Typography, Divider } from '@mui/material';
import TodoList from './components/TodoList';
import StateTabs from './components/StateTabs';
import AddTaskField from './components/AddTaskField';

function App() {
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
          <span>N items left</span>
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
