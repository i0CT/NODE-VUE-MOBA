<template>
  <div class="login-container">
    <el-card header="管理后台" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="model.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="sumbit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: {}
    }
  },
  methods: {
    async login () {
      const res = await this.$http.post('/login', this.model)
      localStorage.token = res.data.token
      this.$router.push('/main')
      this.$message.success('登录成功')
    }
  }
}
</script>

<style scoped>
.login-card {
  width: 30rem;
  margin: 5rem auto;
}
</style>