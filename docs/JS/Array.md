---
title: JS数组常用的方法
date: 2020-05-29
---

# JS数组常用的方法

## 不会改变原数组的：
1.  **map**: 
 	创建一个新数组，其结果是该数组中的每个元素都调用一次提供的函数后的返回值。
```
	var new_array = arr.map(function callback(currentValue[, index[, array]]) 		{
 			// Return element for new_array 
		}[, thisArg])
	arr.map(x => x +1); 
```

2.  **toString()** 将数组元素转换成一个由“，”隔开的字符串

3. **filter**: 返回符合要求的元素
	var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])

5.  **some**: 有一项返回true，则整体为true
	_arr_.some(_callback(element[, index[, array]])[, thisArg]_)

6. **every**: 有一项返回false，则整体为false
	arr.every(callback[, thisArg])

7.  **join**: 方法将一个数组（或一个 [类数组对象](https://developer.mozilla.org/zh-CN//docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects) ）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
```
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"	
```

11. **concat**: 连接数组，不影响原数组， 浅拷贝 
```
	const array3 = array1.concat(array2);
	var num1 = [[1]];
	var num2 = [2, [3]];
	var num3=[5,[6]];

	var nums = num1.concat(num2);

	console.log(nums);
	// results is [[1], 2, [3]]

	var nums2=num1.concat(4,num3);

	console.log(nums2)
	// results is [[1], 4, 5,[6]]

	// modify the first element of num1
	num1[0].push(4);

	console.log(nums);
// results is [[1, 4], 2, [3]]
	
```

12. **slice(start, end)**: 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的**浅拷贝**（包括 begin，不包括end）。原始数组不会被改变。
```
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
	
```
	
13.  **数组拆解:flat**: 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
```
	var arr1 = [1, 2, [3, 4]];
arr1.flat(); 
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

//使用 Infinity，可展开任意深度的嵌套数组
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

```

14.  **indexOf / lastIndexOf(value, fromIndex)**: 查找数组项，返回对应的下标 未找到返回 -1
	fromIndex  开始查找的位置
	**在比较第一个参数与数组的每一项时，采用的全等(===)**

15.  **reduce / reduceRight**
```
	arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
	reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
	
	[详解](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
```

16. **flatMap()** 相当于flat(1) 但是效率更高

## 会修改原来的数组：
1.  **forEach**: 无法break，可以用try/catch中throw new Error来停止
```
	arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
	arr.foreach( element => element * 2 );
```

2.  **push** / **pop**: 末尾推入和弹出，改变原数组， 
```
	arr.push(element1, …, elementN) 返回新的arr.length

	arr.pop() // 删除最后一个元素 返回改元素的值

```

3. **unshift** / **shift**: 头部推入和弹出，改变原数组，返回操作项
```
	arr.shift() //删除 删除数组第一个元素，并且返回该元素的值
	arr.unshift(element1, …, elementN) // 像数组的开头添加元素，返回新的arr.length

```

4. **sort(fn)** / **reverse**: 排序与反转，改变原数组
```
*使用映射改善排序*

// 需要被排序的数组
var list = [‘Delta’, ‘alpha’, ‘CHARLIE’, ‘bravo’];

// 对需要排序的数字和位置的临时存储
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})

// 按照多个值排序数组
mapped.sort(function(a, b) {
  return +(a.value > b.value) || +(a.value === b.value) - 1;
});

// 根据索引得到排序的结果
var result = mapped.map(function(el){
  return list[el.index];
});
	
//数组乱序：
*var* arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.sort(*function* () {
    *return* Math.random() - 0.5;
});

```


5.  **splice(start, number, value…)**: 返回删除元素组成的数组，value 为插入项，改变原数组
```
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
	
```


