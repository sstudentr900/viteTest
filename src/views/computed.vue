<template>
  <h2>Composition computed</h2>
  <p>silde-effect 副作用?是用來重組或計算資料不應該異步請求或修改dom</p>
  <p>會自動響應ref</p>
  <p>屬性因該是只讀</p>
  <p>無法在template傳參,要傳參請用函數傳直</p>
  <p>一般函數更新都會觸發函數,computed監聽變數改變才會觸發函數</p>
  <pre>
    &lt;script setup>
      import {ref,computed} from 'vue'
      //原數組
      const list = ref([1,2,3,4])

      //計算後數組
      const computedList = computed(()=>{
        return list.value.filter(item=>item>2)
      })

      //修改數組
      setTimeout(()=>{
        list.value.push(9,10)
      },3000)
    &lt;/script>

    &lt;template>
      &lt;div>原數組,&lbrace;&lbrace; list &rbrace;&rbrace;&lt;/div>
      &lt;div>計算後數組,&lbrace;&lbrace; computedList &rbrace;&rbrace;&lt;/div>
    &lt;/template>
  </pre>
  <h3>範例</h3>
  <div>{{ list }}</div>
  <div>{{ computedList }}</div>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=O1BfveCr6HA&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=7">
        【黑马程序员】前端Vue3小兔鲜实战项目-Day1-07-组合式API-computed
      </a>
    </li>
  </ul>
  <hr>
  <h2>Composition computed 和 一般函數差別</h2>
  <h3>一般函數=>畫面更新都會觸發一般函數</h3>
  <input type="text" v-model="num">
  <p>{{ numFn() }}</p>
  <h3>computed=>監聽變數改變才會觸發computed</h3>
  <input type="text" v-model="num">
  <p>{{ numFn2 }}</p>
  <h3>computed get set</h3>
  <pre>
    &lt;script setup>
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
    &lt;/script>
    &lt;template>
      &lt;input type="text" v-model="fullName">
      &lt;p>&lbrace;&lbrace;firstName&rbrace;&rbrace; &lbrace;&lbrace;lastName&rbrace;&rbrace;&lt;/p>
    &lt;/template>
  </pre>
  <h3>範例</h3>
  <input type="text" v-model="fullName">
  <p>{{firstName}} {{lastName}}</p>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=9HLPU8a85fw&list=PLSCgthA1AnifSzKdpV4FWq1pLVF4FbZ4K&index=7">computed 計算屬性</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=gJF5Cf2fz1A">定義資料 ref、reactive、computed 深度探討</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=rNQIA0Fe9KQ&ab_channel=MikeCheng" target="_blank">Vue3 + Vite 快速上手</a>
    </li>
    <li>
      <a href="https://stackoverflow.com/questions/61452458/ref-vs-reactive-in-vue-3" target="_blank">ref vs reactive</a>
    </li>
  </ul>
  <!-- <hr>
  <h2>option_hml_computed</h2>
  <p>computed的更新條件是原始資料有變更才會更新</p>
  <pre>
    <div id='app'>
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
    Vue.createApp(App).mount('#app')
  </pre>
  <h3>option_hml_搜尋</h3>
  <pre>
    <div id='app'>
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
    Vue.createApp(App).mount('#app')
  </pre>
  <h3>option_hml_getter與setter</h3>
  <ol>
    <li>getter：將data資料取出到comliuted運算完之後渲染到畫面</li>
    <li>setter：把資料(以下範例使用methods)運算完，傳回data</li>
  </ol>
  <pre>
    <div id="app">
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
    Vue.createApp(App).mount('#app')
  </pre> -->
</template>
<script setup>
  import {computed,ref} from 'vue'

  //Composition computed
  //原數組
  const list = ref([1,2,3,4])
  //計算後數組
  const computedList = computed(()=>{
    return list.value.filter(item=>item>2)
  })
  //修改數組
  setTimeout(()=>{
    list.value.push(9,10)
  },3000)


  //Composition computed 和 一般函數差別
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
