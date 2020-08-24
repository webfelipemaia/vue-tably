<template>
  <div id="app">
    <tably></tably>
  </div>
</template>

<script>
import Tably from './components/Tably.vue'

export default {
  name: 'App',
  components: {
    Tably
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
