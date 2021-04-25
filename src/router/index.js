import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import UniversityList from '@/views/UniversityList.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/university-list/:name',
  name: 'UniversityList',
  component: UniversityList
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
