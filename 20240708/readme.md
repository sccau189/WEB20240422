# 20240708

## 將數字綁定邏輯進行整合

```js
const appendNumber = (num) => {
    num = num.toString();
    if (op) {
        n2 += num;
        n2 = +n2;
    } else {
        n1 += num;
        n1 = +n1;
    }

    setResult();
}

num0.addEventListener('click', () => {
    appendNumber(0);
    console.log(0);
})
```

## 計算機等於按鈕邏輯

```js
run.addEventListener('click', () => {
    // if (n1 && n2 && op) {
    //     // something...
    //     console.log('something...')
    // }

    if (!n1 || !n2 || !op) {
        return;
    }

    let total = 0;

    switch (op) {
        case '+':
            total = n1 + n2;
            break;

        case '-':
            total = n1 - n2;
            break;

        case '*':
            total = n1 * n2;
            break;

        case '/':
            total = n1 / n2;
            break;
    }

    n1 = total;
    n2 = 0;
    op = '';
    setResult();
})
```

## 事件綁定

```js
let dom = document.querySelector('#dom')

dom.addEventListener('click', (e) => {
    console.log(e)
})
```

原型

```js
let dom = {
    addEventListener(type, callback) {
        console.log(type);
        console.log(callback)
        callback();
    }
}
```

## 點擊事件

`event.html`

```html
<div>
    <a href="https://www.google.com/" target="_blank" class="btn btn-success mr-1" id="c-link">to google</a>
    <button class="btn btn-primary" id="c-btn">按鈕</button>
</div>
```

```js
let cBtn = document.querySelector('#c-btn');
let cLink = document.querySelector('#c-link');

const clickType = 'click'
const clickCallback = () => {
    console.log('clicked.')
}

cBtn.addEventListener(clickType, clickCallback)
cLink.addEventListener(clickType, clickCallback)

// cBtn.addEventListener(clickType, () => {
//     console.log('clicked.')
// })
```

## keypress keyup 差別

- keypress 會慢一拍
- 通常使用 keyup 執行內容操作

## 觸發按鍵抓取

`calc_key_event.html`

- 使用 `String.toUpperCase()` 轉成大寫後再判斷

## 事件結合等級判斷實作

`scope_to_level.html`