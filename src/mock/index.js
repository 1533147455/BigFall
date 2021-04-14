import Mock from 'mockjs'
import homeApi from './home'
import userApi from './user'
import permissionApi from './permission'


// 设置延时请求到数据
Mock.setup({
    timeout: '200-2000'
})


Mock.mock(/\/home\/getData/,'get',homeApi.getStatisticalData)

Mock.mock(/\/permission\/getMenu/,'post',permissionApi.getMenu)

Mock.mock(/\/user\/createUser/,'post',userApi.createUser)
Mock.mock(/\/user\/deleteUser/,'get',userApi.deleteUser)
Mock.mock(/\/user\/updateUser/,'post',userApi.updateUser)
Mock.mock(/\/user\/getUser/,'get',userApi.getUserList)



