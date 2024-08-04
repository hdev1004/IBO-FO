export const exampleRouter = [
  {
    path: '/example/basic',
    name: 'example_basic',
    component: () => import('@/pages/example/basicExample.vue')
  },
  {
    path: '/example/store',
    name: 'example_store',
    component: () => import('@/pages/example/storeExample.vue')
  }
]
