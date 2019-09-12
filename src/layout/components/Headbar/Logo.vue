<template>
  <div class="logo-container">
    <transition name="sidebarLogoFade">
      <router-link class="logo-link" to="/">
        <img v-if="siteLogo" :src="siteLogo" class="logo-img">
        <h1 class="logo-title">{{ siteTitle }} </h1>
      </router-link>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HeadbarLogo',
  computed: {
    siteTitle() {
      return this.$store.state.settings.siteTitle
    },
    siteLogo() {
      return this.$store.state.settings.siteLogo
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.logo-container {
  overflow: hidden;

  & .logo-link {
    height: 100%;
    width: 100%;

    & .logo-img {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .logo-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      font-size: 20px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }
}
</style>
