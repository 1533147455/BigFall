<template>
  <div id="container">    
    <section id="info">    
        <div id="name">
            <h2>张旭民</h2>  
            <p>求职意向：前端工程师</p>
            <p>专业：计算机科学与技术</p>  
            <p>电话：15916475317</p>
            <p>邮箱：1533147455@qq.com</p>
        </div>
        <div id="photo">
            <img :src="photoimg">  
        </div>  
    </section>                       
    <h3>专业技能</h3>
    <section id="skill">
        <ol>
            <li>熟练掌握 HTML5 / CSS3 / Element UI，能脱离 UI 库独立完成响应式的页面</li>
            <li>熟练掌握 JavaScript 语言特性和基础知识点，熟练掌握 ES5 、ES6 常用知识点</li>
            <li>熟练掌握 Vue 框架的使用，有基于 Vue 全家桶构建前端项目的经验</li>
            <li>熟悉 HTTP 协议，会使用 Ajax 请求与后端交互</li>
            <li>在 PC 端和 Web 移动端都有项目经验，理解响应式布局的理念和 rem 弹性布局</li>
            <li>了解前端性能优化的知识，能把性能优化应用到实际项目上</li>
            <li>了解 Sass 、JQuery 和 Webpack ，有一定的 Java 基础</li>
        </ol>
    </section>  
    <h3>项目经验</h3>
    <section id="item">
        <h4>一、后台管理系统项目 （2020.07 – 2020.10）    独立开发</h4>
            <ol>
                <li>技术选型为 Vue 全家桶 + Element UI + Axios + Mock.js</li>
                <li>封装了 EChart 、表单以及表格组件，请求数据使用 Mock.js 进行模拟</li>
                <li>使用 Scss 进行 css 预编译，Flex 布局实现可伸缩布局</li>
                <li>通过 Vuex + 导航守卫进行用户的权限管理以及页面的访问权限</li>
                <li>整个开发过程大大加强了自己对于Vue框架的运用以及前端工程化思想的理解</li>
            </ol>
        <h4>二、移动端点餐项目 （2020.05 – 2020.07）    独立开发</h4>
            <ol>
                <li>技术选型为 Vue 全家桶 + Cube-UI + Axios,使用 Vue - CLI 脚手架搭建项目结构</li>
                <li>用 npm 对下载的资源进行管理，用 webpack 进行项目的打包</li>
                <li>使用 Vue-Router 完成页面跳转及传值，Vuex 管理全局状态，方便数据共享和传递</li>
                <li>使用 Axios 请求自定义接口里的模拟数据</li>
            </ol>
    </section>
    <h3>教育经历</h3>
    <section id="school">
        <h4>广东财经大学</h4>
        <h4>计算机科学与技术</h4>
        <h4>2017.09 - 2021.06</h4>
        <h4>英语 CET-4</h4>
        <p class="school-text">主修课程：前端课程设计、计算机网络、数据结构、面向对象程序设计</p> 
    </section>
    <h3>自我评价</h3>
    <section id="evalue">
        <p class="evalue-text">本人善于沟通，团队协作能力比较强，对前端技术有浓厚的兴趣，有较强的自学能力，每天坚持进步一点点，有做笔记的习惯，能根据需求不断学习和发展自身的技术面</p>
    </section>       
</div>  
</template>

<script>
export default {
    data() {
        return {
            photoimg: require('../assets/images/photo.jpg')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/resume'
</style>