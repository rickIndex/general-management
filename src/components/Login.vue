<script>
import Welcome from './Welcome.vue'
export default {
  name: 'login',
  components: { Welcome },
  methods: {
    goHome() {
      this.$router.push('/welcome')
    }
  }
}
</script>

<template>
  <h1>欢迎来到登录界面</h1>
  <welcome msg="jack"></welcome>
  <el-button @click="goHome">回首页</el-button>
</template>

<style scoped>
</style>
