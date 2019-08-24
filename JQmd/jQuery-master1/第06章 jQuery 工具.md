# # 数组和对象操作

## 1. $.each(Array,fn(index,item){})

通用遍历方法，可用于遍历对象和数组。

不同于遍历 jQuery 对象的 $().each() 方法，此方法可用于遍历任何对象。回调函数拥有两个参数：第一个为对象的成员或数组的索引，第二个为对应变量或内容。如果需要退出 each 循环可使回调函数返回 false，其它返回值将被忽略。

```js
// 1.遍历数组
$.each(['A', 'B', 'C'], function (index, val) { 
        console.log(`下标：${index}，值：${val}`);
});
/*
下标：0，值：A
下标：1，值：B
下标：2，值：C*/

// 2.遍历对象
$.each({name:'Henry', age: 28}, function (key, val) { 
    console.log(`键：${key}，值：${val}`);
});
/*
键：name，值：Henry
键：age， 值：28*/
```

## 2. $.extend()

用一个或多个其他对象来扩展一个对象，返回被扩展的对象。

```js
function tool(options) {
    // 默认配置
    let configs = {
        duration: 1000,
        interval: 15
    };
    // 修改默认配置
    $.extend(configs, options);
    console.log(configs); // {duration: 2000, interval: 15, color: "green"}
}
tool({
    duration: 2000,
    color: 'green'
});
```

## 3. $.grep(Array,fn(item,index){})

过滤数组元素,并返回新元素，返回则return true；

```js
resArr = $.grep([1, 2, 3, 4], (num, index) => {
    return num % 2 == 0;
});
console.log(resArr); // [2, 4]
```

## 4.$.map(Array,fn(item,index){})

过滤数组元素,并返回新元素，return 什么就接收什么

```javascript
var twoArr = $.map($("#myList li"),function (item,index){
	return item;
});
console.log(twoArr);
```

## 5.$.makeArray(likeArray)

类数组变成纯数组

```javascript
console.log( $.makeArray($("#myList li")) ); // [li,li,li,li,li]
console.log( $.makeArray(document.querySelectorAll("#myList li")) );// [li,li,li,li,li]
```

## 6.inArray(val,Array)

判断元素在数组中的索引值

```javascript
var arr = [8,2,5,4,2,6];
console.log( $.inArray(5, arr) ); // 2
```

## 7.toArray()

jqDom对象的方法，把jqDom对象转换为纯属组,和$.makeArray()功能一致

```javascript
$("#myList li").toArray(); // [li,li,li,li,li]
```

## 8.$.proxy()

$.proxy() 改变函数内的this指向

```javascript
function testFn(){
	console.log(this);
};
// testFn(); // 指向window
var newFn = $.proxy(testFn,{name:"tom"});
newFn(); // {name:"tom"}
```

## 9.类型判断



- $.type()  判断数据类型 

- $.isFunction()  判断是否为函数，返回boolean

- $.isEmptyObject()  判断是否为空对象，返回boolean

- $.isPlainObject()  判断是否为春对象，返回boolean

- $.isWindow()  判断是否为window对象

- $.isNumeric  判断是否为数字

  ```javascript
  // $.proxy() 改变函数内的this指向
  
  function testFn(){
  
  	console.log(this);
  
  };
  
  // testFn();
  
  var newFn = $.proxy(testFn,{name:"tom"});
  
  newFn();
  
  // $.type() 判断数据类型
  
  console.log( $.type(100) );  // number
  
  console.log( $.type([1,2]) );  // array
  
  console.log( $.type({}) );  // object
  
  console.log( $.type($("h1")) );  // object
  
  console.log( $.type( testFn ) );  // function
  
  // $.isFunction() 是否为函数
  
  console.log( $.isFunction( testFn ) );  // true
  
  console.log( $.isFunction( newFn ) );  // true
  
  // $.isEmptyObject() 是否为空对象
  
  console.log( $.isEmptyObject({}) ) // true
  
  // $.isPlainObject() 是否为纯对象
  
  console.log( $.isPlainObject({}) );  // true
  
  console.log( $.isPlainObject([1]) );  // false
  
  console.log( $.isPlainObject($("h1")) );  // false
  
  // $.isWindow()  判断是否为Window对象
  
  console.log( $.isWindow(window) );  // true
  
  // $.isNumber() 判断是否为数字
  
  console.log( $.isNumeric(1.1) ); // true
  
  console.log( $.isNumeric(NaN) ); // false
  
  console.log( $.isNumeric("123") ); // true
  
  console.log( $.isNumeric("123a") ); // false
  ```

  

## 10.字符串

- $.trim()  去除空格

- $.param() 序列化成字符串

- $.fn.jquery  获取jQuery 版本

  ```javascript
  // $.trim(String) 去掉两边空格
  
  var str = "    Hello    "
  
  console.log( "|" + str +"|" );  // |    Hello    | 
  
  console.log( "|" + $.trim(str) +"|" );  // |Hello|
  
  
  // $.param() 序列化成字符串
  
  console.log( $.param({name:"Tom",age:"18"}) );  // name=Tom&age=18
  
  console.log( $.param("123") );  // 0=1&1=2&2=3
  
  $("#btn").click(function (){
  	console.log( $.param( $("input") ) ); // =hh&=xx
  	return false;
  });
  
  // jQuery 版本
  console.log( $.fn.jquery ); // 3.4.1
  ```

  