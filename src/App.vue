<template>
  <div id="app">
    <!--<transition name="fade"-->
                <!--mode="out-in">-->
      <!--<router-view></router-view>-->
    <!--</transition>-->
    <transition name="el-zoom-in-center">
      <router-view></router-view>
    </transition>
  </div>

</template>

<script>
  export default {
    name: 'app',
    components: {
    }
  }
</script>

<style lang="stylus">
  body
    margin: 0
    padding: 0
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif, 'Microsoft YaHei'*/
    font-family: 'Microsoft YaHei'
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    font-size: 14px
    width: 100%
    textarea
      box-shadow: 0px 0px 0px rgba(0,0,0,0)
      -webkit-appearance: none
    #app
      position: absolute
      top: 0
      bottom: 0
      width: 100%
      .fade-enter-active, .fade-leave-active
        transition: opacity .5s
      .fade-enter, .fade-leave-to
        opacity: 0
    .el-submenu [class^=fa]
      vertical-align: baseline
      margin-right: 10px
    .el-menu-item [class^=fa]
      vertical-align: baseline
      margin-right: 10px


</style>
