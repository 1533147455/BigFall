<template>
  <div class="page-two">
    <el-input type="number" :min="1" :max="10" v-model.number="num"></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: undefined
    }
  }
}
</script>

<style lang="scss" scoped>

</style>