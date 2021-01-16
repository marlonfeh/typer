import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      texts: [
        {
          id: 't1',
          lang: "en",
          wordCount: 3,
          category: "random",
          text: ["t","e","s","t", " ", "w","o","r","d", " ", "o","b","j","e","c","t"]
        },
        {
          id: 't1',
          lang: "en",
          wordCount: 3,
          category: "tweet",
          text: ["t","e","s","t", " ", "w","o","r","d", " ", "o","b","j","e","c","t"]
        },
      ]
    };
  },
  mutations,
  actions,
  getters
};



