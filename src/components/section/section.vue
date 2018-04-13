<template>
  <section class="content-container">
    <div class="grid-content bg-purple-light">
      <el-col :span="24" class="breadcrumb-container">
        <strong class="title">{{$route.name}}</strong>
        <el-breadcrumb separator="/" class="breadcrumb-inner">
          <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="item.path" :to="item.path">
            {{item.name}}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :span="24" class="content-wrapper">
        <!--<transition name="fade" mode="out-in">-->
          <!--<router-view></router-view>-->
        <!--</transition>-->
        <el-collapse-transition>
          <router-view></router-view>
        </el-collapse-transition>
      </el-col>
    </div>
  </section>
</template>

<script>
    export default {
      name: 'section',
      components: {}
    }
</script>

<style scoped lang="stylus">
  .content-container
    flex: 1
    overflow-y: scroll
    padding: 20px
    .breadcrumb-container
      .title
        width: 200px
        float: left
        color: #475669
      .breadcrumb-inner
        float: right
    .content-wrapper
      background-color: #fff
      box-sizing: border-box
</style>
