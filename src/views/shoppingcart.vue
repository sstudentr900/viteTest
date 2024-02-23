<template>
  <h3>簡單購物車</h3>
  <pre>
    &lt;div id='app'>
      &lt;h3>事件觸發：&lt;/h3>
      &lt;button @click="clickEvent('isClickEvent')">點擊事件&lt;/button>
      &lt;h3>函式觸發：&lt;/h3>
      &lt;button @click="callClick">其他函式觸發&lt;/button>
      &lt;h3>商品列表&lt;/h3>
      &lt;ul>
        &lt;li v-for="item in products" :key="item.name">
          &lbrace;&lbrace; item.name &rbrace;&rbrace; - &lbrace;&lbrace; item.price &rbrace;&rbrace;
          &lt;button @click="addCart(item)">加入購物車&lt;/button>
        &lt;/li>
      &lt;/ul>
      &lt;br>
      &lt;h3>購物車列表&lt;/h3>
      &lt;ul>
        &lt;li v-for="product in carts" :key="product.name">
          &lbrace;&lbrace; product.name &rbrace;&rbrace;
        &lt;/li>
      &lt;/ul>
      &lt;h3>總金額：&lt;/h3>
      &lbrace;&lbrace; sum &rbrace;&rbrace;
    &lt;/div>
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
  </pre>
  <h3>加入购物车实现</h3>
  <pre>
    #新增store store/cartStore.js
    import {defineStore} form 'pinia'
    import {ref} form 'vue'
    export const useCartStore = defineStore('cart',()=>{
      //1.定義state
      const cartList = ref([])
      //2.定義action
      const addCart = (obj)=>{
        //有該商品數量加1，沒有就全部加入
        const item = cartList.value.find(item=>item.id === obj.id)
        if(item){
          item.count++
        }else{
          cartList.value.push(obj)
        }
      }
      const delCart = (id)=>{
        //1.splice 刪除
        const idx = cartList.value.findIndex(item=>item.id === id)
        cartList.value.splice(idx,1)

        //2.filter 過濾
        cartList.value.filter(item=>item.id != id)
      }
      //3.計算computed 總量總數
      const allcount = computed(()=>cartList.value.reduce((a,c)=>a+c.count,0))
      const allprice = computed(()=>cartList.value.reduce((a,c)=>a+c.count*c.price,0))
      return {
        cartList,
        addCate,
        delCart,
        allcount,
        allprice
      }
    })

    #購物車頁 view/cart.vue
    //script
    import {useCartStore} form 'store/cartStore'
    const cartStore = useCartStore()
    const addCart=(){
      cartStore.addCart({
        id:'商品ID'
        count: '商品數量'
      })
    }
    //template
    &lt;button @click='addCart'> 加入購物車 &lt;button>
    &lt;button @click='cartStore.delCart(id)'> 刪除商品 &lt;button>
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=wKZIgMZP7-c&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=75">加入购物车实现</a>
    </li>
  </ul>
</template>
<script setup>
</script> 
<style>
</style>
