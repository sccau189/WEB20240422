# 20240617

## 關鍵影格宣告

```css
@keyframes move {
    from {
        left: 0;
    }

    to {
        left: 100%;
    }
}
````

## 關鍵影格使用

```css
.some {
    animation-name: move;
    animation-duration: 3s; 
}
```

`animation.html`

## 變數

使用變數可更彈性的修改數值與連動

```css
:root {
    --cube-size: 50px
}

/* ... */

.wrap .cube {
    /* ... */
    width: var(--cube-size);
    height: var(--cube-size);
}

@keyframes move {
    from {
        left: 0;
    }

    to {
        left: calc(100% - var(--cube-size));
    }
}
```

## 影格速度曲線

`animation-timing-function.html`

## 播放次數

```css
.some {
    /* 無限撥放 */
    animation-iteration-count: infinite;

    /* 播放1次，預設值 */
    animation-iteration-count: 1;
}
```

## 影格模式

`animation-fill-mode`

- `none` -> 停留當下樣式，預設值。
- `forwards` -> 停留最後影格。
- `backwards` -> 停留開始影格。
- `both` -> 結合`forwards`與`backwards`特性。(常用)

## 影格執行方向

`animation-direction`

- `normal` -> 順向 0% -> 100% 預設值。
- `reverse` -> 反向 100% -> 0%。
- `alternate` -> 順向輪播，奇數 0% -> 100%，偶數 100% -> 0%。
- `reverse-alternate` -> 反向輪播，奇數 100% -> 0%，偶數 0% -> 100%。

## AOS 套件

https://michalsnik.github.io/aos/