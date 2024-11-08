// Vue Router 的實例必須有 createRouter 和 createWebHistory 這兩個函數。
// 有了 Vue Router 的實例就可以使用 <router-view> 標籤來渲染匹配到的路由元件內容。
import { createRouter, createWebHistory } from 'vue-router'
import ref from '../views/ref.vue'
import watch from '../views/watch.vue'
import installs from '../views/installs.vue'
import computed from '../views/computed.vue'
import props from '../views/props.vue'
import component from '../views/component.vue'
import start from '../views/start.vue'
import model from '../views/model.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Main from '../views/Main.vue'
import Pocket from '../views/Pocket.vue'
import composables from '../views/composables.vue'
import pinia from '../views/pinia.vue'
import naive from '../views/naive.vue'
import slot from '../views/slot.vue'
import setup from '../views/setup.vue'
import addtable from '../views/addtable.vue'
import vrouter from '../views/vrouter.vue'
import vroutes from '../views/vroutes.vue'
import vroutes1 from '../views/vroutes1.vue'
import vroutes2 from '../views/vroutes2.vue'
import vroutercatch from '../views/vroutercatch.vue'
import shoppingcart from '../views/shoppingcart.vue'
import von from '../views/von.vue'
import vfile from '../views/vfile.vue'
import nuxt from '../views/nuxt.vue'
import error from '../views/error.vue'
import life from '../views/life.vue'
import vFor from '../views/vFor.vue'
import vHtml from '../views/vHtml.vue'
import style from '../views/style.vue'
import active from '../views/active.vue'
import ifShow from '../views/ifShow.vue'
import validate from '../views/validate.vue'
import axioss from '../views/axioss.vue'
import mocks from '../views/mocks.vue'
import environment from '../views/environment.vue'
import currentInstance from '../views/currentInstance.vue'
import imageerror from '../views/imageerror.vue'
import imglazy from '../views/imglazy.vue'
import jsonserver from '../views/jsonserver.vue'
import express from '../views/express.vue'
import throttle from '../views/throttle.vue'
import elementplus from '../views/elementplus.vue'
import i18n from '../views/i18n.vue'
import lazyload from '../views/lazyload.vue'
import nginx from '../views/nginx.vue'
import nprogress from '../views/nprogress.vue'
import slide from '../views/slide.vue'
import scrolltotop from '../views/scrolltotop.vue'
import swiper from '../views/swiper.vue'
import slide2 from '../views/slide2.vue'
import slide3 from '../views/slide3.vue'
import slide4 from '../views/slide4.vue'
import transition from '../views/transition.vue'

const router = createRouter({
// import.meta.env.BASE_URL 用於指定應用程序的根路徑。如果應用程序可能在不同的 URL 路徑下運行（如子目
// 錄或子網站）就建議使用這個參數來設置。若無任何子目錄則可寫 history: createWebHistory()
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/vroutes',
      component: vroutes,
      children:[
        {
          path: '',
          component: vroutes1,
        },
        {
          path: 'vroutes2',
          component: vroutes2,
        }
      ]
    },
    {path: '/',component: start,},
    {path: '/start',component: start,},
    {path: '/setup',component: setup,},
    {path: '/installs',component: installs,},
    {path: '/ref',component: ref,},
    {path: '/watch',component: watch,},
    {path: '/computed',component: computed,},
    {path: '/props',component: props,},
    {path: '/component',component: component,},
    {path: '/composables',component: composables,},
    {path: '/pinia',component: pinia,},
    {path: '/model',component: model,},
    {path: '/vfile',component: vfile,},
    {path: '/slot',component: slot,},
    {path: '/register',component: Register},
    {path: '/naive',component: naive},
    {path: '/login',component: Login},
    {path: '/login/Main',component: Main},
    {path: '/login/pocket',component: Pocket},
    {path: '/life',component: life},
    {path: '/vFor',component: vFor},
    {path: '/style',component: style},
    {path: '/active',component: active},
    {path: '/vHtml',component: vHtml},
    {path: '/ifShow',component: ifShow},
    {path: '/vrouter',component: vrouter},
    {path: '/vroutercatch',component: vroutercatch},
    {path: '/shoppingcart',component: shoppingcart},
    {path: '/von',component: von},
    {path: '/nuxt',component: nuxt},
    {path: '/validate',component: validate},
    {path: '/axioss',component: axioss},
    {path: '/mocks',component: mocks},
    {path: '/environment',component: environment},
    {path: '/currentInstance',component: currentInstance},
    {path: '/imageerror',component: imageerror},
    {path: '/imglazy',component: imglazy},
    {path: '/jsonserver',component: jsonserver},
    {path: '/express',component: express},
    {path: '/throttle',component: throttle},
    {path: '/swiper',component: swiper},
    {path: '/elementplus',component: elementplus},
    {path: '/i18n',component: i18n},
    {path: '/lazyload',component: lazyload},
    {path: '/nginx',component: nginx},
    {path: '/nprogress',component: nprogress},
    {path: '/slide',component: slide},
    {path: '/scrolltotop',component: scrolltotop},
    {path: '/slide2',component: slide2},
    {path: '/slide3',component: slide3},
    {path: '/slide4',component: slide4},
    {path: '/slide5',component: ()=>import('../views/slide5.vue')},
    {path: '/transition',component: transition},
    {path: '/addtable',component: addtable},
    {path: '/download',component: ()=>import('../views/download.vue')},
    {path: '/sass',component: ()=>import('../views/sass.vue')},
    {path: '/nav',component: ()=>import('../views/nav.vue')},
    {path: '/scrolltop',component: ()=>import('../views/scrolltop.vue')},
    {path: '/input_checkbox',component: ()=>import('../views/input_checkbox.vue')},
    {path: '/countdown',component: ()=>import('../views/countdown.vue')},
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
    {
      path: '/404',
      component: error,
      name: '404'
    },
    {
      path: '/:error(.*)*',
      redirect: '/404',
      name: 'any'
    },
  ]
})

// 將路由實例導出，以便其他地方可以導入並使用它
export default router