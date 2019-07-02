<template>
  <div class="navtip-container">
    <hamburger class="hamburger-container" @toggleClick="toggleSideBar" />

    <div class="right-menu">
      <el-dropdown class="right-menu-item avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <i class="el-icon-user-solid" />
          {{ username }}
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown last-dropdown">
          <el-dropdown-item>
            <router-link to="/">Home</router-link>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <div @click="logout">Log Out</div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown class="right-menu-item avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <i class="el-icon-coin" />
          Wallet
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item>
            <router-link to="/">Home</router-link>
          </el-dropdown-item>
          <el-dropdown-item divided>Home</el-dropdown-item>
          <el-dropdown-item divided>
            <div @click="logout">Log Out</div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <div class="right-menu-item">
        <div class="avatar-wrapper">
          <router-link to="/">
            <i class="el-icon-news" />
            News
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hamburger from '@/components/Hamburger'

export default {
  components: { Hamburger },
  computed: {
    username() {
      return this.$store.getters.name
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.navtip-container {
  position: relative;
  overflow: hidden;

  .hamburger-container {
    height: 100%;
    overflow: hidden;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .25)
    }
  }

  .right-menu {
    float: right;
    height: 100%;
    &:focus {
      outline: none;
    }
    .el-dropdown{
      color: #fff;
    }
    .right-menu-item {
      float: right;
      height: 100%;
      vertical-align: text-bottom;
      border-left:1px solid rgba(255, 255, 255, .15);
    }

    .avatar-wrapper{
      padding-left:15px;
      padding-right:15px;
    }
    .avatar-wrapper:focus,
    .avatar-wrapper:hover{
      background:rgba(0, 0, 0, 0.35);
      color:#f6f6f6;
    }

  }
}

.user-dropdown{
  margin-top:-2px;
  border:2px solid $headBg;
  border-radius:0;
  min-width:200px;
  margin-right:-60px;
}
.last-dropdown{
  right:0;
  left: inherit;
  margin-right:0;
}
</style>
