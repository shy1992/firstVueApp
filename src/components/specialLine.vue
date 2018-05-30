<template>
  <div id='myComp'>
    <p>Globally Usage of Component</p>
  </div>
</template>

<script>
export default {
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
