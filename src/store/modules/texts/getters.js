export default {
   randomText(state){
      //get all texts with category random
      //get length of Arr
   
      const texts = state.texts

      const filteredTexts = texts.filter(obj => {
         return obj.category === "random"
       })

    
      let randomText = filteredTexts[Math.floor(Math.random() * filteredTexts.length)];
      
      return randomText.text
      //return state.texts[1].text;
   }
};