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
          wordCount: 3,
          text: [
            ["t","e","s","t"],
            ["w","o","r","d"],
            ["o","b","j","e","c","t"]
          ],
        },
        {
          id: 't2',
          wordCount: 3,
          text: "test word object"
        },
      ]
    };
  },
  mutations,
  actions,
  getters
};



