<template>
  <h2>v-if and v-show</h2>
  <ol>
    <li>v-if 物件會不見</li>
    <li>v-show 都會被保留在 DOM 中</li>
  </ol>
  <pre>
    &lt;div id="app"&gt;
      &lt;input type="checkbox" v-model="isShow"&gt;
      &lt;div v-if="isShow"&gt;
        &lt;p&gt;v-if&lt;/p&gt;
      &lt;/div&gt;
      &lt;div v-show="isShow"&gt;
        &lt;p&gt;v-show&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    var vm = Vue.createApp({
      data() {
        return {
          isShow: true,
        }
      }
    }).mount('#app')
  </pre>
  <h2>v-else</h2>
  <pre>
    &lt;input type="checkbox" v-model="isShow"&gt;
    &lt;div v-if="isShow"&gt;A&lt;/div&gt;
    &lt;div v-else&gt;B&lt;/div&gt;
      var vm = Vue.createApp({
        data() {
          return {
            isShow: true,
          }
        }
      }).mount('#app')
  </pre>
  <h2>v-else-if</h2>
  <pre>
    &lt;div id="app"&gt;
      &lt;input type="text" v-model="total"&gt;
      &lt;div v-if="total === 0"&gt;0~5&lt;/div&gt;
      &lt;div v-else-if="total &gt; 5 && total &lt; 10"&gt;5~9&lt;/div&gt;
      &lt;div v-else="total &gt; 10"&gt;10&lt;/div&gt;
    &lt;/div&gt;
      var vm = Vue.createApp({
        data() {
          return {
            total: 0,
          }
        }
      }).mount('#app')
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10280380">v-if 才做選擇，v-show 全都秀</a>
    </li>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10280361" target="_blank">Vue.js 從零開始</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=3WAs4Gnb2dA&list=PLSCgthA1AnifSzKdpV4FWq1pLVF4FbZ4K&index=5&pp=iAQB">v-if、v-else、v-show 條件渲染顯示與點擊事件綁定</a>
    </li>
  </ul>
  <hr>
  <h3>v-if template</h3>
  <pre>
    &lt;template v-if="true">
      &lt;div>&lbrace;&lbrace; aa &rbrace;&rbrace;&lt;/div>
    &lt;/template>
    &lt;template v-else>
      &lt;div>&lbrace;&lbrace; bb &rbrace;&rbrace;&lt;/div>
    &lt;/template>
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=t1CH1L7lbcc&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=64">v-if template</a>
    </li>
  </ul>
  <hr>
  <h3>數據渲染問題</h3>
  <pre>
    #template

    Q.找不到 data 會報錯?
    &lt;a :to='{ path:`/${data[1].id}` }>link&lt;a>
    &lt;a :to='{ path:`/${data.id}` }>link&lt;a>

    A1.用鏈語法
    &lt;a :to='{ path:`/${data?.[1].id}` }>link&lt;a>

    a2.v-if
    &lt;div v-if='data'&gt;
      &lt;a :to='{ path:`/${data?.[1].id}` }>link&lt;a>
    &lt;/div&gt;

  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=XcADwfqpj8g&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=55">基础数据渲染</a>
    </li>
  </ul>
  <hr>
  <h3>條件判斷 active</h3>
  <pre>
    #template


    &lt;a :class="{active:value}">link&lt;a>

    有-
    &lt;a :class="{'rotate-180':value}">link&lt;a>

    3位元
    &lt;a :class="value ? 'style1' : 'style2'">link&lt;a>
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=9Fp35MZDADM&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=58">小图切换大图显示</a>
    </li>
  </ul>
  <hr>
  <h2>分頁功能v-if</h2>
  <pre>
    &lt;div id="app"&gt;
      &lt;button v-for="item in tab" :key="item" @click="click(item)"&gt;
        &lbrace;&lbrace; item &rbrace;&rbrace;
      &lt;/button&gt;
      &lt;tab-one v-if="title === 'One'"&gt;&lt;/tab-one&gt;
      &lt;tab-two v-if="title === 'Two'"&gt;&lt;/tab-two&gt;
    &lt;/div&gt;

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
        template: `&lt;div&gt;one-component&lt;/div&gt;`
      });
      app.component('tab-two', {
        template: `&lt;div&gt;two-component&lt;/div&gt;`
      });

      app.mount('#app');
  </pre>
  <!-- <h2>v-if、v-else顯示 (物件會不顯示在html裡)</h2>
  <button v-on:click="changeView(1)">區塊1</button>
  <button @click="changeView(2)">區塊2</button>
  <button @click="changeView(4)">區塊3</button>
  <div class="div" v-if="view===1"><h3>區塊1</h3></div>
  <div class="div" v-if="view===2"><h3>區塊2</h3></div>
  <div class="div"  v-if="view!==1 && view!==2"><h3>錯誤</h3></div>
  <h2>v-show顯示 (使用css display實現)</h2>
  <button v-on:click="changeView(1)">區塊1</button>
  <button @click="changeView(2)">區塊2</button>
  <button @click="changeView(4)">區塊3</button>
  <div class="div" v-show="view===1"><h3>區塊1</h3></div>
  <div class="div" v-show="view===2"><h3>區塊2</h3></div>
  <div class="div"  v-if="view!==1 && view!==2"><h3>錯誤</h3></div> -->
</template>
<script setup>
  // import {ref} from '@vue/reactivity'
  // const view = ref(1)
  // const changeView=(index)=>{
  //   //ref 取直要加.value
  //   view.value = index
  // }
</script>
<style>
  /* .div{
    border: 1px solid #ddd
  } */
</style>
