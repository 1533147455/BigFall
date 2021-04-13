<template>
  <el-select
    ref="selectDom"
    :value="displayValue"
    v-bind="$attrs"
    v-on="$listeners"
    clearable
    filterable>
    <el-option
      v-for="item in options"
      :key="item.value"
      v-bind="item" />
  </el-select>
</template>

<script>
export default {
  props: {
    value: [String, Number],
    formKey: String,
    path: String,
    multiple: Boolean, // 是否多选
    staticParams: Object, // 下拉枚举接口的默认参数
    staticOptions: Array, // 不调接口由外部staticOptions传数组进来
    paramsMapping: {
      type: Object,
      default: () => {
        return ({
          label: 'name',
          value: 'id'
        });
      }
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(value) {
        this.displayValue = value;
      }
    }
  },
  data () {
    return {
      options: [],
      displayValue: ''
    }
  },
  methods: {
    getOptions () {
      if (this.path) {
        this.$http.get(this.path, { params: this.staticParams }).then((res) => {
          this.options = this.transformData(res.data);
        })
      } else {
        this.options = this.staticOptions || [];
      }
    },
    transformData (val) {
      this.options = val.map((item) => {
        return ({
          label: item[this.paramsMapping.label],
          value: item[this.paramsMapping.value]
        });
      });
    }
  },
  created () {
    this.getOptions();
  }
}

</script>

<style lang="scss" scoped>
::v-deep .el-select .el-input .el-input__inner {
  width: 100%;
}
</style>
