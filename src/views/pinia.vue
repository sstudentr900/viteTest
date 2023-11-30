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
  <h2>Vuex</h2>
  <img src="https://vuex.vuejs.org/vuex.png" alt="">
  <p>主要以四個核心概念——State、Getters、Mutations、Actions——所組成， Modules 可再進行模組化</p>
  <pre class="prettyprint">
    <!-- <xmp> -->
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
    <!-- </xmp> -->
  </pre>
  <h3>路由 beforeEnter 發送 API</h3>
  <p>將導覽項目路由規劃成巢狀結構，直接在父層路由發送 API。</p>
  <pre class="prettyprint">
    <!-- <xmp> -->
      {
          path: "/urlName",
          component: urlName,
          beforeEnter: async (to, from, next) => {
              //dispatch 呼叫 action
              await store.dispatch("fetchBookList");
              next();
          },
      },
    <!-- </xmp> -->
  </pre>
  <h3>取得state的值</h3>
  <pre class="prettyprint">
    <!-- <xmp> -->
      //className 分類別名
      //stateName state名
      //script 引入
      import {mapState} from "vuex";

      //1.
      bindName() {
          return this.$store.state.className.stateName;
      },//computed
      <tageName :items="stateName"></tageName>        //template 使用data

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
    <!-- </xmp> -->
  </pre>
  <h3>取不到mapState</h3>
  <pre class="prettyprint">
    <!-- <xmp> -->
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
    <!-- </xmp> -->
  </pre>
  <h3>Mutaitions</h3>
  <p>commit 呼叫 mutation 的方法。</p>
  <pre class="prettyprint">
    <!-- <xmp> -->
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
    <!-- </xmp> -->
  </pre>
  <h3>Actions</h3>
  <p>dispatch 呼叫 action 的方法</p>
  <p>這邊可以做非同步處理，例如 AJAX</p>
  <pre class="prettyprint">
    <!-- <xmp> -->
      //1.
      this.$store.dispatch('className/actionsName')   //mounted 執行非同步
      ...mapState('className', ['stateName'])         //computed 取得data
      <tageName :items="stateName"></tageName>        //template 使用

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
    <!-- </xmp> -->
  </pre>
  <p>組合 actions</p>
  <pre class="prettyprint">
    <!-- <xmp> -->
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
    <!-- </xmp> -->
  </pre>
  <h3>getters</h3>
  <p>getters對state優化取值</p>
  <pre class="prettyprint">
    <!-- <xmp> -->
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
    <!-- </xmp> -->
  </pre>
  <p>getters裡的stateName要有預設不然filter會報錯</p>
  <pre class="prettyprint">
    <!-- <xmp> -->
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
    <!-- </xmp> -->
  </pre>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=0rr2EtM44bA&list=PLmOn9nNkQxJEFpabd412vGw_k7-lHlJOP&index=18" target="_blank">vuex模块式开发</a>
    </li>
    <li>
      <a href="https://medium.com/itsems-frontend/vue-vuex4-modules-ddb3eec6b834" target="_blank">Vuex 是什麼</a>
    </li>
  </ul>
  <hr>
  <h2>pinia</h2>
  <h3>pinia 寫法</h3>
  <p>位置 stores/counter.js</p>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <!-- <script> 
        import { defineStore } from 'pinia';
        import { computed,ref } from 'vue';
        import axios from 'axios';
        
        //pinia 寫法
        export const useCounterStore = defineStore({
          id: 'counter',//必須
          state: () => ({
            counter: 0
          }),
          getters: {
            doubleCount: (state) => state.counter * 2
          },
          actions: {
            increment() {
              this.counter++
            }
          }
        })
      </script> -->
    <!-- </xmp> -->
  </pre>
  <h3>pinia 引用</h3>
  <p>位置 app.vue</p>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <!-- <script setup> -->
        import {useCounterStore} from "./stores/counter.js";
        //執行
        const store2 = useCounterStore();
        //累加
        const clickAdd = ()=>{
          store2.increment();
        }
        console.log(store2.increment());
      <!-- </script> -->
      <template>
        <h2>取counter值: {{store2.$state.counter}}</h2>
        <button @click="clickAdd">clickAdd</button>
      </template>
    <!-- </xmp> -->
  </pre>
  <h3>pinia compositionAPI 寫法</h3>
  <p>位置 stores/counter.js</p>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <!-- <script> -->
        import { defineStore } from 'pinia';
        import { computed,ref } from 'vue';
        import axios from 'axios';
        
        //compositionAPI 寫法
        export const useCounterStore2 = defineStore('counter',()=>{
          const counter = ref(0); 
          const cardList = ref([]);
          const doubleCount = computed(()=>{
            return counter*2
          });
          const increment= ()=>{
            counter.value++
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
            increment,
            doubleCount,
            cardList,
            fetchApiData
          };
        });
      <!-- </script> -->
    <!-- </xmp> -->
  </pre>
  <h3>pinia compositionAPI 引用</h3>
  <p>位置 app.vue</p>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <!-- <script setup> -->
        import { storeToRefs } from "pinia";
        import {useCounterStore} from "./stores/counter.js";
        const store = useCounterStore();
        // console.log(store.counter);
        // console.log(store);
        //解構ref後會失效響應所以要在重新包裝響應(storeToRefs)
        const {cardList} = storeToRefs(store);
      
        //或是區分ref要包裝,函數不用
        // const {increment} = store;
      <!-- </script> -->
      
      <template>
        <h2>取counter值: {{store.counter}}</h2>
        <button @click="store.increment">clickAdd</button>

        <h2>get axios data</h2>
        <pre>
          {{store.cardList}}
        </pre>
        <button  @click="store.fetchApiData">get axios data</button>

        <h2>解構後使用方式</h2>
        <button  @click="fetchApiData">get axios data</button>
      </template>
    <!-- </xmp> -->
  </pre>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=_Vvi9EVtuW4&ab_channel=MikeCheng" target="_blank"> Pinia 的全域資料管理</a>
    </li>
  </ul>
  <hr>
  <h2>Pinia 的全域資料管理</h2>
  <p>核心概念state getters actions</p>
  <br>
  <h3>安裝 Pinia 套件</h3>
  <pre class="prettyprint">
    <!-- <xmp> -->
      npm install pinia
    <!-- </xmp> -->
  </pre>
  <hr>
  <h3>Pinia 建立</h3>
  <p>main.js </p>
  <pre>
    //main.js
    import { createPinia } from 'pinia'
    app.use(createPinia());    
  </pre>
  <hr>
  <h3>新增store檔案</h3>
  <p>src/stores/use檔案.js 新增檔案</p>
  <p>id 必須</p>
  <pre>
    //檔案.js

    import {computed,reactive,ref,watch} from 'vue'
    import { defineStore } from "pinia";

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
      }
    })

    
    //composition api 寫法
    export const useCounterStore = defineStore('counter',()=>{
      const counter = ref(0)
      //計算值
      const doubleCount = computed(()=>{
        return counter.valu*2
      })
      //修改值，異布，邏輯
      const addCount = ()=>{
        counter.valu++
      }
      return {
        counter,
        addCount,
        doubleCount,
      }
    })
  </pre>
  <hr>
  <h3>引用 store</h3>
  <p>取變數 store.$state.counter</p>
  <p>使用函數 store.addCount</p>
  <p>引用options: {{ store.$state.counter }}</p>
  <p>引用composition: {{ store.counter }}</p>
  <pre>
    //stores/count.js
    import { defineStore } from "pinia";
    import axios from 'axios'
    export const useCounterStore = defineStore('counter',()=>{
      const counter = ref(0)
      const addCount = ()=>{
        counter.value++
      }
    
      return {
        counter,
        addCount,
      }
    })

    //script
    import {useCounterStore} from '../stores/count.js';
    const store = useCounterStore()
    console.log(store)
    const clickAdd = ()=>{
      //使用封裝在Store裡的函數
      store.addCount()
    }

    //template
    button @click="clickAdd"
  </pre>
  <button @click="clickAdd">clickAdd</button>
  <hr>
  <h3>fetch</h3>
  <pre>
    //stores/count.js
    import { defineStore } from "pinia";
    import axios from 'axios'
    export const useCounterStore = defineStore('counter',()=>{
      const data = ref([]);
      const errorMessage = ref('');
      const fetchInit = async()=>{
        try{
          const res = await axios.get(
            'https://60bd9841ace4d50017aab3ec.mockapi.io/api/post_card'
          );
          data.value = res.data
        }catch(error){
          errorMessage.value = 'api 錯誤'
        }
      }
    
      return {
        fetchInit,
        data,
        errorMessage
      }
    })

    //script
    import {useCounterStore} from '../stores/count.js';
    const store = useCounterStore()
    console.log(store)

    //template
    按鈕 button @click="store.fetchInit"
  </pre>
  <p>{{ store.data }}</p>
  <button @click="store.fetchInit">fetchInit</button>
  <hr>
  <h3>pinia 解構</h3>
  <p>解構資料響應式會出問題需要加storeToRefs</p>
  <p>只能接變數不能接函數</p>
  <p>{{ counter }}</p>
  <p>{{ doubleCount }}</p>
  <button @click="addCount">解構函數</button>
  <hr>
  <h3>pinia 監聽</h3>
  <hr>
  <h3>pinia subscribing 取的pinia狀態</h3>
  <hr>
  <h4>參考</h4>
  <ul>
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
  <h2>pinia subscribing 取的pinia狀態</h2>
  <pre>
    <!-- <xmp> -->
      ## Store
      ```js
      //Store index.js
      export default new Vuex.Store({
          state: {
              bookList: {},
          },
          //mutation 將資料直送並賦值給 state
          mutations: {
              bookList(state, books) {
                  state.bookList = books;
              },
          },
          //action 發送 API 後將資料以 commit 呼叫 mutation
          actions: {
              async fetchBookList(context) {
                  //get Date
                  const books = await GET();
                  //將資料以 commit 呼叫 mutation
                  context.commit("bookList", books);
              },
          },
          //getters 取得 state 資料
          getters: {
              allBooks: (state) => state.bookList.list,
          },
      })
      ```

      ## 在元件內的 computed取用 getters 的資料
      ```js
      computed: {
          books() {
              return this.$store.getters["allBooks"];
          },
      },
      ```

      ## 在router beforeEnter取用的資料
      ```.js
      {
          path: "/book",
          component: MainPage,
          //beforeEnter 進入每個路由之前
          beforeEnter: async (to, from, next) => {
              //執行 Store actions
              await store.dispatch("fetchBookList");
              next();
          },
      },
    <!-- </xmp> -->
  </pre>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10278272" target="_blank">Vuex、Route</a>
    </li>
  </ul>
  <hr>
</template>

<style></style>
