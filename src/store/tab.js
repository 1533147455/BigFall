// import Cookie from 'js-cookie'
export default {
    state: {
        isCollapse: false,
        menu: []
    },
    getters: {
        isCollapse: state =>  state.isCollapse
    },
    mutations: {
        isCollapse(state) {
            state.isCollapse = !state.isCollapse
        },
        // setMenu(state,val) {
        //     state.menu = val
        //     localStorage.setItem('menu',JSON.stringify(val))
        // },
        // clearMenu(state) {
        //     state.menu = []
        //     localStorage.removeItem('menu')
        // },
        // addMenu(state,router) {
        //     if(!localStorage.getItem('menu')) { return }
        //     let menu = JSON.parse(localStorage.getItem('menu'))
        //     state.menu = menu
        //     //添加动态路由 主路由为Main.vue
        //     let currentMenu = [
        //         { path: '/',component: () => import(`@/views/Main`),children:[] }
        //     ]
        //     //如果是一级菜单 那么菜单名称肯定有路由 如果是二级菜单那么一级没有 二级有路由
        //     menu.forEach(item => {
        //         if (item.children) {
        //             item.children = item.children.map(item => {
        //                 item.component = () => import(`@/views/${item.url}`)
        //                 return item
        //         })
        //         currentMenu[0].children.push(...item.children)
        //         } else {
        //             item.component = () => import(`@/views/${item.url}`)
        //             currentMenu[0].children.push(item)
        //         }
        //     })
        // //添加动态路由
        // router.addRoutes(currentMenu)
        // }
    },
    actions: {
    }
}