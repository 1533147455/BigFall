<template>
  <div
      @dragstart.prevent
      :class="[
      'number-input',
      inputNumberSize ? 'el-input-number--' + inputNumberSize : '',
      { 'is-disabled': inputNumberDisabled },
    ]">
    <el-input
        ref="input"
        :value="displayValue"
        :placeholder="placeholder"
        :disabled="inputNumberDisabled"
        :size="inputNumberSize"
        :max="max"
        :min="min"
        :name="name"
        :label="label"
        @blur="handleBlur"
        @focus="handleFocus"
        @input="handleInput"
        @change="handleInputChange">
    </el-input>
  </div>
</template>
<script>
import ElInput from 'element-ui/packages/input';
import Focus from 'element-ui/src/mixins/focus';
import RepeatClick from 'element-ui/src/directives/repeat-click';

export default {
  name: 'NumberInput',
  mixins: [Focus('input')],
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  directives: {
    repeatClick: RepeatClick
  },
  components: {
    ElInput
  },
  props: {
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    value: {},
    disabled: Boolean,
    size: String,
    name: String,
    label: {
      type: String,
      default: '输入'
    },
    placeholder: String,
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
        if (newVal > this.max) {
          this.$message.warning(`${this.label}的值不能大于${this.max}`);
          newVal = this.max ;
        }
        if (newVal < this.min) {
          this.$message.warning(`${this.label}的值不能小于${this.min}`);
          newVal = this.min;
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
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    inputNumberSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    inputNumberDisabled() {
      return this.disabled || !!(this.elForm || {}).disabled;
    },
    displayValue() {
      if (this.userInput !== null) {
        return this.userInput;
      }

      let currentValue = this.currentValue;

      if (typeof currentValue === 'number' && !this.precision) {
        currentValue = currentValue.toFixed(this.precision);
      }

      return currentValue;
    }
  },
  methods: {
    toPrecision(num, precision) {
      if (precision === undefined) precision = this.numPrecision;
      return parseFloat(Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision));
    },
    handleBlur(event) {
      this.$emit('blur', event);
    },
    handleFocus(event) {
      this.$emit('focus', event);
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
  },
  mounted() {
    let innerInput = this.$refs.input.$refs.input;
    innerInput.setAttribute('role', 'spinbutton');
    innerInput.setAttribute('aria-valuemax', this.max);
    innerInput.setAttribute('aria-valuemin', this.min);
    innerInput.setAttribute('aria-valuenow', this.currentValue);
    innerInput.setAttribute('aria-disabled', this.inputNumberDisabled);
  },
  updated() {
    if (!this.$refs || !this.$refs.input) return;
    const innerInput = this.$refs.input.$refs.input;
    innerInput.setAttribute('aria-valuenow', this.currentValue);
  }
};
</script>
<style lang="scss" scoped>
.el-input-number ::v-deep .el-input__inner {
  padding: 0 15px;
  text-align: left;
}
</style>
