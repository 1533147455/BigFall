<template>
  <div class="page-two">
    <el-button type="primary" plain @click="showDialog('batchAdjustDom')">批量调整</el-button>
    <batch-adjust ref="batchAdjustDom"/>
    <base-table
        ref="tableDom"
        showColumnsControl
        :table-api="tableApi"
        :tableColumns="tableColumns">
      <template #url="{ row }">
        <el-link :href="row.url" target="_blank" :underline="false">{{ row.name }}</el-link>
      </template>
      <template #urlRight="{ row }">
        <el-link :href="row.urlRight" target="_blank" :underline="false">{{ row.nameRight }}</el-link>
      </template>
    </base-table>
  </div>
</template>

<script>
import BatchAdjust from './BatchAdjust.vue'
import HomeApi from "@/api/home";

export default {
  components: { BatchAdjust },
  data() {
    return{
      tableApi: HomeApi.getResource.bind(HomeApi),
      tableColumns: [
        { prop: 'category', label: '第一列', align: 'center' },
        { prop: 'name', label: '第二列', slotName: 'url' },
        { prop: 'categoryRight', label: '第三列'},
        { prop: 'nameRight', label: '第四列', slotName: 'urlRight' }
      ]
    }
  },
  methods: {
    showDialog (dialogDom) {
      this.$refs[dialogDom].open();
    }
  }
}
</script>

<style lang="scss" scoped>


</style>