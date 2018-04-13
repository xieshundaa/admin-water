<template>
  <el-row type="flex" justify="space-between" class="row-bg header" :span="24">
    <el-col class="logo" tag="div">
      <img src="../../assets/logo123.png">
      <!--<img src="../../assets/logo-text123.png" style="padding-left: 12px; padding-bottom: 16px;">-->
      <span class="logo-text">数据采集系统</span>
    </el-col>
    <!--<el-col>-->
      <!--<div class="tools">-->
        <!--&lt;!&ndash;<i class="el-icon-minus"></i>&ndash;&gt;-->
      <!--</div>-->
    <!--</el-col>-->
    <el-col class="userInfo">
      <el-dropdown trigger="hover">
          <span class="el-dropdown-link userInfo-inner">
            <!--<img src="https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png">-->
            Hello， {{this.sysUserName}}
            <i class="fa fa-user-circle fa-fw fa-lg"></i>
          </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的消息</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>

</template>

<script>
    export default {
      name: 'header',
      components: {},
      data() {
        return {
          sysUserName: ''
        }
      },
      mounted() {
        var user = sessionStorage.getItem('user')
        this.sysUserName = JSON.parse(user).username || ''
      },
      methods: {
        logout() {
          this.$confirm('确认退出吗？', '提示', {}).then(() => {
            sessionStorage.removeItem('user')
            this.$router.push({ path: '/' })
          }).catch((error) => {
            console.log(error)
          })
        }
      }
    }
</script>

<style scoped lang="stylus">
  .header
    height: 80px
    line-height: 80px
    /*background: #20a0ff*/
    background: #408080
    /*background-color: rgb(50, 81, 87)*/
    /*background: #324157*/
    color: #fff
    .logo
      display: flex
      flex-direction: row
      align-items: center
      padding-left: 40px
      .logo-text
        font-size: 40px
        font-weight: 700
        padding-left: 16px
        letter-spacing: 6px
      /*justify-content: center*/
      /*padding: 14px 22px 0 10px*/
      /*padding: 6px 22px 0 10px*/
      /*padding-left: 10px*/
      /*padding-right: 22px*/
      /*border-right-width: 1px*/
      /*border-right-style: solid*/
      /*img*/
        /*width: 40px*/
        /*float: left*/
        /*margin: 10px 10px 10px 18px*/
      /*.txt*/
        /*color: #fff*/
    .tools
      padding: 0 23px
      width: 14px
      height: 60px
      line-height: 60px
      cursor: pointer
    .userInfo
      text-align: right
      padding-right: 35px
      float: right
      .userInfo-inner
        cursor: pointer
        color: #fff
        img
          width: 40px
          height: 40px
          border-radius: 20px
          margin: 10px 0px 10px 10px
          float: right
</style>
