<template>
  <div>
    <div class="a2">
        复用功能:  (继承) SASS允许一个选择器，继承另一个选择器。
    </div>
    <br>
    <div class="a3">

    </div>
    <div class="a4">

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
.a1{
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: blueviolet
}

.a2 {
    @extend .a1; //继承
}

@mixin bandf($b,$f){
    border: solid $b+px red;
    background: #ccc;
    width: $f+px;
    height: $f+px;
}
.a3{
    @include bandf(2,300)
}

// 插入外部文件
@import "t2.scss";



</style>