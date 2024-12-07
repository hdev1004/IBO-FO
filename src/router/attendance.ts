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
  }
]
