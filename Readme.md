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
const promise = new Promise((resovle reject)=>{
        resole('success1');
        reject('error');
        resole('success2');
    });

promise
    .then(res=>{
            console.log('then: ', res);
        })
    .catch(err=>{
            console.log('catch: ', err);
        });

Promise.resovle(1)
    .then(res=>{
            console.logres);
            return 2;
        })
    .catch(err=>{
            return 3;
        })
    .catch(res=>{
            console.log(res);
        });
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
### 10. ES5写一下用getter和setter的案例
### 11. 写一下闭包
### 12. 写一下排序（快速排序、选择排序、sort）
### 13. Vue组件通信
### 14. 如果后台报错，你应该怎么处理
### 15. Vue的生命周期
### 16. computed 和 watch 的区别
### 17. 如果我想要页面所有数据都加载完后，自动调用一个方法该怎么做
### 18. 前端如何预防后端给的东西报错
### 19. 拦截器
### 20. 对闭包的理解
### 21. babel的两种方式（2种环境）
