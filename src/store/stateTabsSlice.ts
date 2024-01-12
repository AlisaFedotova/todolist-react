import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const StateTabsSlice = createSlice({
  name: 'stateTabs',
  initialState: { state: 'all' },
  reducers: {
    setState: (state, action: PayloadAction<{ state: string }>) => {
      state.state = action.payload.state;
    },
  },
});

export default StateTabsSlice.reducer;
export const { setState } = StateTabsSlice.actions;
