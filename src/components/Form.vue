<template>
  <el-form 
    :inline="inline"
    :model="coform"
    ref="coform" 
    label-width="100px">
    <!-- label：控件名 -->
    <!-- v-model：输入的值 -->
    <!-- 控件类型是input、select或switch等 -->
    <el-form-item v-for="item in formLabel" :key="item.model">
      <el-input v-model="coform[item.model]" 
        :placeholder="'请输入'+item.label"
        v-if="item.type === 'input'">
      </el-input>
      <el-select v-model="coform[item.model]" 
        placeholder="请选择"
        v-if="item.type === 'select'">
        <el-option
          v-for="item in item.options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-switch
        v-model="coform[item.model]"
      v-if="item.type === 'switch'">
      </el-switch>
      </el-form-item>
      <el-form-item>
        <!-- 放置按钮 -->
        <slot></slot> 
      </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    coform: Object, // 表单对象
    formLabel: Array, // 数组里包含个一个个对象，对象包含控件名、v-model绑定的值和控件类型
    inline: Boolean // 表单是否是行内的
  }
}
</script>

<style lang="scss" scoped>

</style>