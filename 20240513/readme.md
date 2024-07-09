# 20240513

## 背景顏色

`background-color`

```css
.some {
    background-color: red;
}
```

***在背景的最底層***

## 背景圖片

`background-image: url()`

```css
.some {
    background-image: url(../images/bg.png);
}
```

***可搭配 `background-color` 相容圖片故障時，使用體驗不至於太差***

## 背景圖片重複

`background-repeat`

- `repeat` 重複，預設值
- `no-repeat` 不重複
- `repeat-x` 橫軸重複
- `repeat-y` 縱軸重複

***當圖片小於容器大小時生效***

***重複通常用於小圖示重複排列***


## 背景圖片尺寸

`background-size`

- `auto` 預設
- `contain` 比例填充
- `cover` 完整填充

***使用 `cover` 可能會失真，但可以填滿整個容器***

## 背景圖片位置

`background-position`

- `left`
- `center`
- `right`
- `top`
- `bottom`

## 框線

`border`

- `border-width`
- `border-color`
- `border-style`

## 導角

`border-radius`

## 畫圓形條件

- 正方形
- 導角數值大於等於正方形

## 內距

`padding`

***框線與內容之間的距離***

可用格式

```css
.some {
    padding: 10px; /* top right bottom left */
    padding: 10px 20px; /** top bottom 10px, left right 20px */
    padding: 10px 20px 30px 40px; /* top 10px, right 20px, bottom 30px, left 40px */
}
```

## 外距

`margin`

***框線以外的距離，用於兩個區塊之間***

可用格式

```css
.some {
    margin: 10px; /* top right bottom left */
    margin: 10px 20px; /** top bottom 10px, left right 20px */
    margin: 10px 20px 30px 40px; /* top 10px, right 20px, bottom 30px, left 40px */
}
```

## 盒子模型

`box-sizing`

- `content-box` 預設，`padding` 與 `border` 會影響整體寬高，容易導致破版。
- `border-box` `padding`與 `border` 只會擠壓 `content` 寬高，無法擠壓時，才會向外擴散。

參考 `box_model2.html`

## 初始化

`reset.css`

```css
*,
*::after,
*::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.container {
    max-width: 800px;
    height: 100%;
    position: relative;
    margin: auto;
    padding: 0 15px;
}

.slogan {
    padding: 15px 0;
    border-bottom: 1px solid #000;
    margin-bottom: 20px;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style-type: none;
}
```

### 套件

[Reset CSS](https://meyerweb.com/eric/tools/css/reset/)

全部樣式都初始化

[Normalize.css](https://necolas.github.io/normalize.css/)

有限度的初始化，對第三方套件友善

## 後代選擇器

用`空格`表示

***只要是在我底下，無論階層數，皆可套用***

```css
.s1 .item {
    color: red;
}
```

## 子階選擇器

用`>`表示

***只有在我底下第一層才可套用***

```css
.s1>.item {
    color: red;
}
```

## 嚴謹相鄰選擇器

用`+`表示

***第一個鄰居，且符合條件***

```css
.wrap .item {
    color: #fff;
    margin-bottom: 10px;
    padding: 10px;
    background: red;
}

.wrap .sp {
    background: blue;
}

.wrap .sp+.item {
    font-size: 50px;
}
```

```html
<div class="wrap">
    <div class="item">1</div>
    <div class="item sp">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
</div>
```

## 寬鬆相鄰選擇器

用`~`表示

`popup.html`

搭配`:checked`時做 `popup`

NEXT 選擇器#複合選擇器