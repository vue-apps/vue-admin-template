<template>
  <div class="login-container">
    <el-row class="login-box" type="flex" justify="center">
      <el-col :md="{span:10}" :lg="{span:8}" :xl="{span:7}">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="off" label-position="left">
          <h1 class="title">会员中心</h1>
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" type="text" autocomplete="off" placeholder="会员ID">
              <div slot="prepend" class="svg-container">
                <i class="el-icon-user-solid" />
              </div>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" autocomplete="off" placeholder="登录密码" :type="pwdType">
              <div slot="prepend" class="svg-container">
                <i class="el-icon-lock" />
              </div>
              <div slot="append" class="show-pwd" @click="showPwd">
                <svg-icon :icon-class="pwdType === 'password' ? 'eye' : 'eye-open'" />
              </div>
            </el-input>
          </el-form-item>
          <el-form-item prop="captcha" class="code-item">
            <el-input v-model="loginForm.captcha" type="text">
              <div slot="prepend" class="svg-container">
                <i class="el-icon-paperclip" />
              </div>
              <div slot="append"><img :src="codeUrl+codeRand" class="code-img" @click="refreshCode"></div>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="btnLoading" type="primary" style="width:100%;" @click.native.prevent="handleLogin()">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: null,
        password: null,
        captcha: null
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur' }],
        password: [{ required: true, trigger: 'blur' }],
        captcha: [{ required: true, trigger: 'blur' }]
      },
      btnLoading: false,
      pwdType: 'password',
      redirect: undefined,
      codeUrl: '/captcha.jpg?', // codeUrl: process.env.VUE_APP_BASE_API,
      codeRand: null
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = 'text'
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.btnLoading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.btnLoading = false
            this.$router.push({ path: this.redirect || '/' })
          }).catch(() => {
            this.btnLoading = false
            this.loginForm.captcha = null
            this.refreshCode()
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    refreshCode() {
      this.codeRand = Math.random()
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.login-container .el-input i{
  font-size:16px;
}
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background: url('/login-bg.jpg') left top no-repeat;
  background-size: cover;
  .login-box {
    padding: 0 20px;
  }
  .login-form {
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 5px;
    -moz-box-shadow: 5px 5px 15px #000;
    -webkit-box-shadow: 5px 5px 15px #000;
    box-shadow: 5px 5px 15px #000;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .svg-container {
    padding: 6px;
    color: #889aa4;
    text-align: center;
    vertical-align: middle;
    display: inline-block;
  }
  .show-pwd {
    padding: 6px;
    color: #889aa4;
    cursor: pointer;
    user-select: none;
    font-size:16px;
  }
  .code-img {
    display: block;
    cursor: pointer;
  }
}
</style>
