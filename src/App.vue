<template>
  <div id="app">
    <div class="list">
        <template v-for="item in items">
         <router-link :to="item.index">
           {{item.title}}
           </router-link> 
        </template>
    </div>
   <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return{
      items:[
        {icon: "el-icon-date", index: "/", title: "1变量和嵌套"},
        {icon: "el-icon-date", index: "/calculate", title: "2计算"},
        {icon: "el-icon-date", index: "/3extend", title: "3继承"},
        {icon: "el-icon-date", index: "/4if", title: "条件语句"},
        {icon: "el-icon-date", index: "/5each", title: "循环"},
        {icon: "el-icon-date", index: "/function", title: "函数"},
      ]
    }
  }
}
</script>

<style>
.list{
  overflow: hidden;
}
.list a{
  float: left;
  display: inline-block;
  height: 30px;
margin-left: 20px;
}
</style>
