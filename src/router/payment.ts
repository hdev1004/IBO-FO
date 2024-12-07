export const paymentRouter = [
  {
    path: '/payment/payrollRegister',
    name: 'payroll-register',
    component: () => import('@/pages/payment/payrollRegister.vue')
  },
  {
    path: '/payment/paySlip',
    name: 'pay-slip',
    component: () => import('@/pages/payment/paySlip.vue')
  }
]
