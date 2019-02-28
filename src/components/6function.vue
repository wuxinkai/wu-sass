<template>
  <div class="a1"></div>
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
@function bg($r, $g, $b, $a) {
  @return rgba($r, $g, $b, $a);
}

.a1 {
  width: 200px;
  height: 200px;
  background: bg(112, 245, 8, 0.5);
}
</style>