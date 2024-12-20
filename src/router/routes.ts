import { attendanceRouter } from './attendance'
import { exampleRouter } from './example/exampleRouter'
import { homeRouter } from './home'
import { scheduleRouter } from './schedule'
import { paymentRouter } from './payment'
import { severanceRouter } from './severance'

export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/index.vue')
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/pages/about.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/login.vue')
  },

  ...exampleRouter,
  ...homeRouter,
  ...scheduleRouter,
  ...attendanceRouter,
  ...paymentRouter,
  ...severanceRouter
]
