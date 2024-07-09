# 20240701

## switch case

```js
switch (type) {
    case '+':
        console.log('+++++');
        break;
    case '-':
        console.log('-----');
        break;
    default:
        console.log('not match.');
}
```

***每個`case`內容結束後須加上`break`進行中斷，否則會一直往下執行。***


## 相等運算子

使用`==`符號，最終得到一個`boolean`。

容易與`=`搞混。

```js
let n1 = 10;
let n2 = 100;

console.log(`n1: ${n1}, n2: ${n2}`);

if (n1 == n2) {
    console.log('equal!');
} else {
    console.log('diff');
}



// n1 = n2 => n1 = 100 => if (100)
if (n1 = n2) {
    console.log('equal!');
} else {
    console.log('diff');
}

console.log(`n1: ${n1}, n2: ${n2}`);
```

***使用`===`連同型態一起比較***

## 不相等運算子

`!=`

***使用`!==`連同型態一起比較***

## 大於運算子

`>`

## 大於等於運算子

`>=`

## 小於運算子

`<`

## 小於等於運算子

`<=`

## 及閘(AND)

條件同時成立時為真，使用`&&`符號

```js
let student = {
    name: 'David',
    s1: 50,
    s2: 100
}

// david 所有科目都及格嗎?


/**
 * 1. student.s1 >= 60 => boolA
 * 2. student.s2 >= 60 => boolB
 * 3. boolA && boolB => boolC
 * 4. if (boolC) {}
 */
if (student.s1 >= 60 && student.s2 >= 60) {
    console.log(`${student.name} all pass.`);
} else {
    console.log(`${student.name} not pass.`);
}
```

## 或閘(OR)

條件其中一個成立時為真，使用`||`符號

```js
// david 是否有科目不及格?

if (student.s1 < 60 || student.s2 < 60) {
    console.log('yes');
} else {
    console.log('all pass')
}
```

## 反閘(NOT)

`!`符號

```html
<div class="form-group">
    <label for="gogo" class="form-label">勾勾</label>
    <input type="checkbox" class="form-checkbox" id="gogo">
</div>

<div>
    <button class="btn btn-primary" id="gogo-trigger">切換</button>
</div>
```

```js
let gogoTrigger = document.querySelector('#gogo-trigger');
let gogoCheckbox = document.querySelector('#gogo');


gogoTrigger.addEventListener('click', () => {
    let checked = gogoCheckbox.checked;
    console.log(checked);
    gogoCheckbox.checked = !checked;
    console.log(gogoCheckbox.checked);
})
```