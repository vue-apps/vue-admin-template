<template>
  <el-header class="crumbar-container" height="50px">
    <breadcrumb />
    <div class="right-name">{{ siteName }}</div>
  </el-header>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'

export default {
  components: {
    Breadcrumb
  },
  computed: {
    siteName() {
      return this.$store.state.app.siteName
    }
  }
}
</script>
