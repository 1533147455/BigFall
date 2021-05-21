<template>
  <el-input
      ref="input"
      :value="displayValue"
      clearable
      v-bind="$attrs"
      v-on="$listeners"
      @input="handleInput"
      @change="handleInputChange">
  </el-input>
</template>
<script>
export default {
  name: 'NumberInput',
  props: {
    value: {},
    precision: {
      type: Number,
      validator(val) {
        return val >= 0 && val === parseInt(val, 10);
      }
    }
  },
  data() {
    return {
      currentValue: 0,
      userInput: null
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(value) {
        let newVal = value === undefined ? value : Number(value);
        if (newVal !== undefined) {
          if (isNaN(newVal)) {
            return;
          }

          if (this.precision !== undefined) {
            newVal = this.toPrecision(newVal, this.precision);
          }
        }
        this.currentValue = newVal;
        this.userInput = null;
        this.$emit('input', newVal);
      }
    }
  },
  computed: {
    numPrecision() {
      const { value, step, getPrecision, precision } = this;
      const stepPrecision = getPrecision(step);
      if (precision !== undefined) {
        if (stepPrecision > precision) {
          console.warn('[Element Warn][InputNumber]precision should not be less than the decimal places of step');
        }
        return precision;
      } else {
        return Math.max(getPrecision(value), stepPrecision);
      }
    },

    displayValue() {
      if (this.userInput !== null) { // 用户有输入就展示输入值
        return this.userInput;
      }

      let currentValue = this.currentValue;

      if (typeof currentValue === 'number' && !this.precision) {
        currentValue = currentValue.toFixed(this.precision);
      }

      return currentValue; // 没有的话就是初始值
    }
  },
  methods: {
    toPrecision(num, precision) {
      if (precision === undefined) precision = this.numPrecision;
      return parseFloat(Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision));
    },
    setCurrentValue(newVal) {
      const oldVal = this.currentValue;
      if (typeof newVal === 'number' && this.precision !== undefined) {
        newVal = this.toPrecision(newVal, this.precision);
      }
      if (newVal > this.max) {
        this.$message.warning(`${this.label}的值不能大于${this.max}`);
        newVal = this.max ;
      }
      if (newVal < this.min) {
        this.$message.warning(`${this.label}的值不能小于${this.min}`);
        newVal = this.min;
      }
      if (oldVal === newVal) return;
      this.userInput = null;
      this.$emit('input', newVal);
      this.$emit('change', newVal, oldVal);
      this.currentValue = newVal;
    },
    handleInput(value) {
      this.userInput = value;
    },
    handleInputChange(value) {
      const newVal = value === '' ? undefined : Number(value);
      if (!isNaN(newVal) || value === '') {
        this.setCurrentValue(newVal);
      } else {
        this.$message.warning('仅支持输入数字');
      }
      this.userInput = null;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
