import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  
  {
    path: '/login',
    name: 'login',
    meta: {title: '登录'},
    component: () => import('@/page/login/LoginPage.vue')
  },
  

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


router.beforeEach((to, from, next) => {
  console.log(to)
  window.document.title = to.meta.title
  next()
})

export default router
