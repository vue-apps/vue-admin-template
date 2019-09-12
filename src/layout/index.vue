<template>
  <el-container :class="classObj" direction="vertical" style="height: 100%">
    <headbar />
    <el-container direction="horizontal">
      <sidebar />
      <el-container direction="vertical">
        <crumbar />
        <app-main />
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import { Headbar, Sidebar, Crumbar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    Headbar,
    Sidebar,
    Crumbar,
    AppMain
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>
