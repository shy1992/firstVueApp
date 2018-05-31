<template>
  <div class="hello">
    <p>{{ nachricht }}</p>
    <input type="text" v-bind:value="nachricht" v-on:input="print">
    <input type="text" v-model="nachricht">
    <input type="text" v-bind:value="nachricht">
    <p>{{funcA | uppercase}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nachricht: "eine Nachricht!"
    }
  },
  methods: {
    print(value) {
      this.nachricht = value.target.value;
    }
  },
  computed: {    // Wird aufgerufen wenn sich der wert von einer benutzen Variable ändert also es wird reactive
    funcA() {
      //console.log("call computed function!");
      return this.nachricht + "called from computed";
    }
  },
  filters: {   // locally functions um sachen zu verändern wie upper oder lowercase die sind beliebig verschachtelbar wegen dem pipe command
    uppercase(v) {
      return v.toUpperCase();
    }
  }

}
</script>
// globally filter
// Vue.filter('lowercase', function(value){
//  return value.toLowerCase();
//});

<style scoped>
</style>
