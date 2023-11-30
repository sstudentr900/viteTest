<template>
  <h2>v-if、v-else顯示 (物件會不顯示在html裡)</h2>
  <button v-on:click="changeView(1)">區塊1</button>
  <button @click="changeView(2)">區塊2</button>
  <button @click="changeView(4)">區塊3</button>
  <div class="div" v-if="view===1"><h3>區塊1</h3></div>
  <div class="div" v-if="view===2"><h3>區塊2</h3></div>
  <div class="div"  v-if="view!==1 && view!==2"><h3>錯誤</h3></div>
  <hr>
  <h2>v-show顯示 (使用css display實現)</h2>
  <button v-on:click="changeView(1)">區塊1</button>
  <button @click="changeView(2)">區塊2</button>
  <button @click="changeView(4)">區塊3</button>
  <div class="div" v-show="view===1"><h3>區塊1</h3></div>
  <div class="div" v-show="view===2"><h3>區塊2</h3></div>
  <div class="div"  v-if="view!==1 && view!==2"><h3>錯誤</h3></div>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=3WAs4Gnb2dA&list=PLSCgthA1AnifSzKdpV4FWq1pLVF4FbZ4K&index=5&pp=iAQB">v-if、v-else、v-show 條件渲染顯示與點擊事件綁定</a>
    </li>
  </ul>
  <hr>
  <h2>v-if and v-show</h2>
  <ol>
    <li>v-if 物件會不見</li>
    <li>v-show 都會被保留在 DOM 中</li>
  </ol>
  <pre class="prettyprint">
    <xmp>
      <div id="app">
        <input type="checkbox" v-model="isShow">
        <div v-if="isShow">
          <p>v-if</p>
        </div>
        <div v-show="isShow">
          <p>v-show</p>
        </div>
      </div>
      <!-- <script> -->
        var vm = Vue.createApp({
          data() {
            return {
              isShow: true,
            }
          }
        }).mount('#app')
      <!-- </script> -->
    </xmp>
  </pre>

  <h2>v-else</h2>
  <pre class="prettyprint">
    <xmp>
        <input type="checkbox" v-model="isShow">
        <div v-if="isShow">A</div>
        <div v-else>B</div>
        <!-- <script> -->
          var vm = Vue.createApp({
            data() {
              return {
                isShow: true,
              }
            }
          }).mount('#app')
        <!-- </script> -->
    </xmp>
  </pre>

  <h2>v-else-if</h2>
  <pre class="prettyprint">
    <xmp>
      <div id="app">
        <input type="text" v-model="total">
        <div v-if="total === 0">0~5</div>
        <div v-else-if="total > 5 && total < 10">5~9</div>
        <div v-else="total > 10">10</div>
      </div>
      <!-- <script> -->
        var vm = Vue.createApp({
          data() {
            return {
              total: 0,
            }
          }
        }).mount('#app')
      <!-- </script> -->
    </xmp>
  </pre>


  <h2>分頁功能v-if</h2>
  <pre class="prettyprint">
    <xmp>
      <div id="app">
        <button v-for="item in tab" :key="item" @click="click(item)">
          {{ item }}
        </button>
        <tab-one v-if="title === 'One'"></tab-one>
        <tab-two v-if="title === 'Two'"></tab-two>
      </div>

      <!-- <script> -->
        const app = Vue.createApp({
          data() {
            return {
              title: 'One',
              tab: ['One', 'Two']
            }
          },
          methods: {
            click(e) {
              this.title = e;
            }
          },
        });
        app.component('tab-one', {
          template: `<div>one-component</div>`
        });
        app.component('tab-two', {
          template: `<div>two-component</div>`
        });

        app.mount('#app');
      <!-- </script> -->
    </xmp>
  </pre>

  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10280380">v-if 才做選擇，v-show 全都秀</a>
    </li>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10280361" target="_blank">Vue.js 從零開始</a>
    </li>
  </ul>
  <hr>
</template>
<script setup>
  import {ref} from '@vue/reactivity'
  const view = ref(1)
  const changeView=(index)=>{
    //ref 取直要加.value
    view.value = index
  }
</script>
<style>
  .div{
    border: 1px solid #ddd
  }
</style>
