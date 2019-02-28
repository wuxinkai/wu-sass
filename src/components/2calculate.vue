<template>
  <div>
    <div class="borer"></div>
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

$num: 50;

.borer {
  width: 200px;
  height: 200px;
  background: #ccc;
  position: relative;
  border: (14px/2) solid red;
  top: 50px+50px;
  left: $num * 2px;
}
</style>