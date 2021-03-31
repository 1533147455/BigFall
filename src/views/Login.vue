<template>
  <div class="login-page">
    <div class="login-form">
      <el-form :model="form" label-width="80px">
        <el-form-item label="账号">
          <el-input  v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input  type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item align="center">
          <el-button type="primary" @click="login()">登录</el-button>
          <el-button @click="open">忘记密码</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
import  { mapMutations } from 'vuex'
export default {
    data() {
        return {
            form: {
                username: 'root',
                password: '123123',
            },
            dialogVisible: false,
        }
    },
    methods: {
	...mapMutations(['setToken','clearToken','getToken','clearMenu','setMenu','addMenu']),
        login() {
            this.$http.post('/permission/getMenu',this.form)
            .then(res => {
                res = res.data
                if (res.code === 20000) {
                    this.clearMenu()
                    this.setMenu(res.data.menu)
                    this.setToken(res.data.token)
                    this.addMenu(this.$router)
                    this.$router.push( {name: 'home'} )
                } else {
                    this.$message.warning(res.data.message)
                }
            })
        },
        open() {
            this.$alert('账号：root，密码：123123',  {
            confirmButtonText: '好的',
            });
        },
    }
}
</script>

<style lang="scss" scoped>
.login-page {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/images/玛雅遗迹.jpg");
  background-size: cover;
  .login-form {
    width: 460px;
    border: 1px solid #dedede;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.9);
    .el-form {
      margin: 60px 60px 30px 0;
    }
  }
}
</style>