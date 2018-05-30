<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/functionTester">Router link die app wird nicht resetted sondern nur neu gerendert also kein server request</router-link>
    <router-view/>
  </div>
</template>

// router view ist das element welches den inhalt des routers handlet also eine art renderte box für den inhalt

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
