<template>
  <div>
    <logo :collapse="isCollapse" />
    <navtip />
  </div>
</template>

<script>
import Logo from './Logo'
import Navtip from './Navtip'

export default {
  components: { Logo, Navtip },
  computed: {
    routes() {
      return this.$router.options.routes
    },
    isCollapse() {
      return true
    }
  }
}
</script>
