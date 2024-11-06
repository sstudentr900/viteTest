<template>
  <h2>綁定class及style</h2>
  <h3>顯示物件</h3>
  <pre>
    #template
    :class="{ 'active':show==true }"

    #script
    const show = ref(false)
    onMounted(() => {
      show.value = true
    });
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10203646">v-bind綁定class及style</a>
    </li>
  </ul>
  <hr>
  <h2>scoped</h2>
  <p>scoped會讓該元件在編譯時被添加一個以「data-v-」開頭代表唯一值</p>
  <pre>
    &lt;style lang="scss" scoped>
  </pre>
  <hr>
  <h2>對於子元件根部的 CSS，父元件 CSS 會優先於子元件的 CSS</h2>
  <p>Message template 不是用DIV包會被父元件和它自己的 scoped 影響</p>
  <pre>
    //父 template
    &lt;template>
      &lt;div>
        &lt;span> 首頁的文字 &lt;/span>
        &lt;Message/>
      &lt;/div>
    &lt;/template>

    //父 script
    import Message from "@/components/Message";
    export default {
      components: {
        Message,
      },
    };

    //父 style
    span {
      color: red;
    }


    //子 Message template
    &lt;span>
      Message 外層文字(變紅色)
      &lt;span> Message 內層文字(變藍色)&lt;/span>
    &lt;/span>

    //子 Message style
    span {
      color: blue;
    }
  </pre>
  <hr>
  <h2>deep selector</h2>
  <p>無視 scoped 的限制 子物件會吃到父物件CSS</p>
  <pre>
    .home:deep .message {
        color: red;
      }
  </pre>
  <p>把前面的父元件省略</p>
  <pre>
    :deep .message {
        color: red;
      }
  </pre>
  <p>包起來</p>
  <pre>
    :deep(.message){
        color: red;
      }
  </pre>
  <h3>參考</h3>
  <ul>
    <li>
      <a href="https://ithelp.ithome.com.tw/articles/10266005" target="_blank">scoped、deep selector 的作用</a>
    </li>
  </ul>
</template>
<script></script>
<style scoped></style>
