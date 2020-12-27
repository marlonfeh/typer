import { createStore } from 'vuex';

import textsModule from './modules/texts/index.js';
//import statsModule from './modules/stats/index.js';

const store = createStore({
  modules: {
    texts: textsModule,
    //stats: statsModule,
  },
  state() {
    return {
      currentKey: null,
      currentIndex: 0,
      currentChar: "e"
    };
  },
  getters: {
    currentIndex(state) {
      return state.currentIndex;
    },
    currentKey(state) {
        return state.currentKey;
      },
    currentChar(state) {
        return state.currentChar;
    },
  }
});

export default store;