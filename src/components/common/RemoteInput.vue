<template>
  <el-autocomplete
    ref="autocompleteDom"
    :value="displayValue"
    :fetch-suggestions="querySearch"
    clearable
    style="width: 100%"
    @change="handleInputChange"
    @input="handleInput"
    @select="handleSelect"
    @click.native="handleClick"
    v-bind="$attrs"
    v-on="$listeners">
    <template slot-scope="{ item }">
      {{ item }}
    </template>
  </el-autocomplete>
</template>

<script>

export default {
  props: {
    value: [String, Number],
    formKey: String,
    path: String,
    extraKey: String, // 获取数组需要的参数
    extraValue: [String, Number], // 获取数组需要的值
    staticOptions:  {
      type: Array,
      default: () => []
    },
  },
  data () {
    return {
      currentValue: '',
      userInput: null,
      options: []
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(value) {
        this.currentValue = value;
        this.userInput = null;
        this.$emit('input', value);
      }
    }
  },
  computed: {
    displayValue() {
      if (this.userInput !== null) {
        return this.userInput;
      }
      return this.currentValue;
    },
  },
  methods: {
    getOptions () {
      if (this.path) {
        const params = {};
        this.extraKey && (params[this.extraKey] = this.extraValue);
        this.$http.get(this.path, { params }).then((res) => {
          this.options = res?.data || [];
        })
      }
      if (this.staticOptions.length){
        this.options = [...this.staticOptions, ...this.options];
      }
    },
    querySearch (queryString, cb) {
      const results = queryString ? this.options.filter(item => item.includes(queryString)) : this.options;
      cb(results);
    },
    setCurrentValue(newVal) {
      const oldVal = this.currentValue;
      if (oldVal === newVal) return;
      this.userInput = null;
      this.$emit('input', newVal);
      this.$emit('change', newVal, oldVal);
      this.currentValue = newVal;
    },
    handleSelect(value) {
      this.setCurrentValue(value);
      this.userInput = null;
    },
    handleInput(value) {
      this.userInput = value;
    },
    handleInputChange(value) {
      this.setCurrentValue(value);
      this.userInput = null;
    },
    handleClick() {
      if (this.$refs.autocompleteDom.$refs.input.focused) {
        this.$refs.autocompleteDom.activated = true;
      }
    }
  },

  created () {
    this.getOptions();
  }
}
</script>

<style lang="scss" scoped>
</style>
