import {configureStore} from '@reduxjs/toolkit';
import scheduleReducer from './ScheduleSlice';

export const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
