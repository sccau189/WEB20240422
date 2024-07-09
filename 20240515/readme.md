# 20240515

## 複合選擇器

沒有任何符號與空格，緊鄰再一起

`button.html`

```html
<div class="container">
    <h1 class="slogan">按鈕集</h1>
    <div class="button-group">
        <button class="btn">預設</button>
    </div>
    <div class="button-group">
        <button class="btn primary">主要</button>
    </div>

    <div class="button-group">
        <button class="btn success">成功</button>
    </div>

    <div class="button-group">
        <button class="btn danger">失敗</button>
    </div>

    <div class="button-group">
        <button class="btn dark">暗黑</button>
    </div>
</div>
```

`assets/css/button.css`

```css
.button-group {
    margin-bottom: 20px;
}

/* 後代選擇器 */
.btn .primary {
    background: #1b34be;
    color: #f0f0f0;
}

.btn {
    padding: 10px 20px;
    border-radius: 10px;
    border: 0;
    cursor: pointer;


    background: #666666;
    color: #f0f0f0;
}

.btn:hover {
    background: #3a3a3a;
    color: #f0f0f0;
}

/* 複合選擇器 */
.btn.primary {
    background: #1b34be;
    color: #f0f0f0;
}

.btn.primary:hover {
    background: #14278f;
    color: #f0f0f0;
}

.btn.success {
    background: #1bbe8d;
    color: #f0f0f0;
}

.btn.success:hover {
    background: #128865;
    color: #f0f0f0;
}

.btn.danger {
    background: #be1b44;
    color: #f0f0f0;
}

.btn.danger:hover {
    background: #961435;
    color: #f0f0f0;
}

.btn.dark {
    background: #272727;
    color: #f0f0f0;
}

.btn.dark:hover {
    background: #070707;
    color: #f0f0f0;
}
```

## :hover

二階層選單實作(短暫性)

`menu.html`

## :checked

搭配 `<input type="checkbox">` 使用

二階層選單實作(持久性)

`menu_keep.html`

## 子階選擇器

- `:nth-child(n)` 手動指定
- `:nth-child(odd)` 奇數
- `:nth-child(even)` 偶數
- `:last-child` 最後一個

學生成績表練習

`table.html`

## ::before, ::after

`content` 為必要屬性

蓋板廣告實作

`ad.html`

NEXT 手風琴選單實戰

