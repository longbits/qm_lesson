react + redux + immutable(不变的量)


深拷贝 浅拷贝 都为拷贝
规避js 复杂对象类型引用式赋值
引用式赋值会让代码未来变得不可预测，不在单纯，出现二义性；

结合react reducer纯函数，引入Immutable 来确保状态对象赋值后是全新的对象，不会影响原对象
1、 浅拷贝
    slice concat 但是解决不了非[]，如果是数组最直接
    最原始的for（key in) 重新赋值 没有解决不了的
2、 嵌套对象时，如果内部没有函数的话，JSON.parse(JSON.stringify（）);
3\ 递归思想，将一个深拷贝变为n个浅拷贝,当元素不为对象时退出，性能开销大。

各有优势，看情况使用。
typerof obj ! == 'object' return;
obj instanceof Array ?  去创建一个全新的对象

