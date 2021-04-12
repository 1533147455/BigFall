<template>
  <el-row class="resume" :gutter="20" v-loading="loading">
    <el-col id="resume-left" :span="8">
      <el-card id="info-card" shadow="hover">
        <div slot="header" class="clearfix">
          <span class="card-title">灯火可亲</span>
          <el-button style="float: right; padding: 3px 0" type="text">个人博客</el-button>
        </div>
        <div class="info-section">
          <p>学历：<span>本科</span></p>
          <p>电话：<span>18818881888</span></p>
          <p>年龄： <span>17</span></p>
          <p>邮箱：<span>1945536778@qq.com</span></p>
          <p>专业： <span>计算机科学与技术</span></p>
          <p>学历：<span>本科</span></p>
        </div>
      </el-card>
      <el-card id="skill-card" shadow="hover" body-style="height: 200px">
        <div slot="header" class="clearfix">
          <span class="card-title">专业技能</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div class="skill-section">
          <ol>
            <li>熟练掌握HTML/HTML5、CSS/CSS3前端技术、掌握Div + CSS布局，了解浮动、定位和flex布局</li>
            <li>熟悉JavaScript，ES6常用知识点，会jQuery操作DOM</li>
            <li>熟练使用Element UI、Boostrap等UI组件库开发Web页面</li>
            <li>熟练使用Vue、Vue Router、Vuex和Vue CLI构建项目</li>
            <li>懂得发送ajax请求与后端交互，熟悉http协议，返回码表示的响应状态</li>
            <li>了解Node、HTTP网络协议</li>
            <li>了解Git、SVN代码版本管理工具的使用</li>
          </ol>
        </div>
      </el-card>
      <el-card id="intern-card" shadow="hover">
        <div slot="header" class="clearfix">
          <span class="card-title">实习经历</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div class="intern-section">
          <div class="basic-information">
            <span>XXX科技有限公司</span>
            <span>安全事业部</span>
            <span>2020.11-2021.02</span>
          </div>
          <div class="basic-content">
            <p>工作内容：<span>负责产品的开发、功能逻辑实现，编写大屏数据展示页面，Vue + Echarts图表制作。</span></p>
          </div>
          <div class="basic-content">
            <p>工作内容：<span>工作内容是指劳动者具体从事什么种类或内容的劳动，是劳动合同确定劳动者应当履行劳动义务的主要内容，包括劳动者从事劳动的工种、岗位、工作范围、工作任务、工作职责、劳动定额、质量标准等。</span></p>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col id="resume-right" :span="16">
      <el-card id="project-card" shadow="hover" :body-style="{ height: '542px' }">
        <div slot="header" class="clearfix">
          <span class="card-title">项目经验</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div class="project-section">
          <div class="basic-information">
            <span style="margin-right: 50px">数据智能分析系统</span>
            <span>技术选型为：Vue + Vue Router + Vuex + axios + Element UI</span>
          </div>
          <div class="basic-content">
            <p>1、<span>该系统是一个大屏数据展示系统，在页面搭建中除了合理使用组件库组件，还使用Echarts制作作柱状图，折线图，饼图等各式数据图表</span></p>
            <p>2、<span>使用Vue Router来管理页面跳转及路由守卫，Vuex管理全局状态和数据</span></p>
            <p>3、<span>通过axios发送请求数据，将后端返回的数据进行渲染展示</span></p>
          </div>
          <div class="basic-information">
            <span style="margin-right: 50px">商家中心系统</span>
            <span>技术选型为：Nuxt + TypeScript + Vuex + axios + Element UI</span>
          </div>
          <div class="basic-content">
            <p>1、<span>封装了可获取后台数据枚举的输入框组件、自动查询表单和可自动获取数据的表格组件</span></p>
            <p>2、<span>善于利用浏览器工具对页面样式、js逻辑错误及与后端对接数据出现的问题快速排查并修复</span></p>
          </div>
        </div>
      </el-card>
      <div class="right-bottom">
        <el-card id="education-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span class="card-title">教育经历</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div class="intern-section">
            <div class="basic-information">
              <span>广东XX大学</span>
              <span>本科</span>
              <span>计算机科学与技术</span>
              <span>2017.09 - 2021.06</span>
            </div>
            <div class="basic-content">
              <p>主修课程：<span>前端课程设计、计算机网络、数据结构与算法、Java程序设计 英语四级（CET-4）</span></p>
            </div>
          </div>
        </el-card>
        <el-card id="advantage-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span class="card-title">自我评价</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div class="advantage-section">
            <div class="basic-content">
              <span>善于沟通与团队协作，英文阅读能力过关，通读过Vue2和TypeScript的英文原版文档，重视JavaScript基础，对代码质量有追求</span>
            </div>
          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    }
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 400);
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/resume.scss';
</style>