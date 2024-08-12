import { faker } from '@faker-js/faker';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { QUANTITY_OF_GENERATE_WORDS } from '../config';
import { WordsState } from './types';

const initialState: WordsState = {
  generatedWords: faker.word.words(QUANTITY_OF_GENERATE_WORDS),
  userInput: '',
  cursorPositon: 0,
  top: 0,
};

export const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    generateRandomWords(state: WordsState) {
      state.generatedWords = faker.word.words(QUANTITY_OF_GENERATE_WORDS);
    },

    concatUserInput(state: WordsState, action: PayloadAction<string>) {
      state.userInput = state.userInput.concat(action.payload);
    },

    sliceUserInput(state: WordsState) {
      state.userInput = state.userInput.slice(0, -1);
    },

    incrementCursorPosition(state: WordsState) {
      state.cursorPositon += 1;
    },

    decrementCursorPosition(state: WordsState) {
      state.cursorPositon -= 1;
    },

    setTop(state: WordsState, action: PayloadAction<number>) {
      state.top = action.payload;
    },

    resetWordsStateToInitial(state: WordsState) {
      state.userInput = '';
      state.cursorPositon = 0;
      state.top = 0;
    },
  },
});

export const { generateRandomWords, concatUserInput, sliceUserInput, incrementCursorPosition, decrementCursorPosition, setTop, resetWordsStateToInitial } = wordsSlice.actions;
