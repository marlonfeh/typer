import { createStore } from 'vuex';

import textsModule from './modules/texts/index.js';
import statsModule from './modules/texts/index.js';

const store = createStore({
  modules: {
    texts: textsModule,
    stats: statsModule,
  },
  state() {
    return {
      
    };
  },
  
});

export default store;