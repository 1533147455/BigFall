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
          <p>电话：<span>XXXXXXXX</span></p>
          <p>年龄： <span>17</span></p>
          <p>邮箱：<span>1533147455@qq.com</span></p>
          <p>专业： <span>计算机科学与技术</span></p>
          <p>学历：<span>本科</span></p>
        </div>
      </el-card>
      <el-card id="skill-card" shadow="hover">
        <div slot="header" class="clearfix">
          <span class="card-title">专业技能</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div class="skill-section">
          <ol>
            <li>熟练使用 HTML5 + CSS3制作符合W3C标准的页面，熟练掌握原生JavaScript及ES6/ES7语法</li>
            <li>熟练掌握 Vue、JQuery、axios等前端框架或库的使用，有基于 Vue 全家桶构建前端工程化项目的经验</li>
            <li>熟练使用 Element UI / Bootstrap等组件库开发响应式的页面，也有移动端的实际项目经验</li>
            <li>熟悉前后端分离概念与HTTP网络协议，对前端项目工程化有深刻理解</li>
            <li>熟练使用Axios，前后端交互流程</li>
            <li>熟悉Git在多人协同开发的应用，对前端项目工程化思想有深刻理解</li>
            <li>了解Webpack、Vite前端构建工具的使用，有一定的Node.js，Java 后端开发经验，对服务端环境及工作原理有基本的认知</li>
          </ol>
        </div>
      </el-card>
      <el-card id="intern-card" shadow="hover">
        <div slot="header" class="clearfix">
          <span class="card-title">实习经历</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div class="resume-section">
          <h5>关于我</h5>
          <p class="user-name">灯火可亲</p>
          <p class="user-access">Love the process，not the goal.</p>
          <div>
            <div class="login-info">
              <p>上次登陆时间：<span>{{ new Date().toLocaleDateString('cn',{hour12:false}) }}</span></p>
              <p>上次登录地点： <span>广州</span></p>
            </div>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col id="resume-right" :span="16">
      <el-card id="project-card" shadow="hover">
        <div slot="header" class="clearfix">
          <span class="card-title">项目经验</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div class="resume-section">
          <h5>关于我</h5>
          <p class="user-name">灯火可亲</p>
          <p class="user-access">Love the process，not the goal.</p>
          <div >
            <div class="login-info">
              <p>上次登陆时间：<span>{{ new Date().toLocaleDateString('cn',{hour12:false}) }}</span></p>
              <p>上次登录地点： <span>广州</span></p>
            </div>
          </div>
        </div>
      </el-card>
      <div class="right-bottom">
        <el-card id="education-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span class="card-title">教育经历</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div class="resume-section">
            <h5>关于我</h5>
            <p class="user-name">灯火可亲</p>
            <p class="user-access">Love the process，not the goal.</p>
            <div>
              <div class="login-info">
                <p>上次登陆时间：<span>{{ new Date().toLocaleDateString('cn',{hour12:false}) }}</span></p>
                <p>上次登录地点： <span>广州</span></p>
              </div>
            </div>
          </div>
        </el-card>
        <el-card id="advantage-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span class="card-title">自我评价</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div class="resume-section">
            <h5>关于我</h5>
            <p class="user-name">灯火可亲</p>
            <p class="user-access">Love the process，not the goal.</p>
            <div>
              <div class="login-info">
                <p>上次登陆时间：<span>{{ new Date().toLocaleDateString('cn',{hour12:false}) }}</span></p>
                <p>上次登录地点： <span>广州</span></p>
              </div>
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