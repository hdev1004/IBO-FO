export const attendanceRouter = [
  {
    path: '/attendance/attendanceWork',
    name: 'attendance-work',
    component: () => import('@/pages/attendance/attendanceWork.vue')
  },
  {
    path: '/attendance/attendanceApply',
    name: 'attendance-apply',
    component: () => import('@/pages/attendance/attendanceApply.vue')
  },
  {
    path: '/attendance/attendanceSign',
    name: 'attendance-sign',
    component: () => import('@/pages/attendance/attendanceSign.vue')
  },
  {
    path: '/attendance/attendanceCC',
    name: 'attendance-cc',
    component: () => import('@/pages/attendance/attendanceCC.vue')
  }
]
