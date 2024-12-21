export const paymentRouter = [
  {
    path: '/payment/payrollRegister',
    name: 'payment-payrollRegister',
    component: () => import('@/pages/payment/payrollRegister.vue')
  },
  {
    path: '/payment/paySlip',
    name: 'payment-paySlip',
    component: () => import('@/pages/payment/paySlip.vue')
  },
  {
    path: '/payment/detailPaySlip',
    name: 'payment-detailPaySlip',
    component: () => import('@/pages/payment/detailPaySlip.vue')
  }
]
