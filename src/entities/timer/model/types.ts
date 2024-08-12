export type TimerState = {
  isStarted: boolean;
  isFinished: boolean;
  timeLimit: 15 | 30 | 60;
  timeLeft: number;
};
