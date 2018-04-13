<template>
  <el-row class="container">
    <v-header></v-header>
    <el-col :span="24" class="main">
      <navMenu></navMenu>
      <v-section></v-section>
    </el-col>
  </el-row>
</template>
<script>
  import Header from 'src/components/header/header'
  import Navmenu from 'src/components/navMenu/navMenu'
  import Section from 'src/components/section/section'
//  import ElCol from "element-ui/packages/col/src/col"
  export default {
    name: 'home',
    components: {
//      ElCol,
      'v-header': Header,
      'navMenu': Navmenu,
      'v-section': Section
    },
    data() {
      return {}
    },
    computed: {},
    methods: {}
  }
</script>
<style lang="stylus">
  .container
    position: absolute
    top: 0px
    bottom: 0px
    width: 100%
    .main
      display: flex
      position: absolute
      /*top: 60px*/
      top: 80px;
      bottom: 0
      width: 100%
      overflow: hidden



</style>
