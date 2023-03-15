import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/categories',
    name: 'categories',
    component: () => import(/* webpackChunkName: "about" */ '../views/CategoriesView.vue')
  },
  {
    path: '/categories/:id/editar',
    name: 'categories_editar',
    component: () => import(/* webpackChunkName: "about" */ '../views/CategoriesEditarView.vue')
   },
    {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductsView.vue')
  },
  {
    path: '/products/:id/editar',
    name: 'products_editar',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductEditarView.vue')
   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
