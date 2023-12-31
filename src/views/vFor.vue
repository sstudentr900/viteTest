<template>
  <h2>v-for 迴圈渲染與 key 屬性【Proladon】</h2>
  <br>
  <h3>v-for array</h3>
  <ul>
    <li v-for="text in dataList" :key='text'>{{text}}</li>
  </ul>
  <hr>
  <h3>v-for obj</h3>
  <p>for 也可以跑obj</p>
  <ul>
    <li v-for="text in dataObjList" :key='text'>{{text}}</li>
  </ul>
  <p>obj 顯示key</p>
  <ul>
    <li v-for="(value,key,index) in dataObjList" :key='index' v-show="index!==2">
      {{index}}:{{key}}:{{value}}
    </li>
  </ul>
  <hr>
  <h3>:key</h3>
  <p>key的值不能重複的</p>
  <p>key會刪除該元素(p)重新再載入所以動畫會重複執行</p>
  <div>
    <p class="test-cls" :key="test">{{test}}</p>
  </div>
  <p>key的值不能重複的(key,index都會重複,value不會)</p>
  <p>li有動畫時就不會只更換資料而是會重複執行動畫</p>
  <ul>
    <li v-for="(value,key,index) in dataObjList2" class="test-cls" :key="value">
      {{index}}:{{key}}:{{value}}
    </li>
  </ul>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=w6UaYZExkz0&list=PLSCgthA1AnifSzKdpV4FWq1pLVF4FbZ4K&index=6">v-for 迴圈渲染與 key 屬性【Proladon】</a>
    </li>
  </ul>
  <hr>
  <h2>v-for</h2>
  <p>迭代物件中的元素，第二個參數key是鍵值，第三個參數index是索引值</p>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <div id="app">
        <ul>
          <li v-for="(items, key, index) in item">
            {{ items }}:{{ key }}:{{ index }}
          </li>
        </ul>
      </div>
      <!-- <script> -->
        var vm = Vue.createApp({
          data() {
            return {
              item: {
                one: 1,
                two: 2,
                three: 3,
              }
            }
          }
        }).mount('#app')
      <!-- </script> -->
    <!-- </xmp> -->
  </pre>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <div v-for="(item,index) in list" :key='index'>
        <p>index:{{index}} -- id:{{item.id}} -- name:{{item.name}}</p>
      </div>
      <select v-model="select">
        <option v-for="item in list" :key="item.id" :value="item.id">
          {{ item.name }}
        </option>
      </select>

      <!-- <script> -->
        export default {
          data() {
            return {
              select: "",
              list: [
                { id: 1, name: "資料1" },
                { id: 2, name: "資料2" },
                { id: 3, name: "資料3" },
                { id: 4, name: "資料4" },
                { id: 5, name: "資料5" },
              ],
            };
          },
        }
      <!-- </script> -->
    <!-- </xmp> -->
  </pre>

  <h2>遍歷陣列資料</h2>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <div id="app">
        <ul>
          <li v-for="(item, index) in arr">
            {{ item.name }} - {{ index }} - {{ item.id }}
          </li>
        </ul>
      </div>
      <!-- <script> -->
        var vm = Vue.createApp({
          data() {
            return {
              arr: [
                { name: "one", id: "1" },
                { name: "two", id: "2" },
                { name: "three", id: "3" }
              ]
            }
          }
        }).mount('#app')
      <!-- </script> -->
    <!-- </xmp> -->
  </pre>

  <h2>v-for 篩選</h2>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <div id="app">
        <ul>
          <li v-for="item in filterNum">{{ item }}</li>
        </ul>
      </div>
      <!-- <script> -->
        var vm = Vue.createApp({
          data() {
            return {
              num: [1, 2, 3, 4, 5, 6, 7, 8]
            }
          },
          computed: {
            filterNum() {
              return this.num.filter((itemNum) =>
                itemNum % 2 === 0
              );
            }
          }
        }).mount('#app');
      <!-- </script> -->
    <!-- </xmp> -->
  </pre>

  <h2>v-for 一定要加:key</h2>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <div id="app">
        <ul>
          <li v-for="(item, index) in products" :key="item.price">
            {{ index }} - {{ item.name }} - {{ item.price}}
            <input type="text">
          </li>
        </ul>
        <button type="button" @click="reverseArray">反轉</button>
      </div>
      <!-- <script> -->
        var vm = Vue.createApp({
          data() {
            return {
              products: [
                {
                  name: '上衣',
                  price: 500
                },
                {
                  name: '褲子',
                  price: 1000
                },
                {
                  name: '鞋子',
                  price: 2000
                },
                {
                  name: '帽子',
                  price: 2000
                },
              ]
            }
          },
          methods: {
            reverseArray() {
              this.products.reverse();
            }
          }
        }).mount('#app');
      <!-- </script> -->
    <!-- </xmp> -->
  </pre>

  <h2>綁定 key 值：「id」 VS 「index」</h2>
  <ol>
    <li>id 具有唯一性，能直接對應到所屬項目，因此當陣列內容發生變動時，只需要處理增減的資料即可，其他資料仍可繼續複用，不需要重新渲染，進而維持效能。</li>
    <li>index 會跟著陣列內容的長度變化而隨之增減，且 index 具有順序性，所以只要變動其中一筆資料便會連帶影響到其他資料的排序，使得資料必須隨時重新渲染，相對影響效能</li>
  </ol>

  <h2>methods</h2>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <div id='app'>
        <h3>事件觸發：</h3>
        <button @click="clickEvent('isClickEvent')">點擊事件</button>
        <h3>函式觸發：</h3>
        <button @click="callClick">其他函式觸發</button>
      </div>
      <!-- <script> -->
        var App = {
          data() {
            return {
            }
          },
          methods: {
            clickEvent(name) {
              console.log(name, '點擊觸發')
            },
            callClick() {
              this.clickEvent('callClick');
            }
          }
        };
        Vue.createApp(App).mount('#app')
      <!-- </script> -->
    <!-- </xmp> -->
  </pre>

  <h2>使用methods完成簡單購物車</h2>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <div id='app'>
        <!--   <h3>事件觸發：</h3>
                <button @click="clickEvent('isClickEvent')">點擊事件</button>
                <h3>函式觸發：</h3>
                <button @click="callClick">其他函式觸發</button> -->
        <h3>商品列表</h3>
        <ul>
          <li v-for="item in products" :key="item.name">
            {{ item.name }} - {{ item.price }}
            <button @click="addCart(item)">加入購物車</button>
          </li>
        </ul>
        <br>
        <h3>購物車列表</h3>
        <ul>
          <li v-for="product in carts" :key="product.name">
            {{ product.name }}
          </li>
        </ul>
        <h3>總金額：</h3>
        {{ sum }}
      </div>
      <!-- <script> -->
        var App = {
          data() {
            return {
              products: [
                {
                  name: '上衣',
                  price: 300,
                },
                {
                  name: '褲子',
                  price: 500,
                },
                {
                  name: '鞋子',
                  price: 1500,
                },
                {
                  name: '帽子',
                  price: 600,
                },
              ],
              carts: [],
              sum: 0,
            }
          },
          methods: {
            //methods底下的函式，建議都不要用箭頭函式  
            test: (add) => {
              console.log(this) //this變成全域 window
            },
            addCart(add) {
              this.carts.push(add);
              this.total();
            },
            total() {
              let total = 0;
              this.carts.forEach(item => {
                console.log(item.price);
                total += item.price;
              });
              this.sum = total;
            }
          }
        };
        Vue.createApp(App).mount('#app')
      <!-- </script> -->
    <!-- </xmp> -->
  </pre>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10280380">v-if 才做選擇，v-show 全都秀</a>
    </li>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10271774">v-for 註定綁個 key</a>
    </li>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10280361" target="_blank">Vue.js 從零開始</a>
    </li>
  </ul>
  <hr>
</template>
<script setup>
  import {ref} from '@vue/reactivity'
  const dataList=['a','b','c','d']
  const dataObjList= {a:'a1',b:'b1',c:'c1',d:'d1'}
  const dataObjList2= ref({a:'a1',b:'b1',c:'c1',d:'d1'})
  const test = ref('test')
  setTimeout(() => {
    test.value = 'apple'
  }, 2000);
  setTimeout(() => {
    dataObjList2.value = {a:'a3',b:'b4',c:'c5',d:'d6'}
  }, 2000);
</script>
<style>
  .test-cls{
    font-size: 40px;
    animation: openIn 1s ease-in-out;
  }
  @keyframes openIn {
    0%{
      opacity: 0;
      transform: translateY(20px)
    }
    100%{
      opacity: 1;
      transform: translateY(0)
    }
  }
</style>
