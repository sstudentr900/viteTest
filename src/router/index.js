// Vue Router 的實例必須有 createRouter 和 createWebHistory 這兩個函數。
// 有了 Vue Router 的實例就可以使用 <router-view> 標籤來渲染匹配到的路由元件內容。
import { createRouter, createWebHistory } from 'vue-router'
import ref from '../views/ref.vue'
import watch from '../views/watch.vue'
import computed from '../views/computed.vue'
import props from '../views/props.vue'
import component from '../views/component.vue'
import model from '../views/model.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Main from '../views/Main.vue'
import Pocket from '../views/Pocket.vue'
import Basis from '../views/Basis.vue'
import composables from '../views/composables.vue'
import pinia from '../views/pinia.vue'
import naive from '../views/naive.vue'
import slot from '../views/slot.vue'
import vrouter from '../views/vrouter.vue'
import error from '../views/error.vue'

const router = createRouter({
// import.meta.env.BASE_URL 用於指定應用程序的根路徑。如果應用程序可能在不同的 URL 路徑下運行（如子目
// 錄或子網站）就建議使用這個參數來設置。若無任何子目錄則可寫 history: createWebHistory()
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/',component: ref,},
    {path: '/ref',component: ref,},
    {path: '/watch',component: watch,},
    {path: '/computed',component: computed,},
    {path: '/props',component: props,},
    {path: '/component',component: component,},
    {path: '/composables',component: composables,},
    {path: '/pinia',component: pinia,},
    {path: '/model',component: model,},
    {path: '/slot',component: slot,},
    {path: '/register',component: Register},
    {path: '/naive',component: naive},
    {path: '/basis',component: Basis},
    {path: '/login',component: Login},
    {path: '/login/Main',component: Main},
    {path: '/login/pocket',component: Pocket},
    {path: '/vrouter',component: vrouter},
    //children
    {
      path: '/children',
      component: ()=>import('../views/children.vue'),
      children: [
        {
          //path不用斜線
          path: 'childrenA',
          component: ()=>import('../views/children/childrenA.vue'),
        },
        {
          path: 'childrenB',
          component: ()=>import('../views/children/childrenB.vue'),
        },
      ]
    },
    //動態
    {path: '/:id',component: ()=>import('../views/[id].vue')},
    //找不到頁面，要放在最後
    {path: '/:error(.*)*',component: error},
  ]
})

// 將路由實例導出，以便其他地方可以導入並使用它
export default router