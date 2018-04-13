<template>
  <aside class="navMenu menu-expanded">
    <!--导航菜单-->
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" unique-opened router theme="dark">
      <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
        <el-submenu :index="index+''" v-if="!item.leaf">
          <template slot="title">{{item.name}}</template>
          <i :class="item.iconCls"></i>
          <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
        </el-submenu>
        <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
      </template>
    </el-menu>
  </aside>
</template>

<script>
    export default {
      name: 'navMenu',
      components: {},
      methods: {
      }
    }
</script>

<style scoped lang="stylus">
  aside
    /*flex: 0 0 150px*/
    /*width: 150px*/
    flex: 0 0 200px;
    width: 200px;
    height: 100%
    .router-link-active
      color: #03a9f4
    .el-menu
      height: 100%
      .collapsed
        width:60px
        .item
          position: relative
        .submenu
          position:absolute
          top:0px
          left:60px
          z-index:99999
          height:auto
          display:none
</style>
