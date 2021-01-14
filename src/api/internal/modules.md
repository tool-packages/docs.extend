---
id: 'modules'
title: 'API'
---

## MAX_SAFE_INTEGER <Badge text="0.0.1"/>

Number 最大值

```ts
const MAX_SAFE_INTEGER: number = Number.MAX_SAFE_INTEGER || 9007199254740991;
```

> 定义于: [constant.ts:19](https://github.com/tool-packages/extend/blob/5631ae4/packages/internal/src/constant.ts#L19)

---

## MIN_SAFE_INTEGER <Badge text="0.0.1"/>

Number 最小值

```ts
const MIN_SAFE_INTEGER: number = Number.MIN_SAFE_INTEGER || -9007199254740991;
```

> 定义于: [constant.ts:30](https://github.com/tool-packages/extend/blob/5631ae4/packages/internal/src/constant.ts#L30)

---

## coreJsData <Badge text="0.0.1"/>

用于检测扩展的 core-js 填充

```ts
const coreJsData: any = root['__core-js_shared__'];
```

> 定义于: [constant.ts:8](https://github.com/tool-packages/extend/blob/5631ae4/packages/internal/src/constant.ts#L8)

---

## freeExports <Badge text="0.0.1"/>

exports 对象检测
::: warning 注意
Node.js 原生支持 CommonJS 模块加载机制，在全局环境上会暴露 module 对象和 exports 对象
:::

```ts
const freeExports: any = typeof exports === 'object' && exports !== null && !exports['nodeType'] && exports;
```

> 定义于: [global.ts:44](https://github.com/tool-packages/extend/blob/5631ae4/packages/internal/src/global.ts#L44)

---

## freeGlobal <Badge text="0.0.1"/>

在 node 环境中捕获 global 变量
::: warning 注意
这里有个缺陷 global 是可以被冒充的 => var global = { Object: Object }
:::

```ts
const freeGlobal: (NodeJS.Global & typeof globalThis) | false =
  typeof global === 'object' && global !== null && global.Object === Object && global;
```

> 定义于: [global.ts:9](https://github.com/tool-packages/extend/blob/5631ae4/packages/internal/src/global.ts#L9)

---

## freeGlobalThis <Badge text="0.0.1"/>

获取 globalThis 变量
::: warning 注意
globalThis 提供了一个标准的方式来获取不同环境下的全局 this 对象, 也就是全局对象自身。
可以确保代码在不同的环境下，都可以正常工作。
:::

```ts
const freeGlobalThis: typeof globalThis | false =
  typeof globalThis === 'object' && globalThis !== null && globalThis.Object === Object && globalThis;
```

> 定义于: [global.ts:21](https://github.com/tool-packages/extend/blob/5631ae4/packages/internal/src/global.ts#L21)

---

## freeModule <Badge text="0.0.1"/>

module 对象检测
::: warning 注意
先判断是否存在 exports 对象, 因为这两个在 Node.js 中肯定是同时存在的
:::

```ts
const freeModule: NodeModule | false =
  freeExports && typeof module === 'object' && module !== null && !module['nodeType'] && module;
```

> 定义于: [global.ts:54](https://github.com/tool-packages/extend/blob/5631ae4/packages/internal/src/global.ts#L54)

---

## freeProcess <Badge text="0.0.1"/>

从 Node.js 中检测可用变量 process

```ts
const freeProcess: NodeJS.Process | false = moduleExports && freeGlobal && freeGlobal.process;
```

> 定义于: [global.ts:72](https://github.com/tool-packages/extend/blob/5631ae4/packages/internal/src/global.ts#L72)

---

## freeSelf <Badge text="0.0.1"/>

获取 self 变量
::: warning 注意
self 在浏览器中大部分情况下指向的是当前 window 引用;
而在 worker 中，只有 self 这个顶层全局对象，是没有 window 对象的;
:::

```ts
const freeSelf: (Window & typeof globalThis) | false =
  typeof self === 'object' && self !== null && self.Object === Object && self;
```

> 定义于: [global.ts:33](https://github.com/tool-packages/extend/blob/5631ae4/packages/internal/src/global.ts#L33)

---

## funcProto <Badge text="0.0.1"/>

Function 原型链

```ts
const funcProto: Function = Function.prototype;
```

> 定义于: [constant.ts:81](https://github.com/tool-packages/extend/blob/5631ae4/packages/internal/src/constant.ts#L81)

---

## moduleExports <Badge text="0.0.1"/>

检测当前环境是否支持 CommonJS 模块加载机制
::: warning 注意
CommonJS 规定，exports 对象必须为 module.exports 的引用。
:::

```ts
const moduleExports: boolean = freeModule && freeModule.exports === freeExports;
```

> 定义于: [global.ts:65](https://github.com/tool-packages/extend/blob/5631ae4/packages/internal/src/global.ts#L65)

---

## objectProto <Badge text="0.0.1"/>

Object 原型链

```ts
const objectProto: Object = Object.prototype;
```

> 定义于: [constant.ts:37](https://github.com/tool-packages/extend/blob/5631ae4/packages/internal/src/constant.ts#L37)

---

## root <Badge text="0.0.1"/>

获取顶层全局对象
::: warning 注意
首先是 globalThis，因为这有最大的普适性；
接着是 global，因为在 node 的环境中，性能的考量会比浏览器环境更重要；
在有 window 的环境中，self 肯定是 window 对象的引用；
在松散模式下，可以在函数中返回 this 获取全局对象，但是在严格模式下，this 会返回 undefined;
因此也可以使用 Function('return this')() 来获取顶层全局对象。
:::

```ts
const root: any = freeGlobalThis || freeGlobal || freeSelf || // eslint-disable-next-line @typescript-eslint/no-implied-eval Function('return this')()
```

> 定义于: [global.ts:86](https://github.com/tool-packages/extend/blob/5631ae4/packages/internal/src/global.ts#L86)

---

## symbolToStringTag <Badge text="0.0.1"/>

定义对象的自定义类型标签，通过 Object.prototype.toString.call 获取

```ts
const symbolToStringTag: symbol | undefined = root.Symbol ? root.Symbol.toStringTag : undefined;
```

> 定义于: [constant.ts:95](https://github.com/tool-packages/extend/blob/5631ae4/packages/internal/src/constant.ts#L95)

## baseGetTag <Badge text="0.0.1"/>

获取参数的数据的类型

```ts
const baseGetTag: (arg: any) => string;
```

<h4>参数:</h4>

| 名称  | 类型 | 描述               |
| ----- | ---- | ------------------ |
| `arg` | any  | 需要获取类型的参数 |

<h4>返回:</h4>

`(string)`: 数据类型名称 Null | Undefined | Number | Object | ...

<h4>示例:</h4>

```js
baseGetTag(null); // => 'Null'
baseGetTag(void 0); // => 'Undefined'
baseGetTag(NaN); // => 'Number'

class MyObject {}
baseGetTag(new MyObject()); // => 'MyObject'

class ValidatorClass {
  get [Symbol.toStringTag]() {
    return 'test';
  }
}
baseGetTag(new ValidatorClass()); // => 'test'

const obj = {};
Object.defineProperty(obj, Symbol.toStringTag, { value: 'customObj' });
baseGetTag(obj); // => 'customObj'

const obj2 = {};
obj2[Symbol.toStringTag] = 'test';
baseGetTag(obj2); // => 'Object'
```

> 定义于: [baseGetTag.ts:36](https://github.com/tool-packages/extend/blob/5631ae4/packages/internal/src/baseGetTag.ts#L36)

---

## baseIsNative <Badge text="0.0.1"/>

isNative 的基本实现没有错误的填充检查

```ts
const baseIsNative: (value: any) => boolean;
```

<h4>参数:</h4>

| 名称    | 类型 | 描述       |
| ------- | ---- | ---------- |
| `value` | any  | 要检测的值 |

<h4>返回:</h4>

`(boolean)`: 是否是内置函数

<h4>示例:</h4>

```js
baseIsNative(Array.prototype.push); // => true
baseIsNative(_); // => false
```

> 定义于: [baseIsNative.ts:29](https://github.com/tool-packages/extend/blob/5631ae4/packages/internal/src/baseIsNative.ts#L29)

---

## funcToString <Badge text="0.0.1"/>

Function 原型链

```ts
const funcToString: () => string;
```

<h4>返回:</h4>

`(string)`:

> 定义于: [constant.ts:88](https://github.com/tool-packages/extend/blob/5631ae4/packages/internal/src/constant.ts#L88)

---

## getPrototypeOf <Badge text="0.0.1"/>

返回对象的原型

```ts
const getPrototypeOf: (o: any) => any;
```

<h4>参数:</h4>

| 名称 | 类型 |
| ---- | ---- |
| `o`  | any  |

<h4>返回:</h4>

`(any)`:

<h4>示例:</h4>

```js
nativeGetPrototypeOf(obj) === Object.prototype; // => true
nativeGetPrototypeOf([]) === Array.prototype; // => true
```

> 定义于: [constant.ts:74](https://github.com/tool-packages/extend/blob/5631ae4/packages/internal/src/constant.ts#L74)

---

## hasOwnProperty <Badge text="0.0.1"/>

基于 Object 原型链上的 hasOwnProperty 方法，检测属性值是否存在

```ts
const hasOwnProperty: (v: string | number | symbol) => boolean;
```

<h4>参数:</h4>

| 名称 | 类型   |
| ---- | ------ | ------ | ------ |
| `v`  | string | number | symbol |

<h4>返回:</h4>

`(boolean)`:

<h4>示例:</h4>

```js
const obj = { a: 1, b: 2 };
objectHasOwnProperty.call(obj, 'a'); // true
objectHasOwnProperty.call(obj, 'toString'); // false
```

> 定义于: [constant.ts:50](https://github.com/tool-packages/extend/blob/5631ae4/packages/internal/src/constant.ts#L50)

---

## isMaskable <Badge text="0.0.1"/>

检测参数的源码是否能够被屏蔽

```ts
const isMaskable: (value: any) => boolean;
```

<h4>参数:</h4>

| 名称    | 类型 | 描述         |
| ------- | ---- | ------------ |
| `value` | any  | 要检测的参数 |

<h4>返回:</h4>

`(boolean)`: 如果参数能够被屏蔽, 返回 true, 否则返回 false

> 定义于: [isMaskable.ts:10](https://github.com/tool-packages/extend/blob/5631ae4/packages/internal/src/isMaskable.ts#L10)

---

## objectToString <Badge text="0.0.1"/>

基于 Object 原型链上的 toString 方法，获取对象的类型

```ts
const objectToString: () => string;
```

<h4>返回:</h4>

`(string)`:

<h4>示例:</h4>

```js
objectToString.call({}); // [object Object]
objectToString.call([]); // [object Array]
objectToString.call(function () {}); // [object Function]
```

> 定义于: [constant.ts:62](https://github.com/tool-packages/extend/blob/5631ae4/packages/internal/src/constant.ts#L62)
