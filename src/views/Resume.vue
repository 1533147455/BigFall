<template>
  <el-row class="resume" :gutter="20" v-loading="loading">
    <el-col id="resume-left" :span="8">
      <el-card id="info-card" shadow="hover">
        <div slot="header" class="clearfix">
          <span class="card-title">张旭民</span>
<!--          <el-button style="float: right; padding: 3px 0" type="text">个人博客</el-button>-->
        </div>
        <div class="info-section">
          <p>求职意向：<span>前端实习生</span></p>
          <p>电话：<span>15916475317</span></p>
          <p>年龄： <span>22</span></p>
          <p>邮箱：<span>1945536778@qq.com</span></p>
          <p>专业： <span>计算机科学与技术</span></p>
          <p>学历：<span>本科</span></p>
        </div>
      </el-card>
      <el-card id="skill-card" shadow="hover" body-style="height: 252px">
        <div slot="header" class="clearfix">
          <span class="card-title">掌握技能</span>
<!--/*          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>*/-->
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
<!--          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
        </div>
        <div class="intern-section">
          <div class="basic-information">
            <span>广州拓尔思大数据有限公司</span>
            <span>第一事业部</span>
            <span>2020.11-2021.02</span>
          </div>
          <div class="basic-content">
            <p>工作内容：<span>负责产品的开发、功能逻辑实现，编写大屏数据展示页面，Vue + Echarts图表制作。</span></p>
          </div>
          <div class="basic-content">
            <p>工作收获：<span>对项目开发流程及规范有了更为深刻的认识和理解，掌握了更多CSS、JavaScript和网络通信相关的知识，加强了自己对于Vue框架以及Vue Router、Vuex和axios等工具的使用</span></p>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col id="resume-right" :span="16">
      <el-card id="project-card" shadow="hover" body-style="height: 485px">
        <div slot="header" class="clearfix">
          <span class="card-title">项目经验</span>
<!--          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
        </div>
        <div class="project-section">
          <div class="basic-information" style="margin-top: 20px;margin-bottom: 10px;">
            <span style="margin-right: 50px">数据智能分析系统</span>
<!--            <span>技术选型为：Vue + Vue Router + Vuex + axios + Element UI</span>-->
          </div>
          <div class="basic-content">
            <p>1、<span>技术选型为：Vue + Vue Router + Vuex + axios + Element UI</span></p>
            <p>2、<span>该系统是一个大屏数据展示系统，在页面搭建中合理搭配使用组件库组件，高度还原设计稿</span></p>
            <p>3、<span>使用Vue Router官方路由插件构建单页面应用，设定页面路径与组件映射起来，通过路径的变化来实现页面切换和跳转</span></p>
            <p>4、<span>使用Vuex管理全局状态和数据，集中管理所有组件共用的状态，通过定义方法来让状态的修改可以被观测到</span></p>
            <p>5、<span>通过axios发送get、post等请求，操作相关数据作为参数发送，并将后端返回的数据进行渲染展示</span></p>
          </div>
          <el-divider></el-divider>
          <div class="basic-information" style="margin-bottom: 10px;">
            <span style="margin-right: 50px">知识图谱系统</span>
<!--            <span>技术选型为：Vue + jQuery + axios + Echarts + Element UI</span>-->
          </div>
          <div class="basic-content">
            <p>1、<span>技术选型为：Vue + jQuery + axios + Echarts + Element UI</span></p>
            <p>2、<span>使用Vue CLI快速搭建项目，单文件组件的使用</span></p>
            <p>3、<span>使用SCSS预处理工具书写CSS样式代码，方便维护与管理，用浮动、定位和flex布局等方式来完成相关组件的布局</span></p>
            <p>4、<span>使用jQuery操作DOM完成功能逻辑需求，还使用Echarts制作作柱状图，折线图，饼图等各式数据图表</span></p>
            <p>5、<span>善于利用浏览器工具对页面样式、js逻辑错误及与后端对接数据出现的问题快速排查并修复</span></p>
          </div>
        </div>
      </el-card>
      <div class="right-bottom">
        <el-card id="education-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span class="card-title">教育经历</span>
<!--            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
          </div>
          <div class="intern-section">
            <div class="info-section">
              <p><span>广东财经大学</span></p>
              <p><span>本科</span></p>
              <p><span>计算机科学与技术</span></p>
              <p><span>2017.09 - 2021.06</span></p>
            </div>
            <div class="basic-content">
              <p>主修课程：<span>前端课程设计、计算机网络、数据结构与算法、Java程序设计 英语四级（CET-4）</span></p>
            </div>
          </div>
        </el-card>
        <el-card id="advantage-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span class="card-title">自我评价</span>
<!--            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
          </div>
          <div class="advantage-section">
            <div class="basic-content">
              <span>善于沟通与团队协作，对工作认真负责，做事积极主动，具有良好的团队精神，性格开朗，待人诚恳</span>
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