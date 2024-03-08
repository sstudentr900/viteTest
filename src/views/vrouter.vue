<template>
  <h2>Vue-Router</h2>
  <h3>新增router</h3>
  <pre>
    #src/router/index.js

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
  <h3>main註冊</h3>
  <pre>
    #main.js
    import router from './router'  
    app.use(router);
  </pre>
  <h3>引用router</h3>
  <pre>
    #template

    //連結
    &lt;router-link to="/"&gt;home&lt;/router-link&gt;

    //顯示頁面
    &lt;router-view/&gt;
  </pre>
  <h3>createWebHistory</h3>
  <p>需要服務器去配置</p>
  <p>import.meta.env.BASE_URL 應用程序在不同 URL路徑下運行（如子目 錄或子網站）建議使用這個參數來設置。</p>
  <p>若無任何子目錄則可寫 history: createWebHistory(),網址會有#字號</p>
  <pre>
    const router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      routes: [
      ]
    })
  </pre>
  <hr>
  <h3>路由「:」</h3>
  <pre>
    const router = new VueRouter({
      routes: [
        { 
          //動態變數 「:」 必填
          path: 'search/:key',
          component: member
        },
      ]
    })
  </pre>
  <h3>路由「?」</h3>
  <pre>
    const router = new VueRouter({
      routes: [
        {
          //「?」非必填
          path: '/search/:key?',
        }
      ]
    })

    //methods
    this.$router.push({
      params:{key:''||undefined},
    })
  </pre>
  <hr>
  <h2>路由守衛(Navigation Guards)</h2>
  <ol>
    <li>beforeEach 進入新的路由前(全域)</li>
    <li>beforeResolve 路由跳轉前觸發(全域)但是時間點會晚於beforeEach</li>
    <li>afterEach 路由跳轉結束後才會觸發(全域)</li>
    <li>單一元件內的分別是beforeRouteEnter,beforeRouteUpdate,beforeRouteLeave</li>
  </ol>
  <pre>
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
  <pre>
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
  <h3>參考</h3>
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
  <h3>script useRoute useRouter</h3>
  <p>useRoute 局部對象可獲取name path params querr</p>
  <p>useRouter 全局對象 push replace</p>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=5YzSuKfwWv4"> Vue-Router 基礎入門，SPA網頁輕鬆上手 !</a>
    </li>
  </ul>
  <h3>script query params</h3>
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
  <h3>script push() replace()</h3>
  <pre>
    import { useRoute,useRouter } from 'vue-router'
    //取得網址
    const route = useRoute()
    console.log(route.path) 
    

    //push replace
    const router = useRouter()
    router.push('/') //會記錄並換頁
    router.push({path:"/"}) //同上
    router.replace({path:"/"}) //不會記錄上一頁

    //
    this.$router.push('/'); //可以返回上一頁
    this.$router.replace('/'); //不會向history留下紀錄

    //錯誤跳頁
    setTimeout(()=>{
      router.push('/') 
    },3000)
  </pre>
  <hr>
  <h3>template path</h3>
  <pre>
    #url
    /search

    #template
    $route.path=>'/search'
  </pre>
  <h3>template 取得 params</h3>
  <pre>
    #url
    /search/key

    #router
    {
      path: '/search/:key',
      name: 'search',
    }

    #template
    $route.params.keyword=> key
  </pre>
  <h3>template 取得 query</h3>
  <pre>
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
  <h3>template 取得 meta</h3>
  <p>改變template顯示</p>
  <pre>
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
  <h3>template to push</h3>
  <pre>
    //字串
    &lt;router-link to="/" tag="li">Home&lt;/router-link>

    //物件
    //name為路由的名稱
    //params為path的值
    //query為?後的值
    :to="{ name: 'user', params: { userId: 123 },query:{k:12}}"

    //指定路徑
    @click="$router.push('/member/profile')

    //指定路由名稱
    @click="$router.push({ name: 'Profile'})
  </pre>
  <h3>template 修改tag</h3>
  <pre>
    #template
    &lt;router-link to="/" tag="li"&gt;Home&lt;/router-link&gt; 

    #render 因tag="li"
    &lt;li>Home&lt;/li>
  </pre>
  <h3>template go back</h3>
  <pre>
    #template
    &lt;a @click="$router.go(-1)"&gt;home&lt;/a&gt;
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://stackoverflow.com/questions/48104842/how-can-i-go-back-route-back-on-vue-router">go back</a>
    </li>
  </ul>
  <hr>
  <h3>路由傳 props 對象寫法</h3>
  <pre>
    //router
    {
      path: '...'
      name: '...'
      props: {a:'1'}
    }

    //template
    &lbrace;&lbrace;a&rbrace;&rbrace;

    //script
    export default {
      props: ['a']
    }
  </pre>
  <h3>路由傳 props 函數寫法</h3>
  <pre>
    //router
    {
      path: '...'
      name: '...'
      props: ($route)=>{
        return {params:$route.params.key,query:$route.query.k}
      }
    }

    //template
    &lbrace;&lbrace;params&rbrace;&rbrace;

    //script
    export default {
      props: ['params','query']
    }
  </pre>
  <hr>
  <h2>轉址(redirect)</h2>
  <p>將/a 轉頁到 /b</p>
  <pre>
    //router
    const router = new VueRouter({
      routes: [
        { path: '/a', redirect: '/b' }
      ]
    })
  </pre>
  <hr>
  <h3>別名(alias)</h3>
  <p>和轉址差異在於，轉址是 URL 會被替換；而別名像是替路由再取另個名字，但網址列看到的 URL 不會被替換</p>
  <pre>
    const router = new VueRouter({
      routes: [
        { path: '/a', alias: '/b' }
      ]
    })
  </pre>
  <hr>
  <h3>history路由模式</h3>
  <ol>
    <li>HTML 5 的 pushState() 和 replaceState() (History API)</li>
    <li>onpopstate 事件監聽</li>
  </ol>
  <pre>
    history.pushState(state [,title][,url]); // 歷史記錄中增加一條記錄
    history.replaceState(state [,title][,url]); // 修改目前的歷史紀錄
  </pre>
  <h2>hash路由模式</h2>
  <ol>
    <li>URL 中的 # 符號，例如: https://www.example.com/#yoyoyo</li>
    <li>改變 # 後面的值，不會向 Server 發送請求，也不會刷新頁面</li>
    <li>觸發 hashchange 事件</li>
  </ol>

  <!-- <hr> -->
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
