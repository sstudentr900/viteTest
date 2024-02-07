<template>
  <h2>Composition_sfc_computed</h2>
  <ul>
    <li>computed 是用來重組或計算資料不應該異步請求或修改dom</li>
    <li>computed 會自動響應ref</li>
    <li>computed 屬性因該是只讀</li>
    <li>computed 無法在template傳參,要傳參請用函數傳直</li>
  </ul>
  <pre class="prettyprint">
      import {computed} from "@vue/reactivity";
      import { ref,reactive,watch,computed } from 'vue';

      //重組
      const name = ref('mike'); 
      const data3 = computed(()=>{
        return `請叫我${name.value}`;
      });
      setTimeout(() => {
        data.value = 'andy';
      }, 1000);

      //計算
      const idx = ref(0); 
      const data2 = computed(()=>{
        return idx.value > 3 ? idx.value : 3
      });
      setTimeout(() => {
        idx.value = 8;
      }, 1000);
    
      //get,set
      const count2 = ref(1); 
      const plusOne = computed({
        get:()=>`數字是${count2.value}`,
        set:(val)=>{
          count2.value = val
        },
      });
      setTimeout(() => {
        //plusOne 設定值
        plusOne.value = 5;
      }, 1000);
    
    
    <!-- <h1>重組{{ data3 }}</h1>
    <h1>計算{{ data2 }}</h1>
    <h1>plusOne get{{ plusOne }}</h1>
    <h1>count2會被computed修改{{ count2 }}</h1> -->
  </pre>
  <hr>
  <h2>computed 計算屬性</h2>
  <h3>畫面更新會觸發一般函數</h3>
  <input type="text" v-model="test">
  <hr>
  <h3>數字轉百分比(一般函數)</h3>
  <p>一般函數=>畫面更新都會觸發一般函數</p>
  <input type="text" v-model="num">
  <p>{{ numFn() }}</p>
  <hr>
  <h3>數字轉百分比(computed)</h3>
  <p>計算返回該值</p>
  <p>不要重新給值</p>
  <p>不要seilde-effect 不要污染到變數</p>
  <p>computed=>監聽變數改變才會觸發computed</p>
  <input type="text" v-model="num">
  <p>{{ numFn2 }}</p>
  <hr>
  <h3>computed get set</h3>
  <input type="text" v-model="fullName">
  <p>{{firstName}} {{lastName}}</p>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=9HLPU8a85fw&list=PLSCgthA1AnifSzKdpV4FWq1pLVF4FbZ4K&index=7">computed 計算屬性</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=gJF5Cf2fz1A">定義資料 ref、reactive、computed 深度探討</a>
    </li>
  </ul>
  <hr>
  <h2>option_hml_computed</h2>
  <p>computed的更新條件是原始資料有變更才會更新</p>
  <pre class="prettyprint">
    <!-- <div id='app'>
      <p>methods: {{ num() }}</p>
      <p>computes: {{ run }}</p>
    </div>
    var App = {
      data() {
        return {
          count: 0,
          four: 4,
        }
      },
      methods: {
        num() {
          console.log('isMethods');
          return this.four + this.count;
        }
      },
      computed: {
        run() {
          console.log('isComputed');
          return this.four + this.count;
        }
      }
    };
    Vue.createApp(App).mount('#app') -->
  </pre>
  <h3>option_hml_搜尋</h3>
  <pre class="prettyprint">
    <!-- <div id='app'>
      <input type="search" v-model="search">
      <ul>
        <li v-for="item in filter">
          {{ item.name }}-{{ item.price }}
        </li>
      </ul>
    </div> 
    var App = {
      data() {
        return {
          search: '',
          products: [
            {
              name: '上衣',
              price: 500,
            },
            {
              name: '褲子',
              price: 700,
            },
            {
              name: '鞋子',
              price: 2000,
            },
            {
              name: '襪子',
              price: 450,
            },
          ],
        }
      },
      computed: {
        filter() {
          console.log('isComputed');
          return this.products.filter(item =>
            item.name.match(this.search)
          )
        }
      }
    };
    Vue.createApp(App).mount('#app')-->
  </pre>
  <h3>option_hml_getter與setter</h3>
  <ol>
    <li>getter：將data資料取出到comliuted運算完之後渲染到畫面</li>
    <li>setter：把資料(以下範例使用methods)運算完，傳回data</li>
  </ol>
  <pre class="prettyprint">
    <!-- <div id="app">
      <ul>
        <li v-for="product in products">
          {{ product.name }} / {{ product.price }}
          <button type="button" @click="addToCart(product)">+</button>
        </li>
      </ul>
      <h3>total 的值：{{ total }}</h3>
      <h3>Computed Getter, Setter</h3>
      computed sum 的值:
      <input type="number" v-model.number="num">
      <button type="button" @click="total = num">更新</button><br>
      total 的值：{{ total }}<br>
      computed sum 的值:：{{ sum }}
    </div>
    var App = {
      data() {
        return {
          products: [{
            name: '上衣',
            price: 500,
          }, {
            name: '褲子',
            price: 700,
          }, {
            name: '鞋子',
            price: 2000,
          }, {
            name: '襪子',
            price: 450,
          },],
          carts: [],
          sum: 0,
          num: 20,
        }
      },
      computed: {
        total: {
          get() {
            let total = 0;
            this.carts.forEach(item => {
              total += item.price;
            });
            return this.sum || total;
          },
          set(val) {
            console.log('val') // num 的20
            this.sum = val; // num 的20,傳回 data 的 sum
          }
        },
      },
      methods: {
        addToCart(product) {
          this.carts.push(product);
        },
      }
    };
    Vue.createApp(App).mount('#app') -->
  </pre>
  <hr>
  
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://vuejs.org/tutorial/#step-2" target="_blank">vue 官網</a>
    </li>
    <li>
      <a href="https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project" target="_blank">vite 官網</a>
    </li>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10280361" target="_blank">Vue.js 從零開始</a>
    </li>
    <li>
      <a href="https://stackoverflow.com/questions/61452458/ref-vs-reactive-in-vue-3" target="_blank">ref vs reactive</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=rNQIA0Fe9KQ&ab_channel=MikeCheng" target="_blank">Vue3 + Vite 快速上手</a>
    </li>
  </ul>
  <hr>
</template>
<script setup>
  import {computed,ref} from 'vue'

  //畫面更新會觸發一般函數
  const test = ref(1)

  //一般函數=>畫面更新都會觸發numFn函數
  const num = ref(0.6)
  const numFn = ()=>{
    console.log('一般函數')
    //不是數字
    if(Number.isNaN(num.value*100)) return num.value;
    //是數字
    return `${num.value*100}%`;
  }

  //computed=>監聽變數改變才會觸發numFn2函數
  const numFn2 = computed(()=>{
    console.log('computed')
    //不是數字
    if(Number.isNaN(num.value*100)) return num.value;
    //是數字
    return `${num.value*100}%`;
  })

  //computed get set
  const firstName = ref('john')
  const lastName = ref('Doe')
  const fullName = computed({
    get(){
      //取值
      return `${firstName.value} ${lastName.value}`
    },
    set(newName){
      //設定值
      const [newfirstName,newlastName] = newName.split(' ')
      firstName.value = newfirstName
      lastName.value = newlastName
    }
  })

</script>
<style></style>
