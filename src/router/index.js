import { createRouter, createWebHistory } from 'vue-router'

const routes = [
 

  {
    path: '/categories',
    name: 'categories',
    component: () => import(/* webpackChunkName: "about" */ '../views/CategoriesView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
