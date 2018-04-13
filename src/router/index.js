import Vue from 'vue'
import Router from 'vue-router'
// import Home from 'src/components/home/home'
// import Page3 from 'src/components/view/page3'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      hidden: true
    },
    {
      path: '*',
      name: '404',
      hidden: true,
      component: resolve => require(['src/components/view/404'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      hidden: true,
      component: resolve => require(['src/components/view/login/login'], resolve)
    },
    {
      path: '/',
      name: '数据采集',
      component: resolve => require(['src/components/home/home'], resolve),
      children: [
        { path: '/home/information',
          name: '一体化闸门数据',
          component: resolve => require(['src/components/information/information'], resolve)
        },
        { path: '/home/flowCount',
          name: '明渠流量计数据',
          component: resolve => require(['src/components/flowCount/flowCount'], resolve)
        }
        // { path: '/home/statusData',
        //   name: '状态数据',
        //   component: resolve => require(['src/components/statusData/statusData'], resolve)
        // }
      ]
    },
    {
      path: '/',
      name: '闸门控制',
      component: resolve => require(['src/components/home/home'], resolve),
      children: [
        { path: '/home/remote',
          name: '远程控制',
          component: resolve => require(['src/components/remote/remote'], resolve)
        }
      ]
    },
    {
      path: '/',
      name: '数据分析',
      component: resolve => require(['src/components/home/home'], resolve),
      children: [
        { path: '/home/hostorical',
          name: '历史数据',
          component: resolve => require(['src/components/hostorical/hostorical'], resolve)
        }
      ]
    },
    {
      path: '/',
      name: '报警管理',
      component: resolve => require(['src/components/home/home'], resolve),
      children: [
        {
          path: '/home/alarmManagement',
          name: '报警记录',
          component: resolve => require(['src/components/alarmManagement/alarmManagement'], resolve)
        }
      ]
    },
    // {
    //   path: '/',
    //   name: '设置',
    //   component: resolve => require(['src/components/home/home'], resolve),
    //   children: [
    //     { path: '/home/setting',
    //       name: '设置',
    //       component: resolve => require(['src/components/setting/setting'], resolve)
    //     }
    //   ]
    // },
    {
      path: '/',
      name: '系统管理',
      // iconCls: 'el-icon-message',
      component: resolve => require(['src/components/home/home'], resolve),
      children: [
        { path: '/home/management',
          name: '站点信息',
          component: resolve => require(['src/components/management/management'], resolve)
          // meta: {
          //   requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
          // }
        },
        { path: '/home/setting',
          name: '参数设置',
          component: resolve => require(['src/components/setting/setting'], resolve)
        }
        // { path: '/home/page3',
        //   name: 'page3',
        //   component: resolve => require(['src/components/view/page3'], resolve)
        // }
        // { path: '/home/information',
        //   name: 'information',
        //   component: resolve => require(['src/components/information/information'], resolve)
        // },
        // { path: '/home/hostorical',
        //   name: 'hostorical',
        //   component: resolve => require(['src/components/hostorical/hostorical'], resolve)
        // },
        // { path: '/home/tab4',
        //   name: 'tab4',
        //   component: resolve => require(['src/components/tab4/tab4'], resolve)
        // }
      ]
    }
  ]
})
