<template>
  <el-autocomplete
    ref="autocompleteDom"
    v-model="value"
    :fetch-suggestions="querySearch"
    clearable
    :value-key="paramKey"
    v-bind="$attrs"
    v-on="$listeners"/>
</template>

<script>

export default {
  props: {
    value: [String, Number],
    formKey: String,
    path: String,
    paramKey: String, // 模糊查询的时候传给后端的参数字段
    extraKey: String, //  模糊查询的时候的额外参数字段名称
    extraValue: [String, Number], // 模糊查询的时候的额外参数的值
    staticOptions: Array
  },
  data () {
    return {
      options: []
    }
  },
  methods: {
    getOptions () {
      if (this.path) {
        const params = {};
        this.paramKey && (params[this.paramKey] = '');
        this.extraKey && (params[this.extraKey] = this.extraValue);
        this.$http.get(this.path, { params }).then((res) => {
          this.options = res.data;
        })
      } else {
        this.options = this.staticOptions || [];
      }
    },
    querySearch (queryString, cb) {
      const results = queryString ? this.options.filter(item => item.value.includes(queryString)) : this.options;
      cb(results);
    }
  },

  created () {
    this.getOptions();
  }
}
</script>

<style lang="scss" scoped>
</style>
