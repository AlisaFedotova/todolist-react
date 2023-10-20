import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface ITaskState {
  tasks: Array<ITask>;
}

export interface ITask {
  title: string;
  completed: boolean;
  id: string;
}

const initialState: ITaskState = {
  tasks: [{ title: 'Make a test project', completed: true, id: uuidv4() },
  { title: 'Cover with unit tests', completed: false, id: uuidv4() },
  { title: 'Create a Readme file with project description', completed: false, id: uuidv4() },
  { title: 'Host project on Github Pages site', completed: true, id: uuidv4() }],
};

export const TaskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ title: string }>) => {
      if (action.payload.title.length > 0) {
        state.tasks.push({
          title: action.payload.title,
          completed: false,
          id: uuidv4(),
        });
      }
    },
    deleteTask: (state, action: PayloadAction<{ id: string }>) => {
      const findResult = state.tasks.find(
        (item) => item.id === action.payload.id
      );

      if (findResult) {
        const task: ITask = findResult;
        state.tasks.splice(state.tasks.indexOf(task), 1);
      }
    },
    toggleTask: () => {},
  },
});

export default TaskSlice.reducer;
export const { addTask, deleteTask } = TaskSlice.actions;
