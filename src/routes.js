import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// pages
import Home from '@/pages/Home'
import NotifyPage from '@/pages/NotifyPage'
import NotFound from '@/pages/404'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/notify',
      name: 'notify',
      component: NotifyPage
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    },
  ]
})
