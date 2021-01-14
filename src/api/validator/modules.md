---
id: 'modules'
title: 'API'
---

## getTag <Badge text="0.0.1"/>

获取参数的数据的类型

```ts
let getTag: (arg: any) => string;
```

<h4>参数:</h4>

| 名称  | 类型 |
| ----- | ---- |
| `arg` | any  |

<h4>返回:</h4>

`(string)`: 数据类型名称 Null | Undefined | Number | Object | ...

<h4>示例:</h4>

```js
getTag(null); // => 'Null'
getTag(void 0); // => 'Undefined'
getTag(NaN); // => 'Number'

class MyObject {}
getTag(new MyObject()); // => 'MyObject'

class ValidatorClass {
  get [Symbol.toStringTag]() {
    return 'test';
  }
}
getTag(new ValidatorClass()); // => 'test'

const obj = {};
Object.defineProperty(obj, Symbol.toStringTag, { value: 'customObj' });
getTag(obj); // => 'customObj'

const obj2 = {};
obj2[Symbol.toStringTag] = 'test';
getTag(obj2); // => 'Object'
```

> 定义于: [getTag.ts:48](https://github.com/tool-packages/extend/blob/5631ae4/packages/validator/src/getTag.ts#L48)

---

## isFunction <Badge text="0.0.1"/>

检测参数是否为函数类型

```ts
const isFunction: <T>(value: any) => value is T;
```

<h4>类型参数:</h4>

| 名称 | 默认     |
| ---- | -------- |
| `T`  | Function |

<h4>参数:</h4>

| 名称    | 类型 | 描述         |
| ------- | ---- | ------------ |
| `value` | any  | 要检测的参数 |

<h4>返回:</h4>

`(value is T)`: 如果参数是 Function，返回 true，否则返回 false

<h4>示例:</h4>

```js
isFunction(class Any {}); // => true
isFunction(() => {}); // => true
isFunction(async () => {}); // => true
isFunction(function* Any() {}); // => true
isFunction(Math.round); // => true
isFunction(/abc/); // => false
isFunction(null); // => false
```

> 定义于: [isFunction.ts:20](https://github.com/tool-packages/extend/blob/5631ae4/packages/validator/src/isFunction.ts#L20)

---

## isNative <Badge text="0.0.1"/>

检测参数是否是内置函数
::: warning 注意
这个方法在 core-js 包的环境下探测内置函数不可靠，因为 core-js 绕过了这类检测方法。
尽管有多个请求，但是 core-js 维护者很清楚地声明：任何试图修复探测方法都会被阻止。
因此，我们别无选择只能抛出错误。
不幸的是，这样还是会影响那些依赖于 core-js 的包，例如 babel-polyfil
:::

```ts
const isNative: (value: any) => boolean;
```

<h4>参数:</h4>

| 名称    | 类型 | 描述         |
| ------- | ---- | ------------ |
| `value` | any  | 要检测的参数 |

<h4>返回:</h4>

`(boolean)`: 如果参数是内置函数，返回 true,否则返回 false

<h4>示例:</h4>

```js
isNative(Array.prototype.push); // => true
isNative(_); // => false
```

> 定义于: [isNative.ts:21](https://github.com/tool-packages/extend/blob/5631ae4/packages/validator/src/isNative.ts#L21)

---

## isNil <Badge text="0.0.1"/>

测试参数是否为 null | undefined

```ts
const isNil: (value: any) => value is undefined | null;
```

<h4>参数:</h4>

| 名称    | 类型 | 描述         |
| ------- | ---- | ------------ |
| `value` | any  | 要检测的参数 |

<h4>返回:</h4>

`(value is undefined | null)`: 如果参数是 null 或者 undefined 返回 true，否则返回 false

<h4>示例:</h4>

```js
isNil(null); // => true
isNil(void 0); // => true
isNil(NaN); // => false
```

> 定义于: [isNil.ts:13](https://github.com/tool-packages/extend/blob/5631ae4/packages/validator/src/isNil.ts#L13)

---

## isNumber <Badge text="0.0.1"/>

检测参数是否为数字

```ts
const isNumber: (value: any) => value is number;
```

<h4>参数:</h4>

| 名称    | 类型 | 描述         |
| ------- | ---- | ------------ |
| `value` | any  | 要检测的参数 |

<h4>返回:</h4>

`(value is number)`: 如果参数是数字，返回 true，否则返回 false

<h4>示例:</h4>

```js
isNumber(3); // => true
isNumber(Number.MIN_VALUE); // => true
isNumber(Infinity); // => true
isNumber(NaN); // => true
isNumber(new Number(2)); // => true
isNumber('3'); // => false
```

> 定义于: [isNumber.ts:19](https://github.com/tool-packages/extend/blob/5631ae4/packages/validator/src/isNumber.ts#L19)

---

## isObject <Badge text="0.0.1"/>

检测参数是否属于 `Object` (例如：arrays, functions, objects, regexes, `new Number(0)`, `new String('')`)

```ts
const isObject: <T>(value: any) => value is T;
```

<h4>类型参数:</h4>

| 名称 | 默认   |
| ---- | ------ |
| `T`  | object |

<h4>参数:</h4>

| 名称    | 类型 | 描述         |
| ------- | ---- | ------------ |
| `value` | any  | 要检测的参数 |

<h4>返回:</h4>

`(value is T)`: 如果参数属于 `Object`，返回 true，否则返回 false

<h4>示例:</h4>

```js
isObject({}); // => true
isObject([1, 2, 3]); // => true
isObject(function fn() {}); // => true
isObject(null); // => false
```

> 定义于: [isObject.ts:14](https://github.com/tool-packages/extend/blob/5631ae4/packages/validator/src/isObject.ts#L14)

---

## isObjectHost <Badge text="0.0.1"/>

检测参数是否是 IE < 9 中的宿主对象(window/document...)

```ts
const isObjectHost: (value: any) => boolean;
```

<h4>参数:</h4>

| 名称    | 类型 | 描述         |
| ------- | ---- | ------------ |
| `value` | any  | 要检测的参数 |

<h4>返回:</h4>

`(boolean)`: 如果参数是宿主对象返回 true，否则返回 false

<h4>示例:</h4>

```js
isHostObject(window); // => ie < 9: true, other: false
isHostObject(document); // => ie < 9: true, other: false
isHostObject({}); // => ie < 9: false, other: false
isHostObject(Object); // => ie < 9: false, other: false
```

> 定义于: [isObjectHost.ts:14](https://github.com/tool-packages/extend/blob/5631ae4/packages/validator/src/isObjectHost.ts#L14)

---

## isObjectLike <Badge text="0.0.1"/>

检测参数是否为类对象(所有 不为 null 且 typeof 后的结果是 "object" 的对象)

```ts
const isObjectLike: <T>(value: any) => value is T;
```

<h4>类型参数:</h4>

| 名称 | 默认   |
| ---- | ------ |
| `T`  | object |

<h4>参数:</h4>

| 名称    | 类型 |
| ------- | ---- |
| `value` | any  |

<h4>返回:</h4>

`(value is T)`: 如果参数是类对象，返回 true，否则返回 false

<h4>示例:</h4>

```js
isObjectLike({}); // => true
isObjectLike([1, 2, 3]); // => true
isObjectLike(Function); // => false
isObjectLike(undefined); // => false
isObjectLike(null); // => false
```

> 定义于: [isObjectLike.ts:15](https://github.com/tool-packages/extend/blob/5631ae4/packages/validator/src/isObjectLike.ts#L15)

---

## isObjectPlain <Badge text="0.0.1"/>

检测参数是否为普通对象

```ts
const isObjectPlain: (value: any) => value is object;
```

<h4>参数:</h4>

| 名称    | 类型 | 描述         |
| ------- | ---- | ------------ |
| `value` | any  | 要检测的参数 |

<h4>返回:</h4>

`(value is object)`: 如果参数是普通对象，返回 true，否则返回 false

<h4>示例:</h4>

```js
class Foo {
  a = 1;
}
isPlainObject(new Foo()); // => false
isPlainObject([1, 2, 3]); // => false
isPlainObject({ x: 0, y: 0 }); // => true
isPlainObject(Object.create(null)); // => true
```

> 定义于: [isObjectPlain.ts:20](https://github.com/tool-packages/extend/blob/5631ae4/packages/validator/src/isObjectPlain.ts#L20)
