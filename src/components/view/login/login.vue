<template>
  <div class="login-container">
    <h3 class="title">数据采集系统</h3>
    <el-form auto-complete="off" :model="ruleForm2" :rules="rules2" ref="ruleForm2" :label-position="labelPosition" label-width="60px" class="demo-ruleForm login-content">

      <el-form-item label="账号" prop="account">
        <el-input type="text" v-model="ruleForm2.account" placeholder="请输入账号">
        </el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass" >
        <el-input type="password" v-model="ruleForm2.pass" :autofocus="autoFocusInput" placeholder="请输入密码" @keyup.enter.native="loginSubmit('ruleForm2')"></el-input>
      </el-form-item>
      <!--<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>-->
      <el-form-item label-width="0px" style="margin-bottom: 10px;">
        <el-button class="loginBtn" @click="loginSubmit('ruleForm2')" style="width: 100%;" :loading="logging">登&nbsp&nbsp&nbsp录</el-button>
        <!--:loading="logging"-->
      </el-form-item>
      <!--<el-form-item label-width="0px">-->
      <!--<el-button @click="resetForm('ruleForm2')" style="width: 100%;">重置</el-button>-->
      <!--</el-form-item>-->
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    components: {},
    data() {
      return {
        labelPosition: 'left',
        autoFocusInput: false,
        logging: false,
        checked: true,
        loginParams: {},
        ruleForm2: {
          account: '',
          pass: ''
        },
        rules2: {
          pass: [
            {
              message: '请输入长度为6到16位的字符', trigger: 'blur,change'
            }
          ],
          account: [
            {
              message: '请输入长度为2到16位的字符', trigger: 'blur,change'
            }
          ]
        }
      }
    },
    mounted() {
    },
    methods: {
      loginSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.logging = true
            this.loginParams = { username: this.ruleForm2.account, password: this.ruleForm2.pass }
            if (this.loginParams.username === 'admin' && this.loginParams.password === 'password') {
              sessionStorage.setItem('user', JSON.stringify(this.loginParams))
              setTimeout(() => {
                this.logging = false
                this.$message({
                  showClose: true,
                  message: '登录成功',
                  type: 'success'
                })
//                this.$router.push({ path: '/home/management' })
                this.$router.push({ path: '/home/information' })
              }, 1000)
            } else {
              setTimeout(() => {
                this.logging = false
              }, 500)
              this.$message.error('账号密码输入错误')
            }
          } else {
            console.log('error submit!!')
            this.$message.error('账号密码不能为空')
            return false
          }
        })
      }
//      resetForm(formName) {
//        this.$refs[formName].resetFields()
//      }
    }
  }
</script>

<style scoped lang="stylus">
  .login-container
    position: absolute
    top: 0
    bottom: 0
    width: 100%
    /*background-color: #fff*/
    background-image: url("../../../assets/login.png")
    background-repeat: no-repeat
    background-size: cover
    .login-content
        -webkit-border-radius: 5px
        border-radius: 5px
        -moz-border-radius: 5px
        background-clip: padding-box
        /*margin: 180px auto*/
        margin: 0px auto
        /*width: 350px*/
        width: 280px
        padding: 35px 35px 15px 35px
        background: #fff
        /*border: 1px solid #cac6c6*/
        border: 1px solid #eaeaea
        box-shadow: 0 0 25px #cac6c6
    .title
      /*margin: 0 auto 40px auto*/
      margin: 230px auto 26px auto
      text-align: center
      padding-left: 14px
      /*color: #505458*/
      color: #fff
      font-size: 40px
      letter-spacing: 14px
    .loginBtn
      color: #fff
      font-weight: 700
      /*font-size: 16px*/
      background-color: #408080
      /*letter-spacing: 5px*/
      &:hover
        /*background-color: #192846*/
        background-color: #408080
        opacity: 0.8
        border: 1px solid transparent
    .remember
      margin: 0 0 35px 0
</style>
