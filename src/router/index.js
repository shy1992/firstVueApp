import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myComp from '@/components/myComponent'
import myLogo from '@/components/mylogo'
import passData from '@/components/parentComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Testing',
      name: 'HelloWorld',
      component: myComp
    },
    {
      path: '/passData',
      component: passData
    }
  ]
})
