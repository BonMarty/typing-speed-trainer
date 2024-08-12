import { timerSlice, wordsSlice } from '@/entities';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    timer: timerSlice.reducer,
    words: wordsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
