# 20240605

## 網格系統

- 使用 `display:grid` 實作
- 使用 `grid-template-columns: repeat(12, 1fr);` 劃分12網格系統
- 使用 `grid-column: span 4;` 可定義個別項目佔據欄位數
- 使用 `grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));` 可達到自動換行

`grid_system.html`

## 一頁式 RWD

### 手機版選單 icon


```html
<div class="header-wrap">
    <!-- ... -->
    <!-- <div class="menu">...</div> -->
    <div class="mobile-menu">
        <div class="mobile-menu-wrap">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</div>
```

```css
.mobile-menu {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.mobile-menu-wrap {
    width: 46px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    cursor: pointer;
}

.mobile-menu-wrap>span {
    width: 100%;
    height: 4px;
    background-color: #000;
    border-radius: 100px;
}
```

### 手機版icon狀態切換

```html
<div class="mobile-menu">
    <input type="checkbox" id="mobile-menu-sw">
    <label for="mobile-menu-sw" class="mobile-menu-wrap">
        <span></span>
        <span></span>
        <span></span>
    </label>
</div>
```

```css
#mobile-menu-sw {
    display: none;
}

#mobile-menu-sw:checked~.mobile-menu-wrap>span {
    background-color: red;
}

#mobile-menu-sw:checked~.mobile-menu-wrap>span:first-child {
    transform: rotate(45deg);
}
```

### 手機版icon狀態切換特效


```css
.mobile-menu-wrap>span {
    /* ... */
    transition: 0.3s;
}
#mobile-menu-sw:checked~.mobile-menu-wrap>span:first-child {
    transform: rotate(45deg);
    position: relative;
    top: 6px;
    left: 1px;
}

#mobile-menu-sw:checked~.mobile-menu-wrap>span:nth-child(2) {
    display: none;
}

#mobile-menu-sw:checked~.mobile-menu-wrap>span:last-child {
    transform: rotate(-45deg);
    position: relative;
    top: -7px;
}
```

### 斷點切換

```css
.mobile-menu {
    display: none;
}

@media screen and (max-width: 800px) {
    .mobile-menu {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .header-wrap .menu {
        display: none;
    }
}
```

### 手機板選單切換

```html
<div class="header-wrap">
    <input type="checkbox" id="mobile-menu-sw">
    <!-- ... -->
</div>
```

```css
#mobile-menu-sw:checked~.mobile-menu .mobile-menu-wrap>span {
    background-color: red;
}

#mobile-menu-sw:checked~.mobile-menu .mobile-menu-wrap>span:first-child {
    transform: rotate(45deg);
    position: relative;
    top: 6px;
    left: 1px;
}

#mobile-menu-sw:checked~.mobile-menu .mobile-menu-wrap>span:nth-child(2) {
    display: none;
}

#mobile-menu-sw:checked~.mobile-menu .mobile-menu-wrap>span:last-child {
    transform: rotate(-45deg);
    position: relative;
    top: -7px;
}

@media screen and (max-width: 800px) {
    /* ... */

    #mobile-menu-sw:checked~.menu {
        display: flex;
        position: absolute;
        top: 80px;
        left: 0;
        background: #fff;
        width: 100%;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        padding: 20px;
    }

    #mobile-menu-sw:checked~.menu>ul {
        width: 100%;
        flex-direction: column;
    }
}
```

### #page-1 手機板

```css
#page-1 .page-content {
    grid-template-columns: 1fr;
}

#page-1 .page-content>div:first-child::after {
    right: unset;
    left: 0;
    top: unset;
    bottom: 0;
    height: 0;
    width: 100%;
    border-left: 0;
    border-bottom: 4px dashed #fff;
}

#page-1 .page-content>div:first-child {
    padding-right: 0;
    margin-bottom: 30px;
    padding-bottom: 30px;
}

#page-1 .page-content>div:last-child {
    padding-left: 0;
}
```

## 查詢電腦 IP

```shell
Ctrl + R > cmd

ipconfig
```

將查詢到的IP貼到手機網址列


### #page2 手機板

```css
.flow-item:nth-child(even) .flow-text {
    left: 50px;
    right: unset;
    text-align: left;
}

.flow-item .flow-text {
    left: 50px;
}

.flow::before {
    left: 11px;
}

.flow-item {
    justify-content: flex-start;
}

.flow-wrap {
    display: grid;
    gap: 40px;
}
```

### 手機版選單項目下畫線

```css
.menu>ul>li {
    border-bottom: 2px dashed #000;
    width: 100%;
    padding-bottom: 20px;
}

.menu>ul>li:last-child {
    border: 0;
    padding-bottom: 0;
}
```