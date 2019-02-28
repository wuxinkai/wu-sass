<template>
  <div>
   <div class="a">
      {{msg}}
    <div class="b">
      这是一个很不错的选择
    </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'This is a good choice.'
    }
  }
}
</script>

<style scoped>
</style>
<style lang="scss" scoped >
//------------sass语言--------------------

$color: red;
$fontSize: 50;
$text: ".b";
.a {
  color: red;
  #{$text} {
    font-size: #{$fontSize}px;
  }
}

//------------------ 原始写法 ----------------------------
// .a {
//   color: red;
// }
// .a .b {
//   font-size: 50px;
//   background: pink;
// }
</style>