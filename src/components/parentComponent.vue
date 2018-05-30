<template>
  <div id="app">
    <p>In der parent Component {{outToIn}}</p>
    <childcomponent :outToIn="outToIn" @changedValue="update"></childcomponent>
  </div>
</template>

<script>
import childComp from './InOutComponent'
export default {
  components:{
    "childcomponent": childComp
  },
  data() {
    return {
      outToIn: "Parents"
    }
  },
  methods:{
    update(foo){
      this.outToIn = foo;
    }
  }

}
</script>

<style scoped>
</style>
