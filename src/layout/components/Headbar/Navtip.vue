<template>
  <div class="navtip-container">
    <hamburger class="hamburger-container" @toggleClick="toggleSideBar" />

    <div class="right-menu">
      <el-dropdown class="right-menu-item avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <i class="el-icon-user-solid" />
          <span v-if="device!=='mobile'">{{ userdata.name }}<i class="el-icon-caret-bottom" /></span>
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown last-dropdown">
          <el-dropdown-item>
            <div>ID: {{ userdata.id }}</div>
            <div>邮箱: {{ userdata.email }}</div>
            <div>等级: {{ userdata.lvname }}</div>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <div @click="logout">登出</div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-dropdown class="right-menu-item avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <i class="el-icon-coin" />
          <span v-if="device!=='mobile'">我的资产<i class="el-icon-caret-bottom" /></span>
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item>
            <strong>比特币BTC</strong>
            <div>可用: {{ userdata.member_bzdval }}</div>
            <div>冻结: {{ userdata.member_freeze }}</div>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <strong>以太坊ETH</strong>
            <div>可用: {{ userdata.member_lsbval }}</div>
            <div>冻结: {{ userdata.member_lsbfre }}</div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <div class="right-menu-item">
        <div class="avatar-wrapper">
          <router-link to="/about/notice">
            <i class="el-icon-news" />
            <span v-if="device!=='mobile'">公告</span>
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
    userdata() {
      return this.$store.getters.userdata
    },
    device() {
      return this.$store.state.app.device
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
      font-size: 14px;
      vertical-align: text-bottom;
      border-left:1px solid rgba(255, 255, 255, .15);
    }

    .avatar-wrapper{
      padding-left:15px;
      padding-right:15px;
      cursor: pointer;
    }
    .avatar-wrapper:focus,
    .avatar-wrapper:hover{
      background:rgba(0, 0, 0, 0.35);
      color:#f6f6f6;
    }

  }
}

.user-dropdown{
  margin-top:0;
  border-left:2px solid $headBg;
  border-right:2px solid $headBg;
  border-bottom:2px solid $headBg;
  border-radius:0;
  min-width:200px;
  .el-dropdown-menu__item:focus, 
  .el-dropdown-menu__item:not(.is-disabled):hover{
    background-color:inherit !important; 
  }
}


.last-dropdown{
  right:0;
  left: inherit;
  margin-right:0;
}
</style>
