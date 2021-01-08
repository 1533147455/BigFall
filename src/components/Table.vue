<template>
<div class="common-table">
  <el-table :data="tableData" 
    style="width: 100%" 
    stripe
    :v-loading="config.loading"
    fit
    >
      <el-table-column
        label="序号"
        width="85"
        align="center">
      <template slot-scope="scope">
        <span>{{ (config.page - 1) * 20 + scope.$index + 1 }}</span>
      </template>
    </el-table-column>
    <el-table-column 
    v-for="item in tableLabel" 
    :key="item.prop"
    :prop="item.prop"
    :label="item.label"
    show-overflow-tooltip
    :width="item.width ? item.width : 280"
    >
      <template slot-scope="scope">
        <span>{{ scope.row[item.prop] }}</span>
      </template>
    </el-table-column>
    </el-table>

</div>
    
</template>

<script>
export default {
  props: {
    tableData: Array,  // data对象数组，有prop键名、label列名和内容
    tableLabel: Array,
    config: Object
  }
}
</script>

<style lang="scss" scoped>

</style>