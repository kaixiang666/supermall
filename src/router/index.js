import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const Home = () => import("views/home/Home")
const Cart = () => import("views/cart/Cart")
const Category = () => import("views/category/Category")
const Profile = () => import("views/profile/Profile")

const routes = [
  {
    path:'',
    redirect:'home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  }
]

export default new Router({
  routes,
  mode:'history'
}) 