<template>
  <div class="manage">
    <div class="manage-header">
      <common-form inline :form-items="formItems" :form="form">
        <template #button>
          <el-button type="primary">查询</el-button>
        </template>
      </common-form>
    </div>
    <div class="manage-content">
      <common-table
        :height="528"
        :tableData="tableData" 
        :tableLabel="tableLabel" 
        :config="config"
        @currentPageChange="currentPageChange">
      </common-table>
    </div>
  </div>
</template>

<script>
import CommonForm from '../components/Form'
import CommonTable from '../components/Table'
export default {
  components: {
    CommonForm,
    CommonTable
  },
  data() {
    return {
      form: {
        name: '',
        food: ''
      },
      formItems: [
        {
          type: 'input',
          model: 'name',
          label: '姓名',
        },
        {
          type: 'select',
          options: [
            { label: '鸡蛋', value: 'egg' },
            { label: '牛奶', value: 'milk' },
            { label: '面包', value: 'bread' }
          ],
          model: 'food',
          label: '食物'
        }
      ],
      tableData: [],
      tableLabel: [
        { prop: 'name', label: '姓名',width: 180},
        { prop: 'age', label: '年龄',width: 180},
        { prop: 'sexLabel', label: '性别',width: 180},
        { prop: 'birth', label: '出生日期',width: 180},
        { prop: 'addr', label: '地址'}
      ],
      config: { page: 1, total: 30, loading: false }
    }
  },
  methods: {
    getList() {
      this.config.loading = true
      this.$http.get('/user/getUser', {
        params: {
          page: this.config.page
        }
      }).then(res => {
        this.tableData = res.data.list.map(item => {
          item.sexLabel = item.sex === 0 ? '女' : '男'
          return item
        })
        this.config.total = res.data.count
        this.config.loading = false
      })
    },
    currentPageChange(page) {
      this.$http.get('/user/getUser', {
        params: {
          page
        }.then(res => {
          this.tableData = res.data.list.map(item => {
            item.sexLabel = item.sex === 0 ? '女' : '男'
            return item
          })
          this.config.total = res.data.count
        })
      })
    }
  },
  created() {
    this.getList()
    }
  }

</script>

<style lang="scss" scoped>
@import '~@/assets/scss/common.scss';
</style>