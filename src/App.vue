<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">主页</router-link>&nbsp;
      <router-link to="/about">信息</router-link>&nbsp;
      <router-link to="/users">Users</router-link>&nbsp;
      <router-link to="/login">登录</router-link>
    </div>
    <router-view />
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

#nav {
  padding: 20px;
}
</style>
