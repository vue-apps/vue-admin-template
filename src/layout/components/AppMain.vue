<template>
  <el-main class="appMain-container">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" class="body-container" />
    </transition>
  </el-main>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
