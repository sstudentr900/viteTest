<script setup>
  import {computed,reactive,ref,watch,watchEffect} from 'vue'
  import props5 from '../components/props5.vue'
  import props6 from '../components/props6.vue'
  //父傳子
  const meg = ref('')

  //子傳父
  const updateHandler=(value)=>{
    console.log(value)
  }

  //model傳值 自訂義組件的資料綁定
  import props2 from '../components/props2.vue'
  const num = ref('133')

  //props/emits
  import props3 from '../components/props3.vue'
  const name = ref('kk')
  const updateName = (newName)=>{
    name.value = newName
  }

  //props no emits 執行父函數
  import props4 from '../components/props4.vue'
  const name2= ref('kk')
  const updateName2 = (newName)=>{
    name2.value = newName
  }

  //class 切換
  import props7 from '../components/props7.vue'

</script>
<template>
  <h2>Composition_sfc_props父傳子</h2>
  <pre>
      #父
      &lt;script setup>
        import propHtml from '@/components/propHtml.vue';
      &lt;/script>
      &lt;template>
        &lt;propHtml alt="logo"> &lt;/propHtml>
      &lt;/template>

      #子
      &lt;script setup>
        //1.array 接收父值
        const props_array = defineProps(['alt']);
      
        //2.object 接收父值
        const props_object = defineProps({
          str:{
            type: String,
            default: '',
          },
          bool:{
            type: Boolean,
            default: false,
          },
          obj:{
            type: Object,
            //obj 定義{}
            default: ()=>({}),
          },
          arr:{
            type: Array,
            //arr 定義[]
            default: ()=>[],
          }
        });
      &lt;/script>
      &lt;template>
        &lt;h2 :alt=props_array.alt>&lbrace;&lbrace;props_array.alt&rbrace;&rbrace;&lt;/h2>
      &lt;/template>
  </pre>
  <h2>Composition_sfc_emit子傳父</h2>
  <pre>
    #子
    &lt;script setup>
      //1.array 傳父
      //defineEmits 定義監聽addInt
      const emit_array = defineEmits(['addInt'])
    
      //2.object 傳父
      const emit_object = defineEmits({
        addInt:(value)=>{
          if(value==3){
            console.log('emit_true',value)
            return true;
          }else{
            //還是可以往上傳但回出現錯誤訊息
            console.log('emit_false',value)
            return false;
          }
        }
      })

      //子傳父
      const handleAddClick = ()=>{
        const coin = 3+4;
        emit_array('addInt',coin)
      }
    &lt;/script>
    &lt;template>
      &lt;button @click="handleAddClick">click &lt;/button>
    &lt;/template>

    #父 監聽addInt
    &lt;script setup>
      import propHtml from '@/components/propHtml.vue';
      import {ref} from 'vue';
      const resInt = ref(0)
      const callBack =(res)=>{
        resInt.value = res;
        console.log('callBack=>',res)
      }
    &lt;/script>
    &lt;template>
      &lbrace;&lbrace;resInt&rbrace;&rbrace;
      &lt;propHtml @addInt="callBack"> &lt;/propHtml>
    &lt;/template>
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=LxWb_BRg-aM&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=12" target="_blank">【黑马程序员】前端Vue3小兔鲜实战项目-Day1-12-组合式API下的父子通信 子传父
      </a>
    </li>
  </ul>
  <h2>Composition_sfc_雙向綁定</h2>
  <pre>
    #父 
    &lt;script setup>
      import propHtml from '@/components/propHtml.vue';
      import {ref,computed} from 'vue';
      const name = ref('mike');
      const updateName = (newName)=>{
        name.value =newName
      }
    &lt;/script>
    &lt;template>
      &lt;propHtml :name='name' @change-name='updateName'/>
    &lt;/template>
      

    #子 
    &lt;script setup>
      const props2 = defineProps({
        name:{
          type:String,
          default: '',
        }
      });
      const emit2 = defineEmits(['change-name'])
      const changeName = ()=>{
        emit2('change-name','jacky')
      }
    &lt;/script>
    &lt;template>
      &lt;p>&lbrace;&lbrace;props2.name&rbrace;&rbrace;&lt;/p>
      &lt;button @click="changeName">change name&lt;/button>
    &lt;/template>
  </pre>
  <h2>Composition_sfc_v-model</h2>
  <pre>
    //父
    &lt;script setup>
      import propHtml from '@/components/propHtml.vue';
      import {ref,computed} from 'vue';
      const num = ref('123');
    &lt;/script>
    &lt;template>
      &lt;propHtml v-model='num'/>
      &lt;p>&lbrace;&lbrace;num&rbrace;&rbrace;&lt;/p>
    &lt;/template>
    

    //子
    &lt;script setup>
      const props = defineProps(['modelValue']);
      const emit = defineEmits(['update:modelValue']);
    &lt;/script>
    &lt;template>
      &lt;input type="text" :value="props.modelValue" @input="emit('update:modelValue',$event.target.value)">
    &lt;/template>
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10280361" target="_blank">Vue.js 從零開始</a>
    </li>
    <li>
      <a href="https://book.vue.tw/CH2/2-2-communications.html">元件之間的溝通傳遞</a>
    </li>
    <li>
      <a href="https://eudora.cc/posts/210303/">Components 間的資料傳遞</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=ureFPVghH30&ab_channel=MikeCheng" target="_blank">Vue3 + Vite 快速上手 Get Startrd EP3 - props</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=gbtu3SHZvkk&list=PLSCgthA1AnifSzKdpV4FWq1pLVF4FbZ4K&index=9">父子組件溝通、傳資料</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=ureFPVghH30">components / props / emit</a>
    </li>
    <li>
      <a href="https://book.vue.tw/CH2/2-2-communications.html">元件之間的溝通傳遞</a>
    </li>
    <li>
      <a href="https://eudora.cc/posts/210303/">Components 間的資料傳遞</a>
    </li>
    <li>
      <a
        href="https://penueling.com/%E6%8A%80%E8%A1%93%E7%AD%86%E8%A8%98/vue3-%E7%9A%84%E8%B3%87%E6%96%99%E7%8B%80%E6%85%8B%E7%AE%A1%E7%90%86%EF%BC%8Cprovide-inject%E3%80%81vuex/">Vue3的資料狀態管理，provide
        / inject、vuex、props</a>
    </li>
    <li>
      <a
        href="https://linxinemily.github.io/2019/06/23/Vue%E7%88%BA%E5%AD%AB%E7%B5%84%E4%BB%B6%E8%B3%87%E6%96%99%E5%82%B3%E9%81%9E/">Vue
        $attrs/$listeners 爺孫組件資料傳遞</a>
    </li>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10280361" target="_blank">Vue.js 從零開始</a>
    </li>
  </ul>
  <hr>
  <h2>One-Way Data Flow 單向資料流</h2>
  <p>上給下,使用Props函數更新父name3</p>
  <pre>
    //父 
    &lt;script setup>
      import propHtml from '@/components/propHtml.vue';
      import {ref,computed} from 'vue';
      const name3 = ref('mike');
      const updateName2 = (newName)=>{
        name3.value =newName
      }
    &lt;/script>
    &lt;template>
      &lt;propHtml :name='name3' :updateName3='updateName2'/>
    &lt;/template>

    //子
    &lt;script setup>
      const props3 = defineProps({
        name:{
          type: String,
          default: '',
        },
        updateName3:{
          type:Function,
          default: ()=>{},
        }
      });
    &lt;/script>
    &lt;template>
      &lt;p>&lbrace;&lbrace;props3.name&rbrace;&rbrace;&lt;/p>
      &lt;button @click="props3.updateName2('jacky')">updateName&lt;/button>
    &lt;/template>
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10273655" target="_blank">One-Way Data Flow 單向資料流</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=firPRbhoX7o">v-model 資料的雙向綁定 / 自訂義組件的資料綁定 / One-Way Data Flow 單向資料流</a>
    </li>
  </ul>
  <hr>
  <h3>defineExpose 子組件暴露變數給父組件使用</h3>
  <pre>
    //父組件
    #script setup
    import {ref} form 'vue'
    import sontemplate form './sontemplate.vue' //子組件
    const comRef = ref(null)

    //組件掛載完才能獲取
    onMounted(()=>{
      console.log(comRef) //取得子組件name值
    })

    #template
    &lt;sontemplate ref='comRef'&gt;


    //子組件
    #script setup
    import {ref} form 'vue'
    const name=ref('name')
    defineExpose({
      name
    })
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=4DEbi_DBjUM&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=13">API-模版引用</a>
    </li>
  </ul>
  <hr>
  <h2>父傳孫(provide/nject)</h2>
  <pre>
    //父 
    &lt;script setup>
      import { inject, reactive, computed } from "vue";

      //1.傳遞值
      provide('傳遞名','傳遞值')

      //2.provide('傳遞名1','傳遞函數')
      const count = ref(0)
      const setCount = ()=>{
        count.value++
      }
      provide(setCount-key,setCount)
    &lt;/script>

    //子 
    &lt;script setup>
      import { inject } from "vue";

      //1.取值
      const value = inject('傳遞名')

      //2.取函數
      const setCount = inject(setCount-key)
    &lt;/script>
    &lt;template>
      &lt;div>&lbrace;&lbrace; value &rbrace;&rbrace;&lt;/div>
      &lt;div>&lt;button @click='setCount'> 修改count &lt;/button>/div>
    &lt;/template>
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=Bdqvd3c1pqg&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=14">【黑马程序员】前端Vue3小兔鲜实战项目-Day1-14-组合式API-provide和inject</a>
    </li>
  </ul>
  <!-- <h2>各板本Props</h2>
  <pre>
      //Options
      export default {
        props: ['title'],
        setup(props) {
        }
      }

      //Composition API(組合式api)
        const props = defineProps({
          data:{
            type: object,
            default:()=>({})
          }
        })
  </pre>
  <hr> -->
  <!-- <h2>Options_sfc_props父傳子</h2>
  <p>接收父方式可使用以下型別String,Number,Boolean,Array,Object,Date,Function,Symbol</p>
  <pre>
      #父 template
      //enterName1內層引用名子="外層的值"
      //: v-bind 綁定變數
      //childName1內層引用名子,parentName1外層引用的名子
      &lt;propHtml enterName1="All" :childName1="parentName1">&lt;/propHtml>

      #子 script
      export default {
        //1.接收父的值方法[]
        props: [
          'childName1',
          'enterName1'
        ],

        //2.接收父的值方法{type}
        props: {
          childName1: String,
          enterName1: String
        },

        //3.接收父的值方法{type,required,default}
        props: {
          childName1: {
            type: String,
            required: true //為必要屬性
          },
          enterName1: {
            type: String,
          },
        }
      }
  </pre> -->
  <!-- <h3>Options_html_props</h3>
  <pre>
      <div id="app">
        <h4>{{ text }}</h4>
        <con-tainer :test-props="demo"></con-tainer>
      </div> 
      var app = Vue.createApp({
        data() {
          return {
            text: "外部元件",
            demo: "外部元件傳遞的文字"
          };
        }
      });
      app.component("ConTainer", {
        props: ["testProps"],
        template: `<div>
          <h4>{{ text }}</h4><h3>{{ testProps }}<h3>
          <h3>value: {{ typeof testProps }} </h3>
          <input type="text" v-model="testProps">
        </div>`
      });
      app.mount("#app");
  </pre> -->
  <!-- <h3>Options_html_props型別驗證</h3>
  <pre>
      <div id="app">
        <area-component :pro-a="fun" :pro-b="text" pro-c="num" :pro-d="num">
        </area-component>
      </div> 
      const areaComponent = {
        props: {
          proA: Function,
          proB: [String, Number],   //多個型別檢查
          proC: {
            type: String,
            required: true //必要值 物件形式可以設立多個條件
          },
          proD: {
            type: Number,
            default: "hello"  //預設值
          }
        },
        template: `{{ proA }} <br> {{ proB }} <br> {{ proC }} <br> {{ proD }}`
      };
      var app = Vue.createApp({
        data() {
          return {
            num: 500,
            text: "小明",
            boo: true,
            fun: () => {
              return "a";
            },
            test: 100
          };
        },
        components: {
          areaComponent
        }
      });
      app.mount("#app");
  </pre> -->
  <!-- <h2>Options_sfc_emit 子傳父</h2>
  <pre>
      //父 template
      //@ v-on 監聽事件
      &lt;emitHtml @childName="callBack">&lt;/emitHtml>

      //子 template
      //使用$emit 傳給父元件
      &lt;input @input="$emit('childName', $event.target.value)"/>
  </pre> -->
  <!-- 
  <h3>Options_html_emit驗證</h3>
  <pre>
      <div id="app">
        {{ text }}：{{ num }}
        <br>
        <br>
        <out-text @button-click="add"></out-text>
        <br>
        <out-text2 @button-click="add"></out-text2>
      </div> 
      var app = Vue.createApp({
        data() {
          return {
            text: "外部 num",
            num: 0,
          }
        },
        methods: {
          add(num) {
            this.num = this.num + num;
          }
        }
      });
      app.component("outText", {
        template: `{{ text }}：<button @click="$emit('buttonClick', num)">emit add</button>`,
        data() {
          return {
            text: "內部元件",
            num: 3,
          };
        },
        //因為無法正確追蹤你帶入的變數內層的num，就會跳出這個警告提示，
        //這時只要加上emits:['buttonClick']就能消除警告。
        emits: ['buttonClick']
      });
      app.component("outText2", {
        template: `{{ text }}：<button @click="$emit('buttonClick', '1')">test</button>`,
        data() {
          return {
            text: "emits",
            num: 3,
          };
        },
        //驗證事件參數傳出去的值，是否符合預期的型別
        emits: {
          buttonClick: (num) => {
            if (typeof num !== 'string') {
              console.warn('buttonClick 事件參數型別須為 String')
            }
            return typeof num === 'string'
          }
        }
      });
      app.mount("#app");
  </pre> -->
  <!-- <h3>Options methods</h3>
  <pre>
      //子
      &lt;emitHtml @change='searchBook'>&lt;/emitHtml>
      methods: {
        searchBook(event) {
          this.$emit("childName", event.target.value)
        }
      }
  </pre> -->

  <!-- <h2>Options_sfc_v-model 與元件的雙向綁定 (Vue 3.x 新增)</h2>
  <pre>
      //父 template
      //message 子層引用名子 parentName7父層引用的名子
      &lt;emitHtml3 v-model:message="parentName7">&lt;emitHtml3>

      //子 template
      &lt;button @click="clickFn">&lt;button>
      //子 script
      export default {
        props: ['message'],
        methods: {
          clickFn(){
            this.$emit("update:message",'childValue')
          }
        },
      }
  </pre> -->

  <!-- <h2>Options_sfc_update</h2>
  <pre>
      //子元件
      <label>搜尋書本：
        <input type="text" :value="keyword" @input="$emit('update:keyword', $event)" />
      </label>

      //父元件
      <BookList :keyword="searchText"
      @update:keyword="searchText = $event.target.value" />
  </pre>
  <hr> -->
  <!-- <hr> -->
  <!-- <h2>父子組件溝通、傳資料</h2>
  <p>defindProps接父值</p>
  <p>defineEmits傳父值</p>
  <input type="text" v-model="meg">
  <h3>父傳子 meg是文字</h3>
  <props5 data2="meg"/>
  <props5 :data="'meg'"/>
  <h3>父傳子 meg是變數</h3>
  <props5 :data="meg"/>
  <hr>
  <h3>父傳子 class 切換</h3>
  <props7 color="red"/>
  <props7 color="blue"/>
  <hr>
  <h3>子傳父</h3>
  <p>使用defineEmits定義子傳父</p>
  <props6 :data="meg" @update="updateHandler"/>
  <hr>
  <h3>model傳值 (自訂義組件的資料綁定)</h3>
  <props2 v-model="num"/>
  {{num}}
  <hr>
  <h3>父子傳值</h3>
  <props3 :name="name" @changeName='updateName'/>
  <hr>
  <h3>One-Way Data Flow 單向資料流(props no emits)</h3>
  <p>把父變數傳給子達到同步</p>
  <props4 :name="name2" :updateName='updateName2'/> -->
  <!-- <h3>拋給父元件處理</h3>
  <pre>
    //子元件
    <label>搜尋書本：
      <input type="text" :value="inputText" @input="$emit('searchBook', $event)" />
    </label>
    //父元件
    <BookList :inputText="searchText" @searchBook="searchText = $event.target.value" />
  </pre> -->

  <!-- <h2>資料傳遞</h2>
  <p>將內層資料傳遞到外層元件上使用</p>
  <img src="https://i.imgur.com/BVjQ2Ok.png" alt="">
  <pre>
    <div id="app">
      <h3> {{ title }} </h3>
      {{ text }}：
      <button type="button" @click="add">add</button>
      {{ num }}
      <br>
      <br>
      <out-text @button-click="add"></out-text>
    </div> 
    var app = Vue.createApp({
      data() {
        return {
          title: "",
          text: "外部元件",
          num: 0,
        }
      },
      methods: {
        add(addtext) {
          this.num++;
          this.title = addtext;
          //addtext 沒有值傳起來就會變成 事件物件 [object PointerEvent]
        }
      }
    });
    app.component("outText", {
      template: `<button @click="click">emit add</button>`,
      data() {
        return {
          text: "內部元件",
          insideText: "內部元件傳遞文字"
        };
      },
      methods: {
        click() {
          this.$emit('buttonClick', this.insideText);
        }
      }
    });
    app.mount("#app");
  </pre>  -->
  
  <!-- <h2>provide/inject 傳值(隔山打牛)</h2>
  <ol>
    <li>provide傳遞的資料</li>
    <li>inject接收的子元件</li>
  </ol>
  <pre>
      <div id="app">
        <h2>app</h2>
        <input type="text" v-model="text">
        <list-header></list-header>
      </div> 
      var app = Vue.createApp({
        data() {
          return {
            text: "隔山打牛"
          };
        },
        provide() {
          return {
            provideText: this.text,
            //provide輸出的資料並不會隨著父層資料更新而改變，要透過Vue.computed()
            provideText2: Vue.computed(() => this.text)
          };
        }
      });
      app.component("list-header", {
        template: `
          <div v-for="i in 3">
            list-header:
            <list-main></list-main>
          </div>`,
        components: {
          "list-main": {
            template: `
            <div>
              list-main:
              <list-footer></list-footer>
            </div>`,
            components: {
              "list-footer": {
                inject: ["provideText", "provideText2"],
                template: `
                <div>list-footer: {{ provideText }} </div>
                <div>list-footer-computed: {{ provideText2.value }}</div>`
              }
            }
          }
        }
      });
      app.mount("#app");
  </pre> -->

  <!-- <h2>孫傳爺（emit / listeners）</h2>

  <h2>全域(vuex)</h2>

  <h2>全域(eventBus)</h2>
  <pre>
      //main.js
      import mitt from "mitt"; //引入全局跨元件通訊
      var app = createApp(App);
      app.config.globalProperties.eventBus = mitt();//註冊

      //傳script
      this.eventBus.emit('customName', index);

      //接script
      beforeUnmount() {
      // 銷毁監聽
      this.eventBus.off("customName");
      },
      mounted() {
      this.eventBus.on('customName', (msg) => {
      console.log(msg)
      });
      },
  </pre> -->

  <!-- <h2>mitt兩個子元件，彼此需要傳遞</h2>
  <ol>
    <li>npm安裝：npm install --save mitt</li>
    <li>cdn引入 src="https://unpkg.com/mitt/dist/mitt.umd.js"</li>
    <li>定義要傳出去的資料，emitter.emit('componentText', this.componentText);，傳遞component1裡data的componentText的值。</li>
    <li>定義接收emitter.on，(data)裡就是emitter.emit傳出來的值。</li>
  </ol>
  <pre>
      <div id="app">
        <h4>{{ text }}</h4>
        <con-tainer></con-tainer>
        <con-tainer2></con-tainer2>
      </div> 
        const emitter = mitt();
        var app = Vue.createApp({
          data() {
            return {
              text: "外部元件"
            };
          }
        });
        app.component("ConTainer", {
          data() {
            return {
              text: "component1",
              componentText: "由元件1傳入的文字",
            };
          },
          methods: {
            click() {
              emitter.emit('componentText', this.componentText);
            }
          },
          template: `<div>
              <h4>{{ text }}</h4>
              <button @click="click">Click me!</button>
            </div>`
        });
        app.component("ConTainer2", {
          data() {
            return {
              text: "component2",
              componentText: ""
            };
          },
          created() {
            emitter.on('componentText', (data) => {
              this.componentText = data;
            })
          },
          template: `<div>
              <h4>{{ text }}</h4>
              <h4>{{ componentText }}</h4>
            </div>`
        });
        app.mount('#app');
  </pre> -->
  <!-- <script>
      import {
          provide,
          inject,
          reactive,
          computed
      } from "vue";
      import emitHtml from '@/components/emitHtml'
      import propHtml from '@/components/propHtml'
      import emitHtml2 from '@/components/emitHtml2'
      import emitHtml3 from '@/components/emitHtml3'
      import emitHtml4 from '@/components/emitHtml4'

      export default {
          data() {
              return {
                  parentName1: 'parent1',
                  parentName5: 'parentValue',
                  parentName7: 'Hello Vue!',
                  parentName8: 'Hello Vue!'
              }
          },
          components: {
              propHtml,
              emitHtml,
              emitHtml2,
              emitHtml3,
              emitHtml4,
          },
          methods: {
              // 父元件監聽該事件名稱 searchText，獲得即時輸入的結果為 $event.target.value
              parentName2(date) {
                  console.log('$emit', date)
              },
              parentName3(date) {
                  console.log('setup', date)
              },
              parentName4(date) {
                  console.log('methods', date)
              },
              parentName6(date) {
                  this.parentName5 = date
              },
              handler2(params) {
                  console.log('父函數觸發', params)
                      // console.log('父函數觸發')
              },
              handler3(params) {
                  if (typeof(params) == 'string') {
                      this.parentName8 = params
                  }
                  console.log('父函數觸發', params)
              }
          },
          // setup(){
          //     //setup只能访问以下 property：
          //     //props,attrs,slots,emit
          //     provide("provideMsg", "James");
          // },
          provide() {
              return {
                  //輸出的資料並不會與上層資料連動
                  provideMsg: this.parentName8,
                  //與上層資料連動，則需要透過 Vue.computed() 進行包裝
                  provideMsg2: computed(() => this.parentName8)
              }
          }
      }
  </script> -->
</template>
<style></style>
