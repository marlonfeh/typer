<template>
  <h2>Text Section</h2>
  <p>{{ getCurrentKey }}</p>
  
  <p>{{ getCurrentText }}</p>

  <div>
    <span :class=" { active: isCurrentIndex(index) } " v-for="(char, index) in getCurrentText" :key="index" >{{ char }} </span>
    </div>
</template>

<script>
export default {
  data(){
    return {
        
    }
  },
  methods: {
      isCurrentIndex(index){
          const currentIndex = this.$store.getters.currentIndex

          if(index === currentIndex){
              return true
          } else {
              return false
          }
      },
      
  },
  computed: {
    getCurrentKey(){
        return this.$store.getters.currentKey
    },
    getCurrentText() {
      return this.$store.getters.currentText;
    },
    
  },
  
}
</script>

<style scoped>
.active{
    @apply underline;
}
.wrong{
    @apply text-red-500;
}
</style>