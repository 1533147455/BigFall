<template>
  <el-form 
    :model="form"
    ref="form"
    v-bind="$attrs">
    <el-form-item v-for="item in formItems" :key="item.model" :label="item.label">
      <el-input v-model="form[item.model]" clearable
        v-if="item.type === 'input'">
      </el-input>
      <el-select v-model="form[item.model]" clearable
        v-if="item.type === 'select'">
        <el-option
          v-for="item in item.options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-date-picker
          v-if="item.type === 'datePicker'"
          v-model="form[item.model]"
          clearable
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
      </el-date-picker>
      </el-form-item>
    <el-form-item>
      <slot name="button"></slot>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    form: Object,
    formItems: Array,
  }
}
</script>

<style lang="scss" scoped>

</style>