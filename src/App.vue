<template>
<div class="h-screen bg-gray-700 text-gray-100">
  <div class="container">
    <menu-section></menu-section>
  <stats-section></stats-section>
  <text-section></text-section>
  <keyboard-section></keyboard-section> 
  </div>
</div>
  
  
</template>

<script>
import MenuSection from "./components/menu.vue"
import StatsSection from "./components/stats.vue"
import TextSection from "./components/text.vue"
import KeyboardSection from "./components/keyboard.vue"

export default {
  name: 'App',
  components: {
    MenuSection,
    StatsSection,
    TextSection,
    KeyboardSection
  }
}
</script>

<style>
@import "./styles.css";
</style>
