<template>
  <div class="crumbar">
    <breadcrumb class="breadcrumb-container" />
    <div class="right-name">{{ siteName }}</div>
  </div>
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

<style lang="scss" scoped>
.crumbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  z-index: 1002;
  background: #fff;
  box-shadow: 0 1px 7px 0 rgba(12, 51, 92, 0.2);

  .breadcrumb-container {
    float: left;
  }
  .right-name {
    float: right;
    height: 100%;
    line-height: 50px;
  }
}
</style>
