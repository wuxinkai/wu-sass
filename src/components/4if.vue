<template>
  <div class="a5">
  
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

 $num:5;
.a5{
    width: 300px;
    height: 300px;
    @if $num == 5{
        background: red
    }@else if $num ==4 {
        background: pink
    }
}

</style>