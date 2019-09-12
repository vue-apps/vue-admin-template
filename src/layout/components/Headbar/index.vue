<template>
  <el-header class="headbar-container">
    <logo />
    <navtip />
  </el-header>
</template>

<script>
import Logo from './Logo'
import Navtip from './Navtip'

export default {
  components: { Logo, Navtip },
  computed: {
    routes() {
      return this.$router.options.routes
    }
  }
}
</script>
