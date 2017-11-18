### 1. 项目经理、技术经理都干嘛
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

test2 = str.replace(/\d+/g,val=>{
    return `[${val}]`;
})
console.log(test2);
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

test3 = str.replace(/\d/g,val=>{
    return val*2;
})
console.log(test3);
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
Array.prototype.selection_sort = function() {
	var i, j, min;
	var temp;
	for (i = 0; i < this.length - 1; i++) {
		min = i;
		for (j = i + 1; j < this.length; j++)
			if (this[min] > this[j])
				min = j;
		temp = this[min];
		this[min] = this[i];
		this[i] = temp;
	}
};
let arr = [1231,456,234,123,756,12]
arr.selection_sort();
console.log(arr);
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
    1. 轻量级所解决的问题更直接，更方便，侵入性小！
    2. 轻量级所消耗的资源也要比重量级的框架要少很多    
### 32. v-model的使用限制
### 33. JQ的优势（特点）
    1. 一款轻量级的js框架
    2. 丰富的DOM选择器(CSS1-3 + XPath)
    3. 链式表达式
    4. 事件、样式、动画支持
    5. Ajax操作支持
    6. 跨浏览器兼容
    7. 插件扩展开发
    8. 可扩展性强
### 34. 从开发，到技术选型，为什么
### 35. VueX通信，ajax如何发起，使用时模块不要重名
### 36. 继承和原型链的关系和区别，如何实现继承
### 37. Vue的方法能不能放到Data，this指针，为什么
### 38. axios post时后端接收不到数据，分析问题和可能性
### 39. MVC MVVM有什么关系
### 40. Vue 动态添加属性
### 41. 构造函数和工厂模式的区别
### 42. 页面从输入URL到加载完成，过程发生了什么（流程）
    1. DNS解析
    2. TCP连接
    3. 发送HTTP请求
    4. 服务器处理请求并返回HTTP报文
    5. 浏览器解析渲染页面
    6. 连接结束

    状态码：
    1xx：指示信息–表示请求已接收，继续处理。
    2xx：成功–表示请求已被成功接收、理解、接受。
    3xx：重定向–要完成请求必须进行更进一步的操作。
    4xx：客户端错误–请求有语法错误或请求无法实现。
    5xx：服务器端错误–服务器未能实现合法的请求。

    平时遇到比较常见的状态码有:200, 204, 301, 302, 304, 400, 401, 403, 404, 422, 500(分别表示什么请自行查找)。

    TODO：
        301和302有什么区别？
        HTTP缓存
###### [参考：输入url到请求响应过程 url解析过程](http://onwise.xyz/2017/03/29/%E8%BE%93%E5%85%A5url%E5%88%B0%E8%AF%B7%E6%B1%82%E5%93%8D%E5%BA%94%E8%BF%87%E7%A8%8B/)
### 43. iframe有哪些缺点
    1. iframes 阻塞页面加载
    2. 唯一的连接池
###### [参考：使用iframe的优缺点，为什么少用iframe以及iframe和frame的区别。](http://gongxquan.blog.163.com/blog/static/2108462532012111643039216)
### 44. 行内元素有哪些？块级元素有哪些？空元素有哪些？
    1. 行内元素有：a b span img input select strong（强调的语气）
    2. 块级元素有：div ul ol li dl dt dd h1 h2 h3 h4…p  
    3. 知名的空元素：<br> <hr> <img> <input> <link> <meta>

    鲜为人知的是：
    <area> <base> <col> <command> <embed> <keygen> <param> <source> <track> <wbr>
### 45. Doctype 作用？严格模式与混杂模式如何区分？他们有何意义？
### 46. 使用过模板语言吗？分别是哪些？
### 47. script,script async,script defer的区别
### 48. 介绍一下CSS的盒子模型，低版本IE的盒子模型有什么不同
    1. 两种，IE 盒子模型、标准 W3C 盒子模型；IE 的content部分包含了 border 和 padding;

    2. 盒模型：内容(content)、填充(padding)、边界(margin)、 边框(border).
### 49. BFC的理解
### 50. 经常遇到的浏览器兼容性有哪些？原因，解决方法是什么，常用Hack的技巧
    * IE浏览器的内核Trident、 Mozilla的Gecko、google的WebKit、Opera内核Presto；

    * png24为的图片在iE6浏览器上出现背景，解决方案是做成PNG8.

    * 浏览器默认的margin和padding不同。解决方案是加一个全局的*{margin:0;padding:0;}来统一。

    * IE6双边距bug:块属性标签float后，又有横行的margin情况下，在ie6显示margin比设置的大。

    浮动ie产生的双倍距离 #box{ float:left; width:10px; margin:0 0 0 100px;}

    这种情况之下IE会产生20px的距离，解决方案是在float的标签样式控制中加入 —— _display:inline;将其转化为行内属性。(_这个符号只有ie6会识别)

    渐进识别的方式，从总体中逐渐排除局部。

    首先，巧妙的使用“\9”这一标记，将IE游览器从所有情况中分离出来。
    接着，再次使用“+”将IE8和IE7、IE6分离开来，这样IE8已经独立识别。

    css
        .bb{
             background-color:#f1ee18;/*所有识别*/
            .background-color:#00deff\9; /*IE6、7、8识别*/
            +background-color:#a200ff;/*IE6、7识别*/
            _background-color:#1e0bd1;/*IE6识别*/
        }

    * IE下,可以使用获取常规属性的方法来获取自定义属性,
      也可以使用getAttribute()获取自定义属性;
      Firefox下,只能使用getAttribute()获取自定义属性.
      解决方法:统一通过getAttribute()获取自定义属性.

    * IE下,even对象有x,y属性,但是没有pageX,pageY属性;
      Firefox下,event对象有pageX,pageY属性,但是没有x,y属性.

    *（条件注释）缺点是在IE浏览器下可能会增加额外的HTTP请求数。

    * Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示, 可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决.

    超链接访问过后hover样式就不出现了 被点击访问过的超链接样式不在具有hover和active了解决方法是改变CSS属性的排列顺序:
    L-V-H-A :  a:link {} a:visited {} a:hover {} a:active {}
### 51. CSS的权重优先级如何计算？
### 52. 如何居中div,如何居中一个浮动元素？如何让绝对定位的DIV居中？
    1. 给div设置一个宽度，然后添加margin:0 auto属性

    div{
        width:200px;
        margin:0 auto;
    }  

    2. 居中一个浮动元素

    确定容器的宽高 宽500 高 300 的层
    设置层的外边距

    div {
        Width:500px ; height:300px;//高度可以不设
        Margin: -150px 0 0 -250px;
        position:relative;相对定位
        background-color:pink;//方便看效果
        left:50%;
        top:50%;
    }

    3.绝对定位居中

    div{
        background-color: pink;
        height: 500px;width: 50%;
        position: absolute;
        left:50%;
        margin: 0 0 0 -25%;
    }
### 53. JavaScript有几种数据类型？你能画一下他们的内存图吗？
### 54. 谈谈this对象的理解。
### 55. .call .apply 的作用和区别。
### 56. jQuery的属性拷贝（extend）的实现原理是什么，如何实现深拷贝
### 57. 需求：实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确给出你的技术实现方案？
### 58. 如何实现下拉刷新
````
<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0,  user-scalable=no">
	<title>test</title>
	<style type="text/css" media="screen">
		body {
			margin: 0;
		}

		ul {
			list-style: none;
			padding: 0;
		}

		li {
			height: 30px;
			border-bottom: 1px solid #ddd;
			line-height: 30px;
			padding-left: 10px;
		}

		.scroller .loading {
			height: 60px;
			line-height: 60px;
			text-align: center;
			width: 100%;
			background-color: #f1f1f1;
		}

		.scroller {
			-webkit-overflow-scrolling: touch;
		}
	</style>
</head>

<body>
	<div id="container" class="scroller">
		<div class="loading">
			下拉刷新数据
		</div>
		<ul>
			<li><a href="#">列表数据1</a></li>
			<li><a href="#">列表数据2</a></li>
			<li><a href="#">列表数据3</a></li>
			<li><a href="#">列表数据4</a></li>
			<li><a href="#">列表数据5</a></li>
			<li><a href="#">列表数据6</a></li>
			<li><a href="#">列表数据7</a></li>
			<li><a href="#">列表数据8</a></li>
			<li><a href="#">列表数据9</a></li>
			<li><a href="#">列表数据10</a></li>
			<li><a href="#">列表数据11</a></li>
			<li><a href="#">列表数据12</a></li>
			<li><a href="#">列表数据13</a></li>
			<li><a href="#">列表数据14</a></li>
			<li><a href="#">列表数据15</a></li>
			<li><a href="#">列表数据16</a></li>
			<li><a href="#">列表数据17</a></li>
			<li><a href="#">列表数据18</a></li>
			<li><a href="#">列表数据19</a></li>
			<li><a href="#">列表数据20</a></li>
			<li><a href="#">列表数据21</a></li>
			<li><a href="#">列表数据22</a></li>
			<li><a href="#">列表数据23</a></li>
			<li><a href="#">列表数据24</a></li>
			<li><a href="#">列表数据25</a></li>
			<li><a href="#">列表数据26</a></li>
			<li><a href="#">列表数据27</a></li>
			<li><a href="#">列表数据28</a></li>
			<li><a href="#">列表数据29</a></li>
			<li><a href="#">列表数据30</a></li>
		</ul>
	</div>

	<body>

</html>
<script type="text/javascript">
	console.log(navigator.appVersion);
	var slide = function(option) {
		var defaults = {
			container: '',
			next: function() {}
		}
		var start,
			end,
			length,
			isLock = false, //是否锁定整个操作
			isCanDo = false, //是否移动滑块
			isTouchPad = (/hp-tablet/gi).test(navigator.appVersion),
			hasTouch = 'ontouchstart' in window && !isTouchPad;
		var obj = document.querySelector(option.container);
		console.log(obj.parentElement);
		var loading = obj.firstElementChild;
		var offset = loading.clientHeight;
		var objparent = obj.parentElement;
		/*操作方法*/
		var fn = {
			//移动容器
			translate: function(diff) {
				obj.style.webkitTransform = 'translate3d(0,' + diff + 'px,0)';
				obj.style.transform = 'translate3d(0,' + diff + 'px,0)';
			},
			//设置效果时间
			setTransition: function(time) {
				obj.style.webkitTransition = 'all ' + time + 's';
				obj.style.transition = 'all ' + time + 's';
			},
			//返回到初始位置
			back: function() {
				fn.translate(0 - offset);
				//标识操作完成
				isLock = false;
			},
			addEvent: function(element, event_name, event_fn) {
				if (element.addEventListener) {
					element.addEventListener(event_name, event_fn, false);
				} else if (element.attachEvent) {
					element.attachEvent('on' + event_name, event_fn);
				} else {
					element['on' + event_name] = event_fn;
				}
			}
		};

		fn.translate(0 - offset);
		fn.addEvent(obj, 'touchstart', start);
		fn.addEvent(obj, 'touchmove', move);
		fn.addEvent(obj, 'touchend', end);
		fn.addEvent(obj, 'mousedown', start)
		fn.addEvent(obj, 'mousemove', move)
		fn.addEvent(obj, 'mouseup', end)

		//滑动开始
		function start(e) {
			if (objparent.scrollTop <= 0 && !isLock) {
				var even = typeof event == "undefined" ? e : event;
				//标识操作进行中
				isLock = true;
				isCanDo = true;
				//保存当前鼠标Y坐标
				start = hasTouch ? even.touches[0].pageY : even.pageY;
				//消除滑块动画时间
				fn.setTransition(0);
				loading.innerHTML = '下拉刷新数据';
			}
			return false;
		}

		//滑动中
		function move(e) {
			if (objparent.scrollTop <= 0 && isCanDo) {
				var even = typeof event == "undefined" ? e : event;
				//保存当前鼠标Y坐标
				end = hasTouch ? even.touches[0].pageY : even.pageY;
				if (start < end) {
					even.preventDefault();
					//消除滑块动画时间
					fn.setTransition(0);
					//移动滑块
					if ((end - start - offset) / 2 <= 150) {
						length = (end - start - offset) / 2;
						fn.translate(length);
					} else {
						length += 0.3;
						fn.translate(length);
					}
				}
			}
		}
		//滑动结束
		function end(e) {
			if (isCanDo) {
				isCanDo = false;
				//判断滑动距离是否大于等于指定值
				if (end - start >= offset) {
					//设置滑块回弹时间
					fn.setTransition(1);
					//保留提示部分
					fn.translate(0);
					//执行回调函数
					loading.innerHTML = '正在刷新数据';
					if (typeof option.next == "function") {
						option.next.call(fn, e);
					}
				} else {
					//返回初始状态
					fn.back();
				}
			}
		}
	}
	slide({
		container: "#container",
		next: function(e) {
			//松手之后执行逻辑,ajax请求数据，数据返回后隐藏加载中提示
			var that = this;
			setTimeout(function() {
				that.back.call();
			}, 2000);
		}
	});
</script>
````
### 59. Vue混合式通信
### 60. svn 和 git的区别
### 61. chunkhash是什么？js加版本号是问号后加时间戳好，还是该文件名加chunkhash好？
