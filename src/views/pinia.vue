<script setup>
  import { storeToRefs } from "pinia";
  import {computed,reactive,ref,watch} from 'vue'
  //引入count Store
  import {useCounterStore} from '../stores/count.js';
  const store = useCounterStore()
  console.log(store)
  const clickAdd = ()=>{
    //直接使用封裝在Store裡的函數
    store.addCount()
  }

  //pinia 解構資料響應式會出問題需要加storeToRefs
  const { counter,doubleCount } = storeToRefs(store)
  //pinia 解構函數寫法
  const { addCount } = store

  //pinia 監聽
  watch(doubleCount,(newVal,oldVal)=>{
    console.log('newVal=>',newVal)
    console.log('oldVal=>',oldVal)
  })
  
  //pinia subscribing 取的pinia狀態
  store.$subscribe((mutation,state)=>{
    console.log(mutation)
  })

</script>
<template>
  <h2>Pinia 的全域資料管理</h2>
  <p>核心概念state getters actions</p>
  <p>use開頭命名</p>
  <h3>安裝 Pinia 套件</h3>
  <pre>
      npm install pinia
      npm i pinia-plugin-persistedstate //Pinia 存取長久 
  </pre>
  <h3>main.js 建立</h3>
  <pre>
    #main.js
    import { createPinia } from 'pinia'
    import { piniaPluginPersistedstate } from 'pinia-plugin-persistedstate'
    const pinia = createPinia()
    pinia.use(piniaPluginPersistedstate) //引入 Pinia 存取長久 
    app.use(pinia);    
  </pre>
  <h3>pinia 創建store</h3>
  <pre>
    #stores/useCounter.js
    import { defineStore } from 'pinia';
    import { computed,ref } from 'vue';
    import axios from 'axios';

    //options api 寫法
    export const useCounterStore = defineStore({
      //id 必須
      id: 'counter',
      state:()=>({
        counter: 0
      }),
      getters:{
        doubleCount: (state)=>state.counter*2
      },
      actions:{
        addCount(){
          this.counter++
        }
      },
      persist: true //Pinia 存取長久 
    })

    
    //composition api 寫法
    export const useCounterStore = defineStore(
      'counter',
      ()=>{
        const counter = ref(0)
        const cardList = ref([]);
        //計算值
        const doubleCount = computed(()=>{
          return counter.valu*2
        })
        //修改值，異布，邏輯
        const addCount = ()=>{
          counter.valu++
        }
        const fetchApiData = async ()=>{
          try{
            const res = await axios.get('https:/60bd9841ace4d50017aab3ec.mockapi.io/api/post_card');
            cardList.value = res.data;
          }catch(error){
            console.log(error)
          }
        }
        return {
          counter,
          addCount,
          doubleCount,
          cardList,
          fetchApiData
        }
      },
      {
        persist: true, //Pinia 存取長久 
      }
    )
  </pre>
  <h3>pinia 引用</h3>
  <pre>
    import {useCounterStore} from "./stores/counter.js";
    
    //執行
    const store = useCounterStore();

    //累加
    const clickAdd = ()=>{
      store.increment();
    }
    console.log(store.increment());

    #template
    &lt;h2>取counter值: &lbrace;&lbrace;store.counter&rbrace;&rbrace;&lt;/h2>
    &lt;button @click="clickAdd">clickAdd 累加&lt;/button>

    &lt;h2>store get axios data&lt;/h2>
    &lt;div>&lbrace;&lbrace;store.cardList&rbrace;&rbrace;&lt;/div>
    &lt;button  @click="store.fetchApiData">get axios data&lt;/button>
  </pre>
  <h3>pinia 解構會響應丟失 </h3>
  <p>pinia 解構ref、ref、ref要重新包裝響應，函數不用</p>
  <p>解構資料響應式會出問題需要加storeToRefs</p>
  <pre>
      import { storeToRefs } from "pinia";
      import {useCounterStore} from "./stores/counter.js";
      //執行方法得到store實例對象
      const store = useCounterStore();

      //store解構cardList因是ref會失效響應所以要使用storeToRefs重新包裝響應
      const {cardList} = storeToRefs(store);
    
      //函數不用重新包裝響應
      // const {fetchApiData} = store;
      
      #template
      &lt;h2>解構後store使用方式&lt;/h2>
      &lt;p>&lbrace;&lbrace;cardList&rbrace;&rbrace;&lt;/p>
      &lt;button  @click="fetchApiData">get axios data&lt;/button>
  </pre>
  <h3>pinia 登入</h3>
  <pre>
    #store/user.js 創建user.js
    import { defineStore } from "pinia";
    import { balogin,reqUserInfo } from '../composables/useApi' //自訂api

    //options api
    export const useUserStore = defineStore('user',{
      state:()=>{
        return {
          token: localStorage.getItem('TOKEN'),
          account: '',
          name: '',
          cover: '',
        };
      },
      //異步|邏輯
      actions:{
        async useIsLogin(data){
          let result = await balogin(data) //驗證登入
          if(result.status){
            //存本地
            localStorage.setItem('TOKEN',result.token)
            //存取個人資訊
            this.token = result.token
            this.account = result.account
            this.name = result.name
            this.cover = result.cover
          }
          return result
        },
        async useUserInfo(){
          let result = await reqUserInfo()
          if(result.status){
            this.account = result.account
            this.name = result.name
            this.cover = result.cover
            return 'ok'
          }
          return result
        },
        async useLogout(){
          //通知服務token 消除
          this.token='';
          this.account='';
          this.name='';
          this.cover='';
          localStorage.removeItem('TOKEN');
        }
      },
      getters:{
      }
    })

    //composition api
    export const useUserStore = defineStore(
      'user',
      {
        //state
        coust userInfo = ref({})
        
        //actions
        const useIsLogin = async({account,password})=>{
          //驗證登入
          const res = await balogin({account,password}) 
          userInfo.value = res
        } 
        const useLogout = async(){
          //登出
          userInfo.value={}
        }

        return{
          userInfo,
          useIsLogin
        }
      },
      {
        persist: true, //Pinia 數據存取長久 
      }
    )

    #view/login.vue 引用
    import user from '../store/user'
    const userstore = user()
    const result = await userstore.useIsLogin(values);
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=WONpWvoKzME&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=18" target="_blank">Pinia-counter基础使用</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=6cSK7oaRubg&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=69" target="_blank">Pinia管理用户数据</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=diZOANC59F8&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=70" target="_blank">Pinia用户数据持久化</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=uQ4f8KoWuWE&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=20" target="_blank"> Pinia-storeToRefs和调试</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=_Vvi9EVtuW4&ab_channel=MikeCheng" target="_blank"> Pinia 的全域資料管理</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=_Vvi9EVtuW4">Pinia 的全域資料管理</a>
    </li>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10326598" target="_blank">主頁歡迎訊息顯示會員名(Pinia)</a>
    </li>
    <li>
      <a href="https://www.tpisoftware.com/tpu/articleDetails/2844" target="_blank">新一代狀態管理工具 Pinia</a>
    </li>
  </ul>
  <hr>
  <h2>Vuex</h2>
  <img src="https://vuex.vuejs.org/vuex.png" alt="">
  <p>主要以四個核心概念——State、Getters、Mutations、Actions——所組成， Modules 可再進行模組化</p>
  <pre>
      //store
      import { createStore } from 'vuex'
      export default createStore({
          state: {
              bookList:''
          },
          mutations: {
              //mutation 將資料直送並賦值給 state
              bookList(state, books) {
                  // console.log(books)
                  state.bookList = books;
              },
          },
          actions: {
              //action 發送 API 後將資料以 commit 呼叫 mutation
              async fetchBookList (context) {
                  const books = await GET();
                  context.commit('bookList', 'books') 
              }
          },
          getters: {
              //透過 getters 取得 state 資料
              //網路不給力[] 先給空數據才不會undefined
              bookList: (state) => state.bookList || [],
          },
          modules: {
          }
      })

      //在元件內的 computed 
      export default {
          mounted(){
              //dispatch 呼叫 action
              this.$store.dispatch("fetchBookList");
          },
          computed: {
              books() {
                  //用 getters 取得 state 資料
                  return this.$store.getters["bookList"];
              },
          },
      }
  </pre>
  <h3>路由 beforeEnter 發送 API</h3>
  <p>將導覽項目路由規劃成巢狀結構，直接在父層路由發送 API。</p>
  <pre>
      {
          path: "/urlName",
          component: urlName,
          beforeEnter: async (to, from, next) => {
              //dispatch 呼叫 action
              await store.dispatch("fetchBookList");
              next();
          },
      },
  </pre>
  <h3>取得state的值</h3>
  <pre>
      //className 分類別名
      //stateName state名
      //script 引入
      import {mapState} from "vuex";

      //1.
      bindName() {
          return this.$store.state.className.stateName;
      },//computed
      <!-- <tageName :items="stateName"></tageName>        //template 使用data -->

      //2.
      ...mapState({
          bindName: state => state.className.stateName,
      }),//computed

      //3.
      ...mapState('className',{
          bindName: state => state.stateName,
      }),//computed

      //4.
      ...mapState('className',["stateName"]),//computed
  </pre>
  <h3>取不到mapState</h3>
  <pre>
      computed: {
          ...mapState('register', ["districts"]),
          areas() {
              if (Object.keys(this.districts).length === 0) {
                  return [];
              } else {
                  return this.districts;
              }

          },
      },
  </pre>
  <h3>Mutaitions</h3>
  <p>commit 呼叫 mutation 的方法。</p>
  <pre>
       //script 引入
      import {mapMutations} from 'vuex'

      //className       類名
      //mutationsName   mutations名
      //fnctionName     fnction名

      //1.
      ...mapMutations('className',{fnctionName:'mutationsName'});//methods
      this.fnctionName(this.yourValue);//templates 使用

      //2.
      ...mapMutations('className',['mutationsName']);//methods
      this.mutationsName(this.yourValue);//templates 使用

      //3.
      this.$store.commit('className/mutationsName');//methods
  </pre>
  <h3>Actions</h3>
  <p>dispatch 呼叫 action 的方法</p>
  <p>這邊可以做非同步處理，例如 AJAX</p>
  <pre>
      //1.
      this.$store.dispatch('className/actionsName')   //mounted 執行非同步
      ...mapState('className', ['stateName'])         //computed 取得data
      <!-- <tageName :items="stateName"></tageName>        //template 使用 -->

      //2.
      ...mapActions([
          "increment", // 將 `this.increment()` 映射為 `this.$store.dispatch('increment')`

          // `mapActions` 也支持载荷：
          "incrementBy" // 將 `this.incrementBy(amount)` 映射為 `this.$store.dispatch('incrementBy', amount)`
      ]),//methods

      //3.
      ...mapActions({
          add: "increment" // 將 `this.add()` 映射為 `this.$store.dispatch('increment')`
      })//methods
  </pre>
  <p>組合 actions</p>
  <pre>
      //Promise
      actions: {
          actionA ({ commit }) {
              return new Promise((resolve, reject) => {
              setTimeout(() => {
                  commit('someMutation')
                  resolve()
              }, 1000)
              })
          }
      }

      //then
      actions: {
          // ...
          actionB ({ dispatch, commit }) {
              return dispatch('actionA').then(() => {
                  commit('someOtherMutation')
              })
          }
      }

      //async
      actions: {
          async actionA ({ commit }) {
              commit('gotData', await getData())
          },
          async actionB ({ dispatch, commit }) {
              await dispatch('actionA') // 等待 actionA 完成
              commit('gotOtherData', await getOtherData())
          }
      }
  </pre>
  <h3>getters</h3>
  <p>getters對state優化取值</p>
  <pre>
      //script 引入
      import {mapGetters} from "vuex";

      //無className寫法
      //1.
      getterName() {
          return this.$store.getters["getterName"];
      },//computed
      //2.
      ...mapGetters(['getterName']),//computed


      //有className寫法
      //1.
      getterName() {
          return this.$store.getters["className/getterName"];
      },//computed
      //2.
      ...mapGetters('className',{
          bindName: 'getterName',
      }),//computed
      //3.
      ...mapGetters('className',['getterName','getterName2'])
  </pre>
  <p>getters裡的stateName要有預設不然filter會報錯</p>
  <pre>
      //store
      const state = {
          stateName: []
      }
      const getters = {
          //1.
          getterName(state) {
              return state.stateName.filter((item, index, array) => index > 3)
          },

          //2.
          getterName(state) {
              return state.homeProductList.filter(function(item, index, array){
                  return index > 3
              })
          },
      }

      //script
      computed: {
          ...mapGetters('className',['getterName'])
      }
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=0rr2EtM44bA&list=PLmOn9nNkQxJEFpabd412vGw_k7-lHlJOP&index=18" target="_blank">vuex模块式开发</a>
    </li>
    <li>
      <a href="https://medium.com/itsems-frontend/vue-vuex4-modules-ddb3eec6b834" target="_blank">Vuex 是什麼</a>
    </li>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10278272" target="_blank">Vuex、Route</a>
    </li>
  </ul>
</template>

<style></style>
