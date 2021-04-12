<template>
  <div class="query-form">
    <el-form
        ref="form"
        :model="form"
        class="width-form"
        v-bind="$attrs">
      <el-form-item
          v-for="item in formItems"
          :key="item.formKey"
          :prop="item.formKey"
          v-bind="item">
        <component
            :is="item.inputType"
            ref="formComponents"
            v-model="form[item.formKey]"
            v-bind="item"/>
        <!-- 给输入框后面加提示信息等 -->
        <span v-if="item.slotName" style="margin-left: 10px;">
          <slot :name="item.slotName" :item="item" />
        </span>
      </el-form-item>
    </el-form>
    <div class="button-slot">
      <slot></slot>
    </div>
    <div class="right-slot">
      <slot name="rightSlot"></slot>
    </div>
  </div>
</template>

<script>
import RemoteInput from './RemoteInput.vue';
import RemoteSelect from './RemoteSelect.vue';
import NumberInput from '@/components/common/NumberInput';
export default {
  components: {
    RemoteInput,
    RemoteSelect,
    NumberInput
  },
  props: {
    formItems: Array,
    form: Object,
  },
  methods: {
  }

}
</script>

<style lang="scss" scoped>
.query-form {
  display: flex;
  flex-wrap: wrap;
  .right-slot {
    margin-left: auto;
  }
}
</style>
