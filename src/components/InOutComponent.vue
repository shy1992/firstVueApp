<template>
  <div id="test">
    <p>In der child comp {{outToIn}}</p>
    <input type='text'  :value="outToIn" @input='changedMessage'>
    <p>in der child comp {{message}}</p>
  </div>
</template>

<script>
export default {
  props: ['outToIn'],
  data() {
    return {
      message: ''
    }
  },
  methods:{
    changedMessage(event){
      this.message = event.target.value;
      this.$emit('changedValue', this.message);
    }
  }
}
</script>

<style scoped>
</style>
