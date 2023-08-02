import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ManageView from '../views/ManageView.vue'
import HistoryView from '../views/HistoryView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/manage',
    name: 'manage',
    component: ManageView
  },
  {
    path: '/history',
    name: 'history',
    component: HistoryView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
