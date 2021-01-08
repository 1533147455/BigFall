<template>
  <div class="manage">
    <div class="manage-header">
      <el-button type="primary">+ 新增</el-button>    
      <common-form inline :formLabel="formLabel" :coform="searchFrom">
        <el-button type="primary">搜索</el-button>
      </common-form>
    </div>
    <div class="manage-content">
      <common-table
        :tableData="tableData" 
        :tableLabel="tableLabel" 
        :config="config">
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
      searchFrom: {
        keyword: ''
      },
      formLabel: [
        {
          model: 'keyword',
          label: '',
          type: 'input',
          options: []
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
      config: { page: 1, total: 30,loading: false }
    }
  },
  methods: {
    getList() {
      this.config.loading = true
         this.$http.get('/user/getUser',{
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
    }
  },
  created() {
    this.getList()
  }
  }

</script>

<style lang="scss" scoped>
@import '@/assets/scss/common'
</style>