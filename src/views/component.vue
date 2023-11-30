<template>
  <h2>components</h2>
  <br>
  <h3>全域組件</h3>
  <pre>
    //在main註冊全域組件
    import vImg from './components/vImg.vue'
    app.component('vImg', vImg)

    //在template引用方式
    <!-- <vImg/> -->
  </pre>
  <hr>
  <h3>動態載入component</h3>
  <input type="text" v-model="ischange">
  <button @click="change(0)">componentA {{ischange}}</button>
  <button @click="change(1)">componentB {{ischange}}</button>
  <button @click="change(2)">componentC {{ischange}}</button>
  <components :is="componentA" />
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=ureFPVghH30">components / props / emit</a>
    </li>
  </ul>
  <hr>
  <h2>全局components</h2>
  <p>圖片load可使用</p>
  <pre>
      //main.js
      <!-- <script> -->
        import HelloWorld from "./components/HelloWorld.vue"   
        //全局component(全局組件名稱,組件名稱)
        vue.component('HelloWorld_global',HelloWorld)
      <!-- <script> -->

      //template
      <template>
        <HelloWorld/>
      </template>
  </pre>
  <hr>
  <h2>各板本components</h2>
  <pre class="prettyprint">
    <!-- <xmp> -->
      //Options comonents
      <!-- <script> -->
        import HelloWorld from "@/components/HelloWorld.vue"    
        export default{
          components:{
            HelloWorld,
          }
        }
      <!-- <script> -->
      <template>
        <HelloWorld/>
      </template>


      //Composition comonents
      <!-- <script setup> -->
        import HelloWorld from "@/components/HelloWorld.vue"
      <!-- </script> -->
      <template>
        <HelloWorld/>
      </template>
    <!-- </xmp> -->
  </pre>
  <hr>
  <h2>動態切換comonents</h2>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <!-- <script setup> -->
        import propHtml from '@/components/propHtml.vue';
        import HelloWorld from '@/components/HelloWorld.vue';
        import {ref,computed} from 'vue';
        const pageIdx = ref(0);
        const component = computed(()=>{
          switch(pageIdx.value){
            case 0:
              return propHtml;
            case 1:
              return HelloWorld;  
            default: 
              return HelloWorld;  
          }
        })
        const change_component = (idx)=>{
            pageIdx.value = idx
        }
      <!-- </script> -->
      <template>
        <button @click="change_component(0)">propHtml</button>
        <button @click="change_component(1)">HelloWorld</button>
        <div>
          <!-- 切換component 只能傳入components名稱不能輸入字串-->
          <component :is="component"/>
        </div>
      </template>
    <!-- </xmp> -->
  </pre>
  <hr>
  <h4>參考</h4>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=ureFPVghH30&ab_channel=MikeCheng" target="_blank">Vue3 + Vite 快速上手 Get Startrd EP3 - components</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=3pDNY4fLZGc&list=PLmOn9nNkQxJEFpabd412vGw_k7-lHlJOP&index=13" target="_blank">註冊全局組件</a>
    </li>
  </ul>
  <hr>
  <h2>component</h2>
  <pre class="prettyprint">
    <!-- <xmp> -->
      <div id="app">
        <h4>{{ text }}</h4>
        <con-tainer></con-tainer>
        <area2></area2>
      </div>
      <!-- <script> --> 
        const area2 = {
          data() {
            return {
              text: "根元件的子元件/區域註冊"
            };
          },
          template: `<div>
        <h4>{{ text }}</h4>
      </div>`
        }
        var app = Vue.createApp({
          data() {
            return {
              text: "外部元件"
            };
          },
          components: {
            area2
          }
        });
        app.component("ConTainer", {
          data() {
            return {
              text: "內部元件/全域註冊"
            };
          },
          template: `<div>
            <h4>{{ text }}</h4>
          </div>`
        });
        app.mount("#app");
      <!-- <script> -->
    <!-- </xmp > -->
  </pre>
  <hr>
</template>
<script setup>
  import {computed,reactive,ref,watch,watchEffect} from 'vue'
  import componentA from '../components/componentA.vue'
  import componentB from '../components/componentB.vue'
  import componentC from '../components/componentC.vue'
  const ischange = ref(0)
  const change = (idx)=>{
    ischange.value = idx
  }
  const components = computed(()=>{
    // console.log('39',Number.isNaN(Number(ischange.value)))
    const value = Number.isNaN(Number(ischange.value))?0:Number(ischange.value)
    switch( value ){
      case 0:
        return componentA
      case 1:
        return componentB 
      case 2:
        return componentC
      default:
        return componentC
        // break;  
    }
  })
</script>
<style></style>
