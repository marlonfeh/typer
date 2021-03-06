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
      currentChar: null,
      currentIndex: 0,
      currentTextLength: null,
      currentTextID: "t1",
      currentText: ["t","e","s","t"," ","w","o","r","d"," ","o","b","j","e","c","t"],
      keyCodeTable: {
        32: " ",
        65: "a",
        66: "b",
        67: "c",
        68:	"d",
        69:	"e",
        70:	"f",
        71:	"g",
        72:	"h",
        73:	"i",
        74:	"j",
        75:	"k",
        76:	"l",
        77:	"m",
        78:	"n",
        79:	"o",
        80:	"p",
        81:	"q",
        82:	"r",
        83:	"s",
        84:	"t",
        85:	"u",
        86:	"v",
        87:	"w",
        88:	"x",
        89:	"y",
        90:	"z",
      }
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
    keyCodeTable(state){
        return state.keyCodeTable;
    },
    currentText(state){
      return state.currentText;
    },
    currentTextLength(state){
      return state.currentTextLength;
    }
  },
  actions: {
    setCurrentTextLength(context){
      const currentText = context.getters.currentText
      let currentTextLength = currentText.length - 1

      console.log(currentTextLength)

      context.commit('setCurrentTextLength', currentTextLength)
    },
    setCurrentKey (context, data) {
      context.commit('setCurrentKey', data);
    },
    setCurrentChar (context, data) {
      const keyCodeTable = context.getters.keyCodeTable 
      let currentChar = keyCodeTable[data]

      console.log(currentChar)
      context.commit('setCurrentChar', currentChar);
    },
    checkCurrentChar (context) {
      //If currentChar is correct increase Index by one
      //Check if index is finished, then trigger action for generating new currentText, reset index, etc
      
      let currentChar = context.getters.currentChar
      let currentIndex = context.getters.currentIndex
      let currentTextLength = context.getters.currentTextLength
      let currentNeededChar = context.getters.currentText[currentIndex]
      
      
      if(currentChar === currentNeededChar){
        console.log(true)
        context.commit('incrementIndex')
        if (currentIndex === currentTextLength) {
          console.log("finished")
          context.commit('resetIndex')
          context.dispatch('setNewText')
          context.dispatch('setCurrentTextLength')
        }
      }  else {
        console.log(false)
      }

      console.log(currentIndex)
      console.log(currentNeededChar)
      console.log(currentTextLength)
    },
    setNewText(context){
      //Implement Function to choose text generation method
      context.dispatch('setRandomText')
    },
    setRandomText(context){
      const randomText = context.getters["texts/randomText"]
      console.log(randomText)
      
      context.commit('setText', randomText)
    }
  },
  mutations: {
    setCurrentTextLength(state, payload){
      state.currentTextLength = payload
      //console.log(state.currentTextLength)
    },
    incrementIndex (state) {
      state.currentIndex++
    },
    resetIndex(state){
      state.currentIndex = 0
    },
    setCurrentKey (state, payload) {
      state.currentKey = payload;
    },
    setCurrentChar (state, payload) {
      state.currentChar = payload;
    },
    setText(state, payload){
      state.currentText = payload;

    }
  }
});

export default store;