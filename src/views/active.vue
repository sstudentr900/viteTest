<template>
  <h2>router-link active-class </h2>
  <br>
  <h3>tag 渲染標籤</h3>
  <p>點擊的路由class名=>.router-link-exact-active 和 .router-link-active</p>
  <pre>
    //template
    &lt;router-link to="/" tag="li"&gt;Home&lt;/router-link&gt; 
  </pre>
  <h3>顯示物件</h3>
  <pre>
    #template
    &lt;router-link active-class='active' :to='url'>>link&lt;a>

    #css
    .active{
      color: red;
    }
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=smqj22RKoCA&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=46">激活状态控制和分类列表渲染</a>
    </li>
  </ul>
  <hr>
  <h3>條件判斷 active</h3>
  <pre>
    #template
    &lt;a :class="{active:i==1}">link&lt;a>
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=9Fp35MZDADM&list=PLFbd8KZNbe---KNiUInMOOSEtmfudpONG&index=58">小图切换大图显示</a>
    </li>
  </ul>
</template>
<script></script>
<style scoped></style>
