<template>
  <h2>components</h2>
  <h3>自定組件注册全局(單個)</h3>
  <pre>
    #main.js
    import HelloWorld from "./components/HelloWorld.vue"   
    //全局component(全局組件名稱,組件名稱)
    app.component('HelloWorld_global',HelloWorld)

    #template
    &lt;HelloWorld/>
  </pre>
  <h3>自定組件注册全局(多個)</h3>
  <pre>
    #新增 componentPlugin.js
    //綁定自定組件
    import plugin1 from './components/plugin.vue'
    export const componentPlugin = {
      install(app){
        //app.components('組名',組對象)
        app.components('plugin1',plugin1)
      }
    }

    #main.js 注册全局
    import { componentPlugin } from './components/componentPlugin.js'
    const app = createApp(App)
    app.use(componentPlugin)
    app.mount('#app')

    #template使用
    &lt;plugin1>
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=h2hQZjWB4QI&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=63" target="_blank">注册全局</a>
    </li>
  </ul>
  <hr>
  <h3>各板本components</h3>
  <pre class="prettyprint">
    //Options comonents
    #script
    import HelloWorld from "@/components/HelloWorld.vue"    
    export default{
      components:{
        HelloWorld,
      }
    }

    #template
    &lt;HelloWorld/>


    //Composition comonents
    #script
    import HelloWorld from "@/components/HelloWorld.vue"

    #template
    &lt;HelloWorld/>
  </pre>
  <hr>
  <h3>動態切換comonents</h3>
  <pre class="prettyprint">
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

    #template
    &lt;button @click="change_component(0)">propHtml &lt;/button>
    &lt;button @click="change_component(1)">HelloWorld &lt;/button>
    &lt;div>
      //切換component 只能傳入components名稱不能輸入字串
      &lt;component :is="component"/>
    &lt;/div>
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=ureFPVghH30">components / props / emit</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=ureFPVghH30&ab_channel=MikeCheng" target="_blank">Vue3 + Vite 快速上手 Get Startrd EP3 - components</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=3pDNY4fLZGc&list=PLmOn9nNkQxJEFpabd412vGw_k7-lHlJOP&index=13" target="_blank">註冊全局組件</a>
    </li>
  </ul>
  <hr>
  <h3>Options component</h3>
  <pre class="prettyprint">
    &lt;div id="app">
      &lt;h4>&lbrace;&lbrace; text &rbrace;&rbrace;&lt;/h4>
      &lt;con-tainer>&lt;/con-tainer>
      &lt;area2>&lt;/area2>
    &lt;/div>
      const area2 = {
        data() {
          return {
            text: "根元件的子元件/區域註冊"
          };
        },
        template: `&lt;div>
      &lt;h4>&lbrace;&lbrace; text &rbrace;&rbrace;&lt;/h4>
    &lt;/div>`
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
        template: `&lt;div>
          &lt;h4>&lbrace;&lbrace; text &rbrace;&rbrace;&lt;/h4>
        &lt;/div>`
      });
      app.mount("#app");
  </pre>
</template>
<script setup>
  // import {computed,reactive,ref,watch,watchEffect} from 'vue'
  // import componentA from '../components/componentA.vue'
  // import componentB from '../components/componentB.vue'
  // import componentC from '../components/componentC.vue'
  // const ischange = ref(0)
  // const change = (idx)=>{
  //   ischange.value = idx
  // }
  // const components = computed(()=>{
  //   // console.log('39',Number.isNaN(Number(ischange.value)))
  //   const value = Number.isNaN(Number(ischange.value))?0:Number(ischange.value)
  //   switch( value ){
  //     case 0:
  //       return componentA
  //     case 1:
  //       return componentB 
  //     case 2:
  //       return componentC
  //     default:
  //       return componentC
  //       // break;  
  //   }
  // })
</script>
<style></style>
