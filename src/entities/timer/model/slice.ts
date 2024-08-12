import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TimerState } from './types';

const initialState: TimerState = {
  isStarted: false,
  isFinished: false,
  timeLimit: 30,
  timeLeft: 30,
};

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setTimeLimit(state: TimerState, action: PayloadAction<15 | 30 | 60>) {
      state.timeLeft = action.payload;
      state.timeLimit = action.payload;
    },

    decreaseTimeBySecond(state: TimerState) {
      state.timeLeft -= 1;
    },

    setIsStarted(state: TimerState, action: PayloadAction<boolean>) {
      state.isStarted = action.payload;
    },

    setIsFinished(state: TimerState, action: PayloadAction<boolean>) {
      state.isFinished = action.payload;
    },

    resetTimerStateToInitial(state: TimerState) {
      state.timeLeft = state.timeLimit;
      state.isStarted = false;
      state.isFinished = false;
    },
  },
});

export const { setTimeLimit, setIsStarted, setIsFinished, decreaseTimeBySecond, resetTimerStateToInitial } = timerSlice.actions;
