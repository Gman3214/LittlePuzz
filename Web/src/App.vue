<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

:root{
  --buttons: #8bb2d4;
  --dark: #394957;
  --background: #EFF4F9;
  --foreground: #87abcc;
  --light: #618985;
}

@import url('https://fonts.googleapis.com/css2?family=Sora:wght@100&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #131920;
}

html{
  background-color: var(--background);
}

#nav {
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
