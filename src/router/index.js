import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../components/Index/index'

Vue.use(VueRouter)

const routes = [

  { path : '/', name:'index', component: index},

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
