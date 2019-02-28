<template>
  <div>
    <div>
      <div class="a1"></div>
      <div class="a2"></div>
      <div class="a3"></div>
      <div class="a4"></div>
    </div>
    <div>
      <div class="b0"></div>
      <div class="b1"></div>
      <div class="b2"></div>
      <div class="b3"></div>
      <div class="b4"></div>
      <div class="b5"></div>
    </div>
     <div>
      <div class="c0"></div>
      <div class="c1"></div>
      <div class="c2"></div>
      <div class="c3"></div>
      <div class="c4"></div>
      <div class="c5"></div>
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

<style lang="scss" scoped >
@for $i from 1 to 5 {
  .a#{$i} {
    color: #000;
    font-size: 16px;
    margin-top: 10px;
    &::before {
      content: "for ：#{$i}";
    }
  }
}

$j: 1;
@while $j < 5 {
  .b#{$j} {
    color: blue;
    font-size: 16px;
    margin-top: 10px;
    &::before {
      content: "while：#{$j}";
    }
  }
  $j: $j + 1;
}

@each $k in 1, 2, 3, 4 {
  .c#{$k} {
    color: red;
    font-size: 16px;
    margin-top: 10px;
    &::before {
      content: "each：#{$k}";
    }
  }
}
</style>