<template >
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ this.$route.params.name }}</h1>
       <h1>{{ this.$route.params.age }}</h1>
    <button class=" btn btn-danger me-2" @click="goHome()">Go to home</button>
    <button class="btn btn-warning" @click="goList()">Go to All List</button>

    <h1>{{ $store.state.name }}</h1>
  </div>
</template>

<script>
  export default {
  name: 'AboutView',
  methods: {
    goHome () {
      this.$router.push('/');
    },
    goList() {
      this.$router.push({ name: "allList" });
    }
  }
  }
</script>

<style lang="stylus" scoped></style>