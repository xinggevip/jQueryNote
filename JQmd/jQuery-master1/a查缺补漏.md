## 1.查找

##### 找后代系列

- children([selector])  获取子元素
- find(select)  获取后代元素

##### 找祖先系列

- parent()  获取父元素
- parents()  获取祖先元素
- parentsUntil(selector)   获取祖先元素直到遇到select，返回不包括selector的祖先元素
- offsetParent()  获取第一个定位的祖先元素

##### 找兄弟系列

- next([selector])  紧邻在后面的兄弟元素
- nextAll()  紧邻在后面的所有兄弟元素
- nextUntil(selector)  兄弟元素的下面所有元素,直到遇到selector，返回不包括selector的兄弟元素
- prev([selector])  紧邻在前面的兄弟元素
- prevAll()  紧邻在前面的所有兄弟元素
- prevUntil(selector)  兄弟元素的前面所有元素,直到遇到selector，返回不包括selector的兄弟元素
- siblings([selector])   获取所有的兄弟元素，也可以通过选择器排除不想要的元素
- closest(select)  从所有的祖元素和本身 里面找出第一个满足条件，返回满足条件的元素

## 2.串联

- add(selector)  把add匹配的元素添加到jQuery Dom中
- addBack([selector])  添加堆栈中元素集合到当前集合，一个选择性的过滤选择器。谁调用了find()，就把谁添加到jQuery，空值为上一层，提供值为筛选。把调用该方法的元素添加到集合
- end()  破坏性操作，破坏上一个操作
- contents()返回所有子节点集合

## 3.jQuery DOM对象操作

- each()  遍历
- map()  返回新集合
- length  集合中元素的数量
- index()  在父元素中的索引位置
- get([index])  返回集合指定索引的dom对象，还可以吧jq对象转换为纯数组
- is(select)  判断该jqdom是否满足某个条件 返回布尔值

##### 3.1创建元素

- 
- 

##### 3.2内部插入

- [append(content|fn)](http://www.bejson.com/apidoc/jquery/append.html)内部插入后

- [appendTo(content)](http://www.bejson.com/apidoc/jquery/appendTo.html)内部插入后

- [prepend(content|fn)](http://www.bejson.com/apidoc/jquery/prepend.html)内部插入前

- [prependTo(content)](http://www.bejson.com/apidoc/jquery/prependTo.html)内部插入前

  

##### 3.3外部插入

- [after(content|fn)](http://www.bejson.com/apidoc/jquery/after.html)兄弟插入后

- [insertAfter(content)](http://www.bejson.com/apidoc/jquery/insertAfter.html)兄弟插入后

- [before(content|fn)](http://www.bejson.com/apidoc/jquery/before.html)兄弟插入前

- [insertBefore(content)](http://www.bejson.com/apidoc/jquery/insertBefore.html)兄弟插入前

  

##### 3.4包裹

- [wrap(html|ele|fn)](http://www.bejson.com/apidoc/jquery/wrap.html)每一层都包裹
- [unwrap()](http://www.bejson.com/apidoc/jquery/unwrap.html)移除父元素
- [wrapAll(html|ele)](http://www.bejson.com/apidoc/jquery/wrapAll.html)所有元素包一层
- [wrapInner(html|ele|fn)](http://www.bejson.com/apidoc/jquery/wrapInner.html)给每一个元素的子元素都加上指定父元素
- 

##### 3.5替换

- [replaceWith(content|fn)](http://www.bejson.com/apidoc/jquery/replaceWith.html)

- [replaceAll(selector)](http://www.bejson.com/apidoc/jquery/replaceAll.html)

  

##### 3.6删除

- [empty()](http://www.bejson.com/apidoc/jquery/empty.html)

- [remove([expr\])](http://www.bejson.com/apidoc/jquery/remove.html)

- [detach([expr\])](http://www.bejson.com/apidoc/jquery/detach.html)

  

##### 3.7克隆

- [clone([Even[,deepEven\]])](http://www.bejson.com/apidoc/jquery/clone.html)

## 4.控制事件触发

- trigger()
- triggerHandle()

## 5.事件列表

- ready  页面中DOM加载完毕

- focusin  获取焦点，绑定给输入框的父元素
- foucusout  失去焦点，绑定给输入框的父元素
- mouseenter  代替 mouseover 鼠标悬停在元素上
- mouseleave  代替 mouseout 鼠标离开元素
- hover  mouseenter和mouseleave的集合

## 6.事件对象Event

- pageX  鼠标箭头的x坐标
- pageY  鼠标箭头的y坐标
- target  当前触发事件的元素
- which  键盘按键的ASCII码
- type 事件类型（事件名称）
- preventDefault  阻止默认事件
- stopPropagation()   阻止冒泡事件
- return false  既可以阻止默认事件，又可以阻止冒泡事件