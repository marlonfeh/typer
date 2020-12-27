<template>
  <h2>Text Section</h2>
  <p>{{ texts[0].text }}</p>
  <p>Test</p>

  <div>
    <span :class=" { active: isCurrentKey(index) } " v-for="(char, index) in texts[0].text" :key="index" >{{ char }} </span>
    </div>
</template>

<script>
export default {
data(){
    return {
        texts: [
        {
          id: 't1',
          wordCount: 3,
          text: ["t","e","s","t", " ", "w","o","r","d", " ", "o","b","j","e","c","t"]
        },
        {
          id: 't2',
          wordCount: 3,
          text: "test word object"
        },
      ],
    }
},
methods: {
    isCurrentKey(index){
        //Import currentKey
        //return this.$store.getters["texts/texts"];
        const currentKey = 4

        if(index === currentKey){
            return true
        } else {
            return false
        }

    }
},
computed: {
    getRandomText() {
      return this.$store.getters["texts/texts"];

      //Include ranodomization
    },
  },
}
</script>

<style>
.active{
    @apply underline;
}
</style>