<template>
  <div>
    <p>Hello User {{$route.params.username}}</p>
    <button @click="travel">Go Home</button>
  </div>
</template>

<script>
export default {
  methods: {
    travel(){
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>
</style>
