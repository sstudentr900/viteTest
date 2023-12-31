<template>
  <h2>Vue-Router</h2>
  <br>
  <h3>main安裝</h3>
  <pre>
    //main
    import router from './router'  
    app.use(router);
  </pre>
  <hr>
  <h3>新增router</h3>
  <p>history</p>
  <pre>
    src/router/index.js

    import { createRouter, createWebHistory } from 'vue-router'
    import home from '../views/home.vue'

    const router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      routes: [
        {path: '/',component: home},
        //動態載入(到該頁面才載入比較快)
        {path: '/about',component: ()=>import('../views/about.vue')},
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
      ],
      //滾動行為
      scrollBehavior(){
        return{
          left:0,
          top:0,
        }
      }
    })

    // 將路由實例導出，以便其他地方可以導入並使用它
    export default router
  </pre>
  <hr>
  <h3>引用router</h3>
  <pre>
    #template
    //連結
    <router-link to="/">home</router-link>
    //顯示頁面
    <router-view/>
  </pre>
  <hr>
  <h3>router資訊</h3>
  <pre>
    //template
    $route
  </pre>
  <hr>
  <h2>createWebHistory</h2>
  <p>需要服務器去配置</p>
  <p>import.meta.env.BASE_URL 用於指定應用程序的根路徑。如果應用程序可能在不同的 URL 路徑下運行（如子目 錄或子網站）就建議使用這個參數來設置。</p>
  <p>若無任何子目錄則可寫 history: createWebHistory()</p>
  <pre>
    const router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      routes: [
      ]
    })
  </pre>
  <h3>createWebHasHistory</h3>
  <p>網址會有#字號</p>
  <pre>
    history: createWebHasHistory()
  </pre>
  <hr>
  <h2>嵌套路由 children</h2>
  <pre>
    #src/router/index.js
    const router = createRouter({
      routes: [
        //父
        {
          path: '/children',
          component: ()=>import('../views/children.vue'),
          //子
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
      ]
    })


    #children.vue
    //script
    import {RouterLink,RouterView} from 'vue-router'
    //template
    //開頭要斜線 /children/childrenA
    <RouterLink to="/children/childrenA">childrenA</RouterLink>
    <RouterLink to="/children/childrenB">childrenB</RouterLink>
    <RouterView/>
  </pre>
  <hr>
  <h2>push replace</h2>
  <pre>
    import { useRoute,useRouter } from 'vue-router'
    //取得網址
    const route = useRoute()
    console.log(route.path) 
    

    //push replace
    const router = useRouter()
    router.push('/') //會記錄並換頁
    router.push({path:"/"}) //同上
    router.push({ name:'src', params:{id:1} }) //src?id=1
    router.replace({path:"/"}) //不會記錄上一頁


    //錯誤跳頁
    setTimeout(()=>{
      router.push('/') 
    },3000)
  </pre>
  <hr>
  <h2>query params</h2>
  <pre>
    //hash
    router.push({ path: '/about', hash: '#team' }) /about#team

    //query
    router.push({ path:"/",query:{username:'qq'} }) //帶參數(/?username=qq) 

    //params
    const username = 'eduardo'
    router.push({ path: `/user/${username}` }) // -> /user/eduardo
    router.push({ name: 'user', params: { username } }) // -> /user/eduardo
    
    //path 和 params 不能共用
    router.push({ path: '/user', params: { username } }) // -> /user
  </pre>
  <hr>
  <h2>useRoute useRouter</h2>
  <p>useRoute 局部對象可獲取name path params querr</p>
  <p>useRouter 全局對象 push replace</p>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=5YzSuKfwWv4"> Vue-Router 基礎入門，SPA網頁輕鬆上手 !</a>
    </li>
  </ul>
  <hr>
  <h2>go back</h2>
  <p>a @click="$router.go(-1)" </p>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://stackoverflow.com/questions/48104842/how-can-i-go-back-route-back-on-vue-router">go back</a>
    </li>
  </ul>
  <hr>
  <h2>router-link</h2>
  <h3>
    <span>to</span>
    導向指定的目標路由
  </h3>
  <pre class="prettyprint">
    <!-- 字串 -->
    <!-- <router-link to="/" tag="li">Home</router-link> -->
    <!-- 物件 -->
    <!-- name為路由的名稱 -->
    <!-- params為path的值 -->
    <!-- query為?後的值 -->
    <!-- :to="{ name: 'user', params: { userId: 123 },query:{k:12}}" -->
    <!-- 指定路徑 -->
    @click="$router.push('/member/profile')
    <!-- 指定路由名稱 -->
    @click="$router.push({ name: 'Profile'})
  </pre>
  <h3>tag 渲染標籤</h3>
  <p>點擊的路由class名=>.router-link-exact-active 和 .router-link-active</p>
  <pre class="prettyprint">
    //template
    <!-- <router-link to="/" tag="li">Home</router-link> -->
    //render
    <!-- <li>Home</li> -->
  </pre>
  <hr>
  <h2>冒號「:」動態路由</h2>
  <pre class="prettyprint">
    const router = new VueRouter({
        routes: [
          { 
            path: 'member/:userName',
            component: member
          }
        ]
      })

      //template
      $route.params.userName
  </pre>
  <hr>
  <h2>取得路由</h2>
  <h3>取得path</h3>
  <pre class="prettyprint">
    //url
    /search

    //template
    $route.path=>'/search'
  </pre>
  <h3>取得params</h3>
  <pre class="prettyprint">
    //url
      /search/key

      //router
      {
        path: '/search/:key',
        name: 'search',
      }

      //template
      $route.params.keyword=> key
  </pre>
  <h3>params不給值須寫成?</h3>
  <pre class="prettyprint">
    //methods
      this.$router.push({
        params:{key:''||undefined},
      })

      //router
      {
        //加問號是用在可傳可不傳params,否則上一頁會錯誤
        path: '/search/:key?',
      }
  </pre>
  <h3>取得query</h3>
  <pre class="prettyprint">
    //url
      ?k=b

      //router
      {
        path: '/search/:key',
        name: 'search',
      }

      //template
      $route.query.k=>b
  </pre>
  <hr>
  <h2>路由傳 props</h2>
  <h3>對象寫法</h3>
  <pre class="prettyprint">
    //router
      {
        path: '...'
        name: '...'
        props: {a:'1'}
      }

      //template
      {{a}}

      //script
      export default {
        props: ['a']
      }
  </pre>
  <h3>函數寫法</h3>
  <pre class="prettyprint">
    //router
      {
        path: '...'
        name: '...'
        props: ($route)=>{
          return {params:$route.params.key,query:$route.query.k}
        }
      }

      //template
      {{params}}

      //script
      export default {
        props: ['params','query']
      }
  </pre>
  <hr>
  <h2>路由傳 meta</h2>
  <p>改變template顯示</p>
  <pre class="prettyprint">
    //router
      {
        path: '/home'
        name: 'home'
        meta: {show:true}
      }
      
      //template
      //判斷路徑
      v-show="$route.path=='/home'"

      //meta
      v-show="$route.meta"
  </pre>
  <hr>
  <h2>轉址(redirect)</h2>
  <p>將/a 轉頁到 /b</p>
  <pre class="prettyprint">
    //router
      const router = new VueRouter({
        routes: [
          { path: '/a', redirect: '/b' }
        ]
      })
  </pre>
  <hr>
  <h2>別名(alias)</h2>
  <p>和轉址差異在於，轉址是 URL 會被替換；而別名像是替路由再取另個名字，但網址列看到的 URL 不會被替換</p>
  <pre class="prettyprint">
    const router = new VueRouter({
        routes: [
          { path: '/a', alias: '/b' }
        ]
      })
  </pre>
  <hr>
  <h2>push() replace()</h2>
  <pre class="prettyprint">
    this.$router.push('/'); //可以返回上一頁
      this.$router.replace('/'); //不會向history留下紀錄
  </pre>
  <hr>
  <h2>巢狀路由，區分層級</h2>
  <pre class="prettyprint">
    const routes = [
        ...
        {
          path: "/member",
          component: MemberPage,
          children: [
            {
              path: "profile",
              name: "Profile",
              component: Profile,
            },
            {
              path: "collection",
              name: "Collection",
              component: Collection,
            },
          ],
        },
      ];
  </pre>
  <hr>
  <h2>history路由模式</h2>
  <ol>
    <li>HTML 5 的 pushState() 和 replaceState() (History API)</li>
    <li>onpopstate 事件監聽</li>
  </ol>
  <pre class="prettyprint">
    history.pushState(state [,title][,url]); // 歷史記錄中增加一條記錄
      history.replaceState(state [,title][,url]); // 修改目前的歷史紀錄
  </pre>
  <hr>
  <h2>hash路由模式</h2>
  <ol>
    <li>URL 中的 # 符號，例如: https://www.example.com/#yoyoyo</li>
    <li>改變 # 後面的值，不會向 Server 發送請求，也不會刷新頁面</li>
    <li>觸發 hashchange 事件</li>
  </ol>
  <hr>
  <h2>路由守衛(Navigation Guards)</h2>
  <ol>
    <li>beforeEach 進入新的路由前(全域)</li>
    <li>beforeResolve 路由跳轉前觸發(全域)但是時間點會晚於beforeEach</li>
    <li>afterEach 路由跳轉結束後才會觸發(全域)</li>
    <li>單一元件內的分別是beforeRouteEnter,beforeRouteUpdate,beforeRouteLeave</li>
  </ol>
  <pre class="prettyprint">
    #router.js (全域)
    router.beforeEach((to, from, next) => {
      if(token){
        有登入
      }else{
        沒有登入
      }
    })
  </pre>
  <hr>
  <h2>beforeEnter 不是全域只能在 route 物件內註冊</h2>
  <h3>beforeEnter 進入新的路由前</h3>
  <pre class="prettyprint">
    {
      path: '/routerName',
      name: 'routerName',
      component: () => import ('@/views/routerName'),
      beforeEnter(to, from, next) {
        //必須由from頁進來
        if (from.path == '/routerName') {
          next();
        } else {
          next(from.path);
        }
      }
    },
  </pre>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10278913">頁面切換好夥伴- Vue Router</a>
    </li>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10279602">路由搜查隊</a>
    </li>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10278056"> Vue Router</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=QENGUJK9ecc&list=PLmOn9nNkQxJEFpabd412vGw_k7-lHlJOP&index=8">路由传递参数</a>
    </li>
    <li>
      <a href="https://book.vue.tw/CH4/4-4-navigation-guards.html">路由守衛</a>
    </li>
  </ul>
  <hr>
  <!-- <script>
    export default {
        beforeRouteEnter(to, from, next) {
            // console.log(12)
            next((vm) => {
                if (to.query.search) {
                    vm.searchText = to.query.search;
                }
            });
        },
        data() {
            return {
                searchText: '',
                urlText: ''
            };
        },
        components: {},
        computed: {},
        methods: {

            //對象形式
            pushFn_object() {
                //search/key/?k=b
                this.$router.push({
                    name: 'search',
                    params: {
                        key: 'key'
                    },
                    query: {
                        k: 'b'
                    }
                })
            },
            //字串形式
            pushFn() {
                this.$router.push('/search/kk?v=a')
                    // this.$router.push(`/search/kk?v=${this.key}`)
            },
            buttonFn() {
                console.log(this.$route.name)
                    //url?search=customText
                    // $router.replace 不會向 history 留下紀錄
                    // $router.push，返回上一頁
                this.$router.replace({
                    name: this.$route.name,
                    query: {
                        search: '566'
                    },
                });
            },
        }
    }
  </script> -->
</template>
<script setup></script>
<style scoped></style>
