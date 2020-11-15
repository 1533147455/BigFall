<template>
  <div style="padding: 20px">
    <el-form :model="form" label-width="100px">
        <el-form-item label="账号">
            <el-input  v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input  type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item align="center">
            <el-button type="primary" @click="login()">登录</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
import  { mapMutations } from 'vuex'
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
	...mapMutations(['setToken','clearToekn','getToken','clearMenu','setMenu','addMenu']),
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
        }
    }
}
</script>

<style lang="scss" scoped>

</style>