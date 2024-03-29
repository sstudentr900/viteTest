<template>
  <h2>「@」v-on：監聽事件</h2>
  <h3>v-on</h3>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <div id="app">
        <h3>{{ count }}</h3>
        <button @click="count++">Click</button>
      </div>

      <!-- <script> -->
        var vm = Vue.createApp({
          data() {
            return {
              count: 0,
            }
          }
        });
        vm.mount("#app");
      <!-- </script> -->
    <!-- </xmp> -->
  </pre>
  <h3>v-on methods</h3>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <div id="app">
        <h3>{{ count }}</h3>
        <button @click="add">Click</button>
      </div>

      <!-- <script> -->
        var vm = Vue.createApp({
          data() {
            return {
              count: 0,
            }
          },
          methods: {
            add() {
              this.count++;
            }
          }
        });
        vm.mount("#app");
      <!-- </script> -->
    <!-- </xmp> -->
  </pre>
  <h3>v-on 帶參數</h3>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <div id="app">
        <h3>{{ count }}</h3>
        <button @click="add(100,$event)">Click</button>
      </div>

      <!-- <script> -->
        var vm = Vue.createApp({
          data() {
            return {
              count: 0,
            }
          },
          methods: {
            add(num, e) {
              this.count += num;
              console.log(num);
              console.log(this.count, e);
            }
          }
        });
        vm.mount("#app");
      <!-- </script> -->
    <!-- </xmp> -->
  </pre>
  <h3>事件修飾符</h3>
  <ol>
    <li>capture 的事件一定會先觸發</li>
    <li>stop => stopPropagation 停止觸發上層 DOM 元素事件。</li>
    <li>prevent => preventDefault 阻擋預設行為</li>
    <li>self => 只有觸發此 DOM 元素本身才會觸發 self 事件。</li>
    <li>once => 此事件只觸發一次。</li>
    <li>passive => 無視 prevent 功能。</li>
    <li>@input事件是实时监控的，每次输入都会调用</li>
    <li>@keyup.enter需要点击回车键触发</li>
    <li>@change</li>
    <li>@blur</li>
  </ol>
  <h3>指定事件只觸發一次(@click.once)</h3>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <button type="button" @click="clicks += 1">Click it!</button>
      <button type="button" @click.once="clicks += 1">Click it!(只會被觸發一次)</button>
    <!-- </xmp> -->
  </pre>
  <h3>prevent 阻擋預設行為 event.preventDefault()</h3>
  <pre class="prettyprint">
    <!-- <xmp> -->
      form v-on:submit.prevent="onSubmit"
    <!-- </xmp> -->
  </pre>

  <h3>v-model</h3>
  <p>v-model = v-on:input + v-bind:value</p>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <input type="text" v-model="inputText" />
    <!-- </xmp> -->
  </pre>

  <h3>@input監聽表單元素的即時變化</h3>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <input type="text" :value="inputText" @input="inputText = $event.target.value" />
    <!-- </xmp> -->
  </pre>

  <h3>v-model.lazy</h3>
  <p>v-model = v-on:change + v-bind:value</p>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <input type="text" v-model.lazy="inputText" />
    <!-- </xmp> -->
  </pre>

  <h3>@change監聽值改變</h3>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <input type="text" :value="inputText" @change="inputText = $event.target.value" />
    <!-- </xmp> -->
  </pre>

  <h3>input文字框</h3>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <!-- <script> -->
        var vm = Vue.createApp({
          data() {
            return {
              message: 'Hello Vue3',
            }
          }
        }).mount("#app");
      <!-- </script> -->
      <div id="app">
        <input type="text" v-model="message" placeholder="input text">
        {{ message }}
      </div>
    <!-- </xmp> -->
  </pre>

  <h3>textarea文字方塊</h3>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <!-- <script> -->
        var vm = Vue.createApp({
          data() {
            return {
              message: 'hello Vue!',
            }
          }
        }).mount('#app');
      <!-- </script> -->
      <div id="app">
        <h2>{{ message }}</h2>
        <textarea v-model="message"></textarea>
      </div>

    <!-- </xmp> -->
  </pre>

  <h3>checked選擇框</h3>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <div id="demo">
        <input type="checkbox" id="one" value="one" v-model="checked">
        <label for="one">one</label>
        <input type="checkbox" id="two" value="two" v-model="checked">
        <label for="two">two</label>
        <input type="checkbox" id="three" value="three" v-model="checked">
        <label for="three">three</label>
        <br>
        <h3>checked data:{{ checked }}</h3>
      </div>
      <!-- <script> -->
        var vm = Vue.createApp({
          data() {
            return {
              checked: [],
            }
          }
        }).mount('#app');
      <!-- </script> -->
    <!-- </xmp> -->
  </pre>

  <h3>checked單選</h3>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <div id="demo">
        <input type="checkbox" id="one" value="one" v-model="checked">
        <label for="one">Click Me!</label>
        <br>
        <h3>checked data:{{ checked }}</h3>
      </div>
      <!-- <script> -->
        var vm = Vue.createApp({
          data() {
            return {
              checked: false,
            }
          }
        }).mount('#demo');
      <!-- </script> -->
    <!-- </xmp> -->
  </pre>

  <h3>radio單選框</h3>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <div id="demo">
        <input type="radio" id="one" value="1" v-model="checked">
        <label for="one">one</label>
        <input type="radio" id="two" value="2" v-model="checked">
        <label for="two">two</label>
        <input type="radio" id="three" value="3" v-model="checked">
        <label for="three">three</label>
        <br>
        <h3>checked data:{{ checked }}</h3>
      </div>
      <!-- <script> -->
        var vm = Vue.createApp({
          data() {
            return {
              checked: 1,
            }
          }
        }).mount('#demo');
      <!-- </script> -->
    <!-- </xmp> -->
  </pre>

  <h3>select下拉式選單</h3>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <div id="demo">
        <select v-model="selected">
          <option disabled value="">請選擇</option>
          <option>北部</option>
          <option>中部</option>
          <option>南部</option>
        </select>
        <br>
        <h3>selected:{{ selected }}</h3>
      </div>
      <!-- <script> -->
        var vm = Vue.createApp({
          data() {
            return {
              selected: '',
            }
          }
        });
        vm.mount('#demo');
      <!-- </script> -->
    <!-- </xmp> -->
  </pre>

  <h2>
    「:」
    <span>v-bind</span>
    ：綁定 attribute
  </h2>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <button type="button" :disabled="isUnclickable" @click="disabled">
        Cannot click!
      </button>
    <!-- </xmp> -->
  </pre>
  <h2>綁定Style</h2>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <!-- <script> -->
        var vm = Vue.createApp({
          data() {
            return {
              text: 'Hello Vue!!',
              style: {
                color: "#0095C0",
                background: "#000",
              }
            }
          }
        }).mount('#app');
      <!-- </script> -->
      //html
      <div id="app">
        <div :style="style">{{ text }}</div>
      </div>

    <!-- </xmp> -->
  </pre>
  <h2>style 用陣列格式</h2>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <!-- <script> -->
        var vm = Vue.createApp({
          data() {
            return {
              text: 'Hello Vue!!',
              red: {
                color: "#0095C0",
              },
              blackbBg: {
                background: "#000",
              }
            }
          }
        }).mount('#app');
      <!-- </script> -->
      //html
      <div id="app">
        <div :style="[red,black]">{{ text }}</div>
      </div>

    <!-- </xmp> -->
  </pre>
  <h2>綁定Class</h2>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <!-- <script> -->
        var vm = Vue.createApp({
          data() {
            return {
              text: 'Hello Vue!!',
              isAcrive: true,
            }
          }
        }).mount('#app');
      <!-- </script> -->
      //html
      <div id="app">
        <div class="bgblue" :class="{active: isAcrive}">{{ text }}</div>
      </div>

    <!-- </xmp> -->
  </pre>
  <h2>使用三元運算子做更多變化</h2>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <div id="app">
        <div class="active" :class="[ isAcrive? 'bgblue' : 'bgred' ]" 
        @click="isAcrive = !isAcrive">{{ text }}</div>
      </div>
    <!-- </xmp> -->
  </pre>
  <h2>分頁功能 v-bind:is</h2>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <div id="app">
        <button v-for="item in tabs" :key="item" @click="titleTab = item">
          {{ item }}
        </button>
        <!-- titleTab的值有變化，元件跟著切換 -->
        <!-- <component :is="tabComponent"> -->
      </div>

      <!-- <script> -->
        const app = Vue.createApp({
          data() {
            return {
              titleTab: 'One',
              tabs: ['One', 'Two', 'Three', 'Four', 'Five', 'six'],
            };
          },
          computed: {
            tabComponent() {
              // 轉成小寫並回傳 ，符合相對應的component名稱，就會顯示。
              return `tab-${this.titleTab.toLowerCase()}`
            }
          }
        });
        app.component("tab-one", {
          template: `<div class="tab">One component</div>
            <input type="text" v-model="text">`,
          data() {
            return {
              text: "第一個子元件"
            }
          }
        });
        app.component("tab-two", {
          template: `<div class="tab">Tow component</div>
            <input type="text" v-model="text">`,
          data() {
            return {
              text: "第二個子元件"
            }
          }
        });
        app.component("tab-three", {
          template: `<div class="tab">three component</div>
            <input type="text" v-model="text">`,
          data() {
            return {
              text: "第三個子元件"
            }
          }
        });
        app.component("tab-four", {
          template: `<div class="tab">four component</div>
            <input type="text" v-model="text">`,
          data() {
            return {
              text: "第四個子元件"
            }
          }
        });
        app.component("tab-five", {
          template: `<div class="tab">five component</div>
            <input type="text" v-model="text">`,
          data() {
            return {
              text: "第五個子元件"
            }
          }
        });
        app.component("tab-six", {
          template: `<div class="tab">six component</div>
            <input type="text" v-model="text">`,
          data() {
            return {
              text: "第六個子元件"
            }
          }
        });
        app.mount("#app");
      <!-- </script> -->
    <!-- </xmp> -->
  </pre>
  <hr>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10268431">簡寫好用一直用－v-on、v-bind</a>
    </li>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10207356">v-on的修飾符</a>
    </li>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10281503">神奇語法糖－v-model</a>
    </li>
  </ul>
  <hr>
</template>
<script setup></script>
<style></style>
