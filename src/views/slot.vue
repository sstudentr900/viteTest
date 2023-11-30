<script setup>
  import Slot2 from '../components/Slot2.vue'
  import Slot3 from '../components/Slot3.vue'
  import Slot4 from '../components/Slot4.vue'
  import Slot5 from '../components/Slot5.vue'
  import {ref} from 'vue'
  const name = ref('kk')
</script>
<template>
  <h2>Slot 插槽</h2>
  <br>
  <h3>slot_組件之間放傳遞內容(單個)</h3>
  <slot2>
    <p>slot2傳遞內容</p>
  </slot2>
  <hr>
  <h3>slot_組件之間放傳遞內容(多個)</h3>
  <p>改完要重整資料有時跑不出來</p>
  <p>外#name 去區分傳遞內部name=name位置</p>
  <slot3>
    <template #icon>
      <p>icon</p>
    </template>
    <template #btn>
      <p>btn</p>
    </template>
  </slot3>
  <hr>
  <h3>slot_內傳外</h3>
  <p>改完要重整資料有時跑不出來</p>
  <p>#btn="{ text }" 內部(text)資料往外傳</p>
  <slot4>
    <template #btn="{ text,msg }">
      <p>{{ text }}</p>
      <p>{{ msg }}</p>
    </template>
  </slot4>
  <hr>
  <h3>slot_外傳內</h3>
  <p>改完要重整資料有時跑不出來</p>
  <p>裡面一定要設定defineProps 不然會抱錯(not be automatically inherited)</p>
  <Slot5 :name="name">
    <p>123</p>
  </Slot5>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=ISBoRHyHm_w&list=PLSCgthA1AnifSzKdpV4FWq1pLVF4FbZ4K&index=13">Slot 插槽</a>
    </li>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10274325">Slots 與 Render Functions 的進階心法</a>
    </li>
    <li>
      <a href="https://stackoverflow.com/questions/68803137/vue-3-passing-array-warning-extraneous-non-props-attributes-were-passed-to-comp">not be automatically inherited</a>
    </li>
  </ul>
  <hr>
  <h2>Slot</h2>
  <ol>
    <li>預設:顯示&lt;div class="box"&gt;&lt;div&gt; 預設值！&lt;/div&gt;&lt;/div&gt;</li>
    <li>打洞:顯示&lt;div class="box"&gt;&lt;p&gt; 打洞成功 !&lt;/p&gt;&lt;/div&gt;</li>
  </ol>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <div id="app">
        <h3> {{ text }} </h3> 

        //預設
        <out-text></out-text>

        //打洞
        <out-text>
          <p>打洞成功</p>
        </out-text>
      
      </div>
      <!-- <script> -->
        var app = Vue.createApp({
          data() {
            return {
              text: "外層元件",
            }
          }
        });
        app.component("outText", {
          template: `
            <div class="box">
                <slot> 預設值！</slot>
            </div>
            `,
          data() {
            return {
              text: "內部元件",
            };
          }
        });
        app.mount("#app");
      <!-- </script> -->
    <!-- </xmp> -->
  </pre>

  <h3>slot 具名插槽(建立多個插槽)</h3>
  <ol>
    <li>template v-slot:name1 取代 slot name="name1"</li>
    <li>顯示結果:&lt;div class="box"&gt;波利卡片瘋兔卡片未插卡禿鷹卡片&lt;/div&gt;</li>
  </ol>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <div id="app">
        <out-text>
          <template v-slot:header>波利卡片</template>
          <template v-slot:main>瘋兔卡片</template>
          <template v-slot:default></template>
          <template v-slot:footer>禿鷹卡片</template>
        </out-text>
      </div>
      <!-- <script> -->
        var app = Vue.createApp({
          data() {
            return {
              text: "外層元件",
            }
          }
        });
        app.component("outText", {
          template: `
          <div class="box">
              <slot name="header"></slot>
              <slot name="main"></slot>
              <slot>未插卡</slot>
              <slot name="footer"></slot>
          </div>
          `,
          data() {
            return {
              text: "內部元件",
            };
          }
        });
        app.mount("#app");
      <!-- </script> -->
    <!-- </xmp> -->
  </pre>


  <h3>Slot Props 內層傳遞給外層元件</h3>
  <ol>
    <li>內層元件要傳出去的資料 slot :ro="product" ， :ro為自定義名稱 ， product為內層元件的data</li>
    <li>外層元件模板 template v-slot:default="roprops"接收資料 ， v-slot:default 固定寫法 ， roprops為自定義名稱。</li>
  </ol>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <div id="app">
        <out-text>
          <template v-slot:default="roprops">
            內層元件插槽：
            {{ roprops.ro.name }}
          </template>
        </out-text>
      </div>
      <!-- <script> -->
        var app = Vue.createApp({
          data() {
            return {
              text: "外層元件",
            }
          }
        });
        app.component("outText", {
          template: `
            <div class="header">
              <slot :ro="product"></slot>
            </div>
          `,
          data() {
            return {
              text: "內部元件",
              product: {
                name: "名刀不知火",
                price: 200000,
                city: "普隆德拉"
              }
            };
          }
        });
        app.mount("#app");
      <!-- </script> -->
    <!-- </xmp> -->
  </pre>

  <h3>Slot Props搭配Component Props</h3>
  <ol>
    <li>先把外層元件props到子元件使用，out-text :product="product"，props: ['product']。</li>
    <li>執行mounted()。</li>
    <li>內層定義傳出去的資料slot :ro="product" :buy="buy"(資料是外部元件data，經由內部元件props提供)。</li>
    <li>外層模板改為物件方式接收v-slot:default="{ ro, buy }"。</li>
  </ol>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <div id="app">
        <out-text :product="product">
          <template v-slot:default="{ ro, buy }">
            component props：{{ ro.name }} <br>
            slot props：{{ buy }}
          </template>
        </out-text>
      </div>
      <!-- <script> -->
        var app = Vue.createApp({
          data() {
            return {
              text: "外層元件",
              product: {
                name: "名刀不知火",
                price: 200000,
                city: "普隆德拉",
                amount: 5,
              }
            }
          }
        });
        app.component("outText", {
          props: ['product'],
          template: `
              <div class="header">
                <slot :ro="product" :buy="buy"></slot>
              </div>
            `,
          data() {
            return {
              text: "內部元件",
              buy: ""
            };
          },
          created() {
            if (this.product.amount > 1) {
              this.buy = "可購買";
            } else {
              this.buy = "無法購買";
            };
          }
        });
        app.mount("#app");
      <!-- </script> -->
    <!-- </xmp> -->
  </pre>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10278322" target="_blank">Vue.js 從零開始：Slot</a>
    </li>
  </ul>
  <hr>
</template>

<style scoped>
  /* .app{
    width: 100%;
    max-width: 500px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  } */
</style>
