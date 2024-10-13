export const homeRouter = [
  {
    path: '/home/empInfo',
    name: 'home-empInfo',
    component: () => import('@/pages/home/empInfo.vue')
  },
  {
    path: '/home/empRecord',
    name: 'home-empRecord',
    component: () => import('@/pages/home/empRecord.vue')
  },
  {
    path: '/home/groupManage',
    name: 'home-groupManage',
    component: () => import('@/pages/home/groupManage.vue')
  },
  {
    path: '/home/personalAppointment',
    name: 'home-personalAppointment',
    component: () => import('@/pages/home/PersonalAppointment.vue')
  }
]
