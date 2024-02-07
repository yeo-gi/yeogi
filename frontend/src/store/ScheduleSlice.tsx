import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface CounterState {
  schedule: String[];
}

const initialState: CounterState = {
  schedule: [],
};

export const ScheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    addSchedule: (state, action: PayloadAction<String[]>) => {
      state.schedule = action.payload;
    },
  },
});

export const {addSchedule} = ScheduleSlice.actions;
export default ScheduleSlice.reducer;
