<script>
import Welcome from './Welcome.vue'
export default {
  name: 'login',
  components: { Welcome },
  mounted() {
    // this.$request({
    //   mothod: 'get',
    //   url: '/login',
    //   data: {
    //     name: 'jack'
    //   }
    // }).then((res) => {
    //   console.log(res)
    // })
    this.$request.get('/login', { name: 'jack' }).then((res) => {
      console.log(res)
    })
  },
  methods: {
    goHome() {
      this.$router.push('/welcome')
    }
  }
}
</script>

<template>
  <h1>欢迎来到登录界面</h1>
  <el-button @click="goHome">回首页</el-button>
</template>

<style scoped>
</style>
