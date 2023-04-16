import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'projects',
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/materials',
    name: 'materials',
    component: () => import('../views/BuildingMaterials.vue')
  },
  {
    path: '/formulas',
    name: 'formulas',
    component: () => import('../views/Formulas.vue')
  },
  {
    path: '/create',
    name: 'create-project',
    component: () => import('../views/CreateProject.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
