<template>
  <div class="page-two">
    <el-input v-model="value"></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: undefined
    }
  },
  created() {
    this.$http.get('/home').then(res => {
      this.value = res.data;
    })
  }
}
</script>

<style lang="scss" scoped>

</style>