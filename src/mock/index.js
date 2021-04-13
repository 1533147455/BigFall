import Mock from 'mockjs'
import homeApi from './home'
import userApi from './user'
import permissionApi from './permission'


// 设置延时请求到数据
Mock.setup({
    timeout: '200-2000'
})


Mock.mock(/\/home\/getData/,'get',homeApi.getStatisticalData)
Mock.mock(/\/user\/getUser/,'get',userApi.getUserList) // 获取用户列表
Mock.mock(/\/permission\/getMenu/,'post',permissionApi.getMenu)

Mock.mock(/\/user\/createUser/,'post',userApi.createUser) // 新增用户
Mock.mock(/\/user\/deleteUser/,'get',userApi.deleteUser) // 删除用户
Mock.mock(/\/user\/updateUser/,'post',userApi.updateUser) // 新增用户

