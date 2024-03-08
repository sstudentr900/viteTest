<template>
  <h2>綁定 key 值：「id」 VS 「index」</h2>
  <ol>
    <li>id 具有唯一性，能直接對應到所屬項目，因此當陣列內容發生變動時，只需要處理增減的資料即可，其他資料仍可繼續複用，不需要重新渲染，進而維持效能。</li>
    <li>index 會跟著陣列內容的長度變化而隨之增減，且 index 具有順序性，所以只要變動其中一筆資料便會連帶影響到其他資料的排序，使得資料必須隨時重新渲染，相對影響效能</li>
  </ol>
  <h3>v-for 值</h3>
  <pre>
      //第一個參數是值，第二個參數key是鍵值，第三個參數index是索引值
      &lt;div id="app">
        &lt;ul>
          &lt;li v-for="(items, key, index) in item">
            &lbrace;&lbrace; items &rbrace;&rbrace;:&lbrace;&lbrace; key &rbrace;&rbrace;:&lbrace;&lbrace; index &rbrace;&rbrace;
          &lt;/li>
        &lt;/ul>
      &lt;/div>
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
  </pre>
  <hr>
  <h2>v-for + select</h2>
  <pre>
      &lt;select v-model="select">
        &lt;option v-for="item in list" :key="item.id" :value="item.id">
          &lbrace;&lbrace; item.name &rbrace;&rbrace;
        &lt;/option>
      &lt;/select>

      //option api
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
  </pre>
  <hr>
  <h2>v-for + 篩選</h2>
  <pre>
    &lt;div id="app">
      &lt;ul>
        &lt;li v-for="item in filterNum">&lbrace;&lbrace; item &rbrace;&rbrace;&lt;/li>
      &lt;/ul>
    &lt;/div>
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
  </pre>
  <hr>
  <h2>使用tamplate</h2>
  <pre>
    &lt;div id="app">
      &lt;template v-for="(item ,key) in data">
        ...
      &lt;/template>
    &lt;/div>
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10205693">12 Vue的模板語法 - 迴圈 v-for (2) 使用tamplate</a>
    </li>
  </ul>
  <hr>
  <h2>:key 動畫</h2>
  <pre>
    #script 
    import {ref} from '@vue/reactivity'
    const dataObjList2= ref({a:'a1',b:'b1',c:'c1',d:'d1'})
    setTimeout(() => {
      dataObjList2.value = {a:'a3',b:'b4',c:'c5',d:'d6'}
    }, 2000);

    
    #template
    &lt;ul>
      //key的值重複，會只更換資料不執行動畫
      &lt;li v-for="(value,key,index) in dataObjList2" class="test-cls" :key="key">
        &lbrace;&lbrace;index&rbrace;&rbrace;:&lbrace;&lbrace;key&rbrace;&rbrace;:&lbrace;&lbrace;value&rbrace;&rbrace;
      &lt;/li>
      //key的值無重複
      &lt;li v-for="(value,key,index) in dataObjList2" class="test-cls" :key="value">
      &lbrace;&lbrace;index&rbrace;&rbrace;:&lbrace;&lbrace;key&rbrace;&rbrace;:&lbrace;&lbrace;value&rbrace;&rbrace;
    &lt;/li>
    &lt;/ul>

    #css
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
  </pre>
  <div v-for="(value,key,index) in dataObjList2" class="test-cls" :key="key">
    <p>{{index}}:{{key}}:{{value}}</p>
  </div>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=w6UaYZExkz0&list=PLSCgthA1AnifSzKdpV4FWq1pLVF4FbZ4K&index=6">v-for 迴圈渲染與 key 屬性【Proladon】</a>
    </li>
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
</template>
<script setup>
  import {ref} from '@vue/reactivity'
  const dataList=['a','b','c','d']
  const dataObjList= {a:'a1',b:'b1',c:'c1',d:'d1'}
  const dataObjList2= ref({a:'a1',b:'b1',c:'c1',d:'d1'})
  const test = ref('test')
  // setTimeout(() => {
  //   test.value = 'apple'
  // }, 2000);
  setTimeout(() => {
    dataObjList2.value = {a:'a3',b:'b4',c:'c5',d:'d6'}
    // dataObjList2.value = {a:'a1',b:'b1',c:'c1',d:'d1'}
  }, 2000);
</script>
<style>
  .test-cls{
    font-size: 15px;
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
