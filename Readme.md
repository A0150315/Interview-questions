### 1. 项目经理都干嘛
### 2. 需求文档怎么写
### 3. 开发文档怎么写
### 4. 公司多少人
### 5. 主产品是什么
### 6. 如果客户说要做一个东西，需求也不明确怎么做
### 7. Promise
Promise的构造函数中代码是同步执行的，但是then方法是异步执行的，then方法需要等到等到resolve函数执行时才得到执行。
### 8. 运行以下程序
```
const promise = new Promise((resovle, reject) => {
    resovle('success1');
    reject('error');
    resovle('success2');
});

promise.then(res => {
    console.log('then: ', res);
}).catch(err => {
    console.log('catch: ', err);
});

// promise.resovle(1).then(res => {
//     console.log(res);
//     return 2;
// }).catch(err => {
//     return 3;
// }).catch(res => {
//     console.log(res);
// });
```
###### 运行结果为：
```
```
### 9. 字符串笔试题
```
1. abc345defacbca处理后得到345def，去掉里面的abc
2. 把里面的数字用［］包着，abc［345］defacbca
3. 全部数字乘2，得到abc6810defacbca
```
代码：
````
const str = "abc345defacbca1231";
const test1 = str.replace(/a|b|c/g, "");
console.log(test1);
//---------------------
let test2 = str.split("");
const numSymbelReg = /\d/;
let flag = 1;
let str2 = "";
for (let i = 0; i < test2.length; i++) {
    if (numSymbelReg.test(test2[i]) && flag) {
        str2 += "["
        flag = 0;
    }
    str2 += test2[i];
    if (numSymbelReg.test(test2[i]) && !numSymbelReg.test(test2[i + 1])) {
        str2 += "]";
        flag = 1;
    }
}
console.log(str2);
//---------------------
let test3 = str.split("");
const numReg = /\d/;
let str3 = "";
for (let i = 0; i < test3.length; i++) {
    if (numReg.test(test3[i])) {
        str3 += Number(test3[i])*2;
        continue;
    }
    str3 += test3[i];
}
console.log(str3);
````
### 10. ES5写一下用getter和setter的案例
```
const str ={
    str:"I'm test.",
    get getFirst(){return (this.str.split("")[0])},
    set setFirst(char){this.str =char+' '+this.str}
}
str.setFirst=1;
console.log(str.str);
```
### 11. 写一下闭包
```
<body>
    <button type="button" name="button">1</button>
    <button type="button" name="button">2</button>
    <button type="button" name="button">3</button>
    <button type="button" name="button">4</button>
</body>
<script type="text/javascript">
    const btn = document.getElementsByTagName("button");
    for (var i = 0; i < btn.length; i++) {
        btn[i].onclick = (function(i) {
            return () => {
                console.log(i);
            }
        })(i)
    }
</script>
```
### 12. 写一下排序（快速排序、选择排序、sort）
sort:
````
let arr = [12546,67,234,89,234,23];
console.log(arr.sort(s));//[ 23, 67, 89, 234, 234, 12546 ]

function s(a,b){
    return a-b;
}//从小到大
````
快速排序：
````
Array.prototype.quick_sort = function() {
	var len = this.length;
	if (len <= 1)
		return this.slice(0);
	var left = [];
	var right = [];
	var mid = [this[0]];
	for (var i = 1; i < len; i++)
		if (this[i] < mid[0])
			left.push(this[i]);
		else
			right.push(this[i]);
	return left.quick_sort().concat(mid.concat(right.quick_sort()));
};

var arr = [5, 3, 7, 4, 1, 9, 8, 6, 2];
console.log(arr);
arr = arr.quick_sort();
console.log(arr);

````
选择排序：
````
````
### 13. Vue组件通信
### 14. 如果后台报错，你应该怎么处理
### 15. Vue的生命周期
### 16. computed 和 watch 的区别
### 17. 如果我想要页面所有数据都加载完后，自动调用一个方法该怎么做
### 18. 前端如何预防后端给的东西报错
### 19. 拦截器
### 20. 对闭包的理解
### 21. babel的两种方式（2种环境）
### 22. 树形菜单的实现思路(包含数据结构)
### 23. oop 的理解（特性，引用类型）
### 24. socket 的理解，自动重连
### 25. 对Vue的理解，MVVM的理解
### 26. 对React的理解，MVC的理解
### 27. Redux的理解，VueX的对比
### 28. 路由配置表，注意事项
### 29. 组件通信和嵌套路由的关系是否一样，为什么
### 30. 表格封装的思路和考虑的功能点如何实现
### 31. 轻量级的理解
### 32. v-model的使用限制
### 33. JQ的优势（特点）
### 34. 从开发，到技术选型，为什么
### 35. VueX通信，ajax如何发起，使用时模块不要重名
### 36. 继承和原型链的关系和区别，如何实现继承
### 37. Vue的方法能不能放到Data，this指针，为什么
### 38. axios post时后端接收不到数据，分析问题和可能性
### 39. MVC MVVM有什么关系
### 40. Vue 动态添加属性
### 41. 构造函数和工厂模式的区别
### 42. 页面从输入URL到加载完成，过程发生了什么（流程）
### 43. iframe有哪些缺点
### 44. 行内元素有哪些？块级元素有哪些？空元素有哪些？
### 45. Doctype 作用？严格模式与混杂模式如何区分？他们有何意义？
### 46. 使用过模板语言吗？分别是哪些？
### 47. script,script async,script defer的区别
### 48. 介绍一下CSS的盒子模型，低版本IE的盒子模型有什么不同
### 49. BFC的理解
### 50. 经常遇到的浏览器兼容性有哪些？原因，解决方法是什么，常用Hack的技巧
### 51. CSS的权重优先级如何计算？
### 52. 如何居中div,如何居中一个浮动元素？如何让绝对定位的DIV居中？
### 53. JavaScript有几种数据类型？你能画一下他们的内存图吗？
### 54. 谈谈this对象的理解。
### 55. .call .apply 的作用和区别。
### 56. jQuery的属性拷贝（extend）的实现原理是什么，如何实现深拷贝
### 57. 需求：实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确给出你的技术实现方案？
### 58. 如何实现下拉刷新
### 59. Vue混合式通信
