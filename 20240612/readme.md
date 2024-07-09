# 20240612

## 春字

`spring.html`

```html
<div class="container">
    <h1 class="slogan">春字</h1>
    <div class="spring">
        <span>春</span>
    </div>
</div>
```

```css
html,
body {
    font-family: "Noto Sans TC", sans-serif;
}

.spring {
    width: 100px;
    height: 100px;
    background: rgb(255, 57, 57);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 600;
    transform: rotate(45deg);
    margin: 60px auto;
}

.spring>span {
    transform: rotate(135deg);
}
```

## 特價條

`discount.html`

```html
<div class="container">
    <h1 class="slogan">Discount</h1>
    <div class="discount-grid">
        <div class="item">
            <div class="cover s1">
                <img src="./assets/images/product.jpg" alt="">
                <div class="discount">off 10%</div>
            </div>
            <div class="content">
                <h2>Product name</h2>
            </div>
        </div>
        <div class="item">
            <div class="cover" data-discount="10">
                <img src="./assets/images/product.jpg" alt="">
            </div>
            <div class="content">
                <h2>Product name</h2>
            </div>
        </div>
        <div class="item">
            <div class="cover" data-discount="20">
                <img src="./assets/images/product.jpg" alt="">
            </div>
            <div class="content">
                <h2>Product name</h2>
            </div>
        </div>
        <div class="item">
            <div class="cover" data-discount="30">
                <img src="./assets/images/product.jpg" alt="">
            </div>
            <div class="content">
                <h2>Product name</h2>
            </div>
        </div>
        <div class="item">
            <div class="cover" data-discount="40">
                <img src="./assets/images/product.jpg" alt="">
            </div>
            <div class="content">
                <h2>Product name</h2>
            </div>
        </div>
        <div class="item">
            <div class="cover" data-discount="50">
                <img src="./assets/images/product.jpg" alt="">
            </div>
            <div class="content">
                <h2>Product name</h2>
            </div>
        </div>
        <div class="item">
            <div class="cover" data-discount="60">
                <img src="./assets/images/product.jpg" alt="">
            </div>
            <div class="content">
                <h2>Product name</h2>
            </div>
        </div>
        <div class="item">
            <div class="cover" data-discount="99">
                <img src="./assets/images/product.jpg" alt="">
            </div>
            <div class="content">
                <h2>Product name</h2>
            </div>
        </div>
    </div>
</div>
```

```css
.discount-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    gap: 10px;
}

.discount-grid .item {
    background: #0e62ff;
    color: #fff;
    padding: 10px;
}

.cover {
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
}

.cover img {
    max-width: 100%;
    height: auto;
}

.cover.s1 .discount {
    position: absolute;
    top: 16px;
    right: -77px;
    width: 100%;
    height: 26px;
    background: #fff;
    color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(45deg);
}

.cover:not(.s1)::after {
    content: 'off ' attr(data-discount) '%';
    position: absolute;
    top: 16px;
    right: -77px;
    width: 100%;
    height: 26px;
    background: #fff;
    color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(45deg);
}
```

## 變形原點

`transform_origin.html`

```html
<div class="container">
    <h1 class="slogan">transform-origin</h1>
    <div class="grid">
        <div class="item">
            <div class="cube"></div>
        </div>
        <div class="item x30">
            <div class="cube"></div>
        </div>
        <div class="item y30">
            <div class="cube"></div>
        </div>
        <div class="item mix">
            <div class="cube"></div>
        </div>
    </div>
</div>
```

```css
.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 30px auto;
}

.grid .item {
    height: 100px;
    width: 100px;
    border: 2px dashed #dedede;
    position: relative;
}

.grid .item::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    top: calc(50% - 10px);
    left: calc(50% - 10px);
    background: blue;
}

.grid .item.x30::after {
    left: calc(30px - 10px);
}

.grid .item.y30::after {
    top: calc(30px - 10px);
}

.grid .item.mix::after {
    left: unset;
    top: unset;
    right: -10px;
    bottom: -10px;
}

.item .cube {
    width: 100%;
    height: 100%;
    background: rgb(255, 37, 37);
    animation-name: move;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

.item.x30 .cube {
    transform-origin: 30px;
}

.item.y30 .cube {
    transform-origin: 50% 30px;
}

.item.mix .cube {
    transform-origin: right bottom;
}

@keyframes move {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}
```

## 位移

`translate.html`

```html
<div class="container">
    <h1 class="slogan">translate</h1>
    <div class="box">
        <div class="move"></div>
    </div>

    <div class="box">
        <div class="r"></div>
    </div>
</div>
```

```css
.box {
    width: 200px;
    height: 50px;
    border: 2px dashed #dedede;
    position: relative;
    margin-bottom: 100px;
}

.move {
    width: 100%;
    height: 100%;
    background: red;
    opacity: 0.8;
    transform: translate(10px, 10px);
}

.r {
    width: 100%;
    height: 100%;
    position: relative;
    background: red;
    opacity: 0.8;
    top: 10px;
    left: 10px;
}
```

### 與position offset差異

- 效能比較好
- IE8 以下不支援

## 縮放

`scale.html`

`scale_image.html`


## 轉場

### 無效範例
- width:auto -> width: 100px
- display: none -> display:block

`color_change.html`

`transition_timing_function.html`