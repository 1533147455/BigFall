// import Cookie from 'js-cookie'
export default {
    state: {
        token: ''
    },
    mutations: {
        // 存放token
        setToken(state,val) {
            state.token = val
            localStorage.setItem('token',val)
        },
        // 清空token
        clearToken(state) {
            state.token = ''
            localStorage.removeItem('token')
        },
        // 获取token
        getToken(state) {
            state.token = localStorage.getItem('token')
        }
    },
    actions: {
    }
}