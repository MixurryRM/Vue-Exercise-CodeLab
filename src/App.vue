<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link :to="{name: 'allList'}">AllListView</router-link>|
    <router-link :to="{name: 'todoAllList'}">TodoAllList</router-link>|
    <router-link :to="{name: 'homePage'}">Home Page</router-link>|
    <router-link :to="{name: 'loginPage'}">Login</router-link>
  </nav>
 <div>
    <router-view/>
 </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
