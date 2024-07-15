# 20240710

## 修正分數轉等級ifSolution

`scope_to_level.js`

```js
const ifSolutionFix1 = (value) => {
    let level = '不及格';

    if (value >= 60) {
        level = '丁';
    }

    if (value >= 70) {
        level = '丙';
    }

    if (value >= 80) {
        level = '乙';
    }

    if (value >= 90) {
        level = '甲';
    }

    return level;
}

const ifSolutionFix2 = (value) => {
    if (value >= 90) {
        return '甲';
    }

    if (value >= 80) {
        return '乙';
    }

    if (value >= 70) {
        return '丙';
    }

    if (value >= 60) {
        return '丁';
    }

    return '不及格';
}
```

## 事件氣泡範例

`event_bubble.html`

## 氣泡中斷

`e.stopPropagation();`

## 預設行為中斷

`e.preventDefault();`

## 單次計時器

`setTimeout(callback, second)`

- callback 為函數
- second 單位為 ms, 1000ms = 1s
- 回傳數字，代表計時器編號
- 使用 `clearTimeout(計時器編號)` 取消計時

## 重複計時器

`setInterval(callback, second)`

- callback 為函數
- second 單位為 ms, 1000ms = 1s
- 回傳數字，代表計時器編號
- 使用 `clearInterval(計時器編號)` 取消計時

## 電子鐘實作

`clock.html`

## TODO APP UI

`todo.html`

## sweetalert2 套件

https://sweetalert2.github.io/#download

## 非同步同步化

```js
async () => {
    await Swal.fire({})
}
```