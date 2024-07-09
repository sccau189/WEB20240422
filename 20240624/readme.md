# 20240624

## 引用方式

### 外部檔案

```html
<script src="./assets/js/some.js"></script>
```

***建議使用***

### 元素使用

```html
<script>
    alert(1);
</script>
```

***不建議使用，行數無法對應***

### 練習

跳出視窗顯示`1`表示成功

`js_basic.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>

    </style>
</head>

<body>
</body>
<script src="./assets/js/js_basic.js"></script>

</html>
```

`js_basic.js`

```js
alert(1);
```

## 變數宣告

- 使用`let`關鍵字宣告
- 只能使用`_`與英文字母當開頭
- 只能使用`_`與英文字母與數字組成

### 錯誤示範

```js
let 5s = 'aaa';
let -s = 'bbb';
```

## var與let

使用let宣告變數，其暫時死區TDZ(Temporal Dead Zone)特性可以幫助程式更穩健。

## 終端機輸出

### 一般輸出

```js
let fname = 'David';
console.log(fname);
```

### 列表輸出

```js
let nums = [1, 2, 3, 4];
console.table(nums);
```

### 特殊格式輸出

```js
console.log('%c鴨沒肉！！！\n%c我只是亂喊一下啦~', 'color:red;font-size:20px;', 'color:#dedede')
```

## 型態

### 文字

使用`'`或是`"`將文字包起來


```js
let firstName = 'Lin';
let lastName = 'David';
let fullName = firstName + ' ' + lastName;
// let fullName = 'firstName' + ' ' + lastName;
console.log(fullName);

// let error_1 = 'Lin";


let t1 = "I'm \"David\"";
console.log(t1); // I'm "David"
```

`\`為跳脫字元，將有特殊涵意轉為一般文字

### 數字

包含整數跟浮點數

```js
let n1 = 1;
let n2 = 1.25;
let n3 = n1 + n2;

console.log(n1, n2, n3);
```

### 文字與數字

只要運算過程遇到一個字串型態，全部會被轉為字串處理。

```js
let n = 1
let s = '10'
let ns = n + s
console.log(ns, typeof ns)
```

### 字串數字轉數字型態

```js
let sn = '10';
let n1 = parseInt(sn, 10);
let n2 = +sn;
```

### 數字轉文字

```js
let num = 10;
let sn = num.toString();
```

### 陣列

- 使用`[]`宣告
- 索引`index`從`0`開始

#### 插入最後

```js
let students = [100, 60, 38, 88];
students.push(70);
```

#### 插入第一個

```js
let students = [100, 60, 38, 88];
students.unshift(66);
```

#### 轉為文字

```js
let str = students.join(',');
```

#### 尋找

```js
let findIndex = students.indexOf(100);
```

***沒找到回傳-1***

#### 刪除

```js
let num = 1;
students.splice(findIndex, num);
```

- findIndex 從第幾個索引
- num 砍幾個
- findIndex 為負數時，從後面推算


### 物件

- 定義資料結構
- 可與陣列合併使用，呈現資料庫結構

```js
let appedu_students = [];

appedu_students.push({
    name: 'David',
    city: '台中',
    gender: '男'
});

appedu_students.push({
    name: 'Helen',
    city: '高雄',
    gender: '女'
});

console.table(appedu_students)
```

### 函數

- 函數名稱也是一種變數
- 建議使用`const`常數宣告，可避免複寫問題

```js
/**
 * calc student score avg.
 * @param {object} student 
 */
const calcAVG = (student, offset) => {
    offset = offset || 0;
    let total = student.s1 + student.s2
    let avg = total / 2;
    return avg + offset;
};

let appedu_students = [];

appedu_students.push({
    name: 'David',
    city: '台中',
    gender: '男',
    s1: 100,
    s2: 80
});

appedu_students.push({
    name: 'Helen',
    city: '高雄',
    gender: '女',
    s1: 70,
    s2: 99
});

console.log(appedu_students)
console.table(appedu_students)

appedu_students[0].avg = calcAVG(appedu_students[0])
appedu_students[1].avg = calcAVG(appedu_students[1], 5)
console.table(appedu_students);
```