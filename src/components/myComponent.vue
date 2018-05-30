<template>
  <div id='myComp'>
  <myLogo></myLogo>
    <p>Hello {{name}}</p>
    <button v-on:click='check'>Logge den Namen</button>
    <globallyComp></globallyComp>
  </div>
</template>

<script>
import logo from './mylogo.vue'
export default {
components:{
  "myLogo" : logo
},
  data() {
    return {
      name:'Dennis'
    }
  },
  methods: {
    check: function (){
      console.log(this.name)
    }
  }
}
</script>

<style scoped>
</style>
