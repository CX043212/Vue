import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Home from "@/components/home";
import store from "../store";
import GoodsList from "../components/goodsList.vue";
import Activity from "../components/activity.vue";
import AddGoods from "../components/addGoods.vue";
import Bigb from "../components/bigb.vue";
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:"/",
      redirect:"/login"
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },{
      path:"/home",
      name:"home",
      component:Home,
      meta:{
        Auth:true
      },
      children:[
        {
          path:"goodsList",
          name:"goodsList",
          component:GoodsList,
          meta:{
            Auth:true
          }
        },
        {
          path:"addGoods",
          name:"addGoods",
          component:AddGoods,
          meta:{
            Auth:true
          }
        },
        {
          path:"activity",
          name:"activity",
          component:Activity,
          meta:{
            Auth:true
          }
        },
        {
          path:"bigb",
          name:"bigb",
          component:Bigb,
          meta:{
            Auth:true
          }
        }
      ]
    }
  ]
})
router.beforeEach((to,from,next)=>{
  if(to.meta.Auth){
    if(store.state.token){
      next();
    }else{
      next("/login");
    }
  }else{
    next();
  }
})

export default router;


