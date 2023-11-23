<script>
export default {
  name: 'welcome',
  props: ['msg']
}
</script>

<template>
  <div>
    <h1>欢迎来到主界面</h1>
    <router-link to="/login">去登录</router-link>
  </div>
</template>

<style scoped>
/* .welcome {
  background-color: #fff;
  height: 100%;
} */
</style>
