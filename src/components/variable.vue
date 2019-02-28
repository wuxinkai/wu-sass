<template>
  <div>
    <div class="a">
      {{msg}}
      <div class="b">这是一个很不错的选择</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "This is a good choice."
    };
  }
};
</script>

<style scoped>
</style>
<style lang="scss" scoped >
//------------sass语言--------------------

//声明变量
$color: red;
$fontSize: 50;
$text: ".b";

.a {
  //引用变量
  color: $color;
  #{$text} {
    font-size: #{$fontSize}px;
    //& 是父选择器
    &:hover {
      color: blue;
    }
  }
}

//------------------ 原始写法 ----------------------------
.a {
  color: red;
}
.a .b {
  font-size: 50px;
  background: pink;
}
.a .b:hover {
  color: blue;
}
</style>