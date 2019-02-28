# sass 学习
## 变量
```
//声明变量
$color: red !default;
$fontSize: 50;
$text: ".b";

.a {
  //引用变量
  color: $color;
  #{$text} {
    font-size: #{$fontSize}px;
    //& 是父选择器
    &:hover{
     color: blue;
    }
  }
}
```
变量分为， 普通变量， 默认变量， 全局变量， 局部变量

## 群组选择器的嵌套
```
.a {
  .b {
    font-size: 50px;
  }
}

//编译结果
.a .b{ font-size: 50px;}
```