<template>
  <section class="mx-auto">
    <p>Keyboard Test</p>
    <div class="p-2 border-2 bg-grey-400">
      <div class="flex space-x-4">
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[81] }">Q</div>
        <div class="p-4 border-2 border-gray-500 rounded-md" :class="{ active: keysActive[87] }">W</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[69] }">E</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[82] }">R</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[84] }">T</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[90] }">Z</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[85] }">U</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[73] }">I</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[79] }">O</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[80] }">P</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[186] }">Ü</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[187] }">+</div>
      </div>
      <div class="ml-2 py-2 flex space-x-4">
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[65] }">A</div>
        <div class="p-4 border-2 border-gray-500 rounded-md" :class="{ active: keysActive[83] }">S</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[68] }">D</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[70] }">F</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[71] }">G</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[72] }">H</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[74] }">J</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[75] }">K</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[76] }">L</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[192] }">Ö</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[222] }">Ä</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[191] }">#</div>
      </div>
      <div class="ml-8 flex space-x-4">
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[89] }">Y</div>
        <div class="p-4 border-2 border-gray-500 rounded-md" :class="{ active: keysActive[88] }">X</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[67] }">C</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[86] }">V</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[66] }">B</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[78] }">N</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[77] }">M</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[188] }">,</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[190] }">.</div>
        <div class="p-4 border-2 border-gray-500 rounded-md " :class="{ active: keysActive[189] }">-</div>
        
      </div>
      <div></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Keyboard',
  data(){
      return {
          keysActive:{}
      }
  },
  methods: {
    keyDownEvent(e) {
      console.log(e.keyCode)

      this.keysActive[e.keyCode] = true

      console.log(this.keysActive[e.keyCode])
    },
  keyUpEvent(e) {
      this.keysActive[e.keyCode] = false

      let convertedKey = this.convertCodeToString(e.keyCode)

      this.$store.dispatch('setCurrentKey', e.keyCode)
      this.$store.dispatch('setCurrentChar', convertedKey)
      this.$store.dispatch('checkCurrentChar')

      console.log(e.keyCode)
      console.log(convertedKey)
    },
    convertCodeToString(currentKey){
      return this.getKeyCodeTable[currentKey]
    },
  },
  computed: {
    getKeyCodeTable(){
        return this.$store.state.keyCodeTable
    },
    getCurrentKey(){
        return this.$store.state.currentKey
    },
  },
  created() {
    window.addEventListener('keydown', this.keyDownEvent);
    window.addEventListener('keyup', this.keyUpEvent);
  },
}
</script>

<style scoped>
.active{
    @apply bg-gray-100;
    @apply text-gray-800;
}
</style>
