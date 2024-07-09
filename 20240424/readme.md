# 20240424

## 網頁組成範本

`web_base.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>網頁組成範本</title>
</head>
<body>
    <div class="header">
        Header
    </div>
    <div class="main">
        Main
    </div>
    <div class="footer">
        Footer
    </div>
</body>
</html>
```

## 網站圖示

[產生器](https://www.favicon-generator.org/)

[免費圖庫 pixabay](https://pixabay.com/)

### 絕對路徑

```html
<link rel="apple-touch-icon" sizes="57x57" href="/20240424/favicon/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/20240424/favicon/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/20240424/favicon/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/20240424/favicon/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/20240424/favicon/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/20240424/favicon/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/20240424/favicon/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/20240424/favicon/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/20240424/favicon/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192" href="/20240424/favicon/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="/20240424/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/20240424/favicon/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="/20240424/favicon/favicon-16x16.png">
<link rel="manifest" href="/20240424/favicon/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/20240424/favicon/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">
```

### 相對路徑

```html
<link rel="apple-touch-icon" sizes="57x57" href="./favicon/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="./favicon/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="./favicon/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="./favicon/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="./favicon/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="./favicon/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="./favicon/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="./favicon/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192" href="./favicon/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="./favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="./favicon/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="./favicon/favicon-16x16.png">
<link rel="manifest" href="./favicon/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="./favicon/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">
```

## 自動格式化 html

`Crtl` + `Shift` + `p` > `format document`

### 存檔自動格式化

`Crtl` + `Shift` + `p` > `Open Workspce Settings (JSON)`

`.vscode/settings.json` 加入

```json
{
    "editor.formatOnSave": true
}
```

目前設定

```json
{
    "liveServer.settings.root": "/",
    "liveServer.settings.CustomBrowser": "chrome",
    "liveServer.settings.file": "index.html",
    "editor.formatOnSave": true
}
```

## 元素標籤宣告

`element_base.html`

```html
<style>
    #first-student {
        color: red;
    }
</style>

<div id="first-student" class="student">
    First Student
</div>

<div id="first student" class="student">
    First Student
</div>

<div id="aaa">
    aaa
</div>

<div id="bbb" id="ccc">錯誤</div>

<div id="bbb ccc">同時擁有 bbb ccc</div>

<!-- 不允許輸入內容的標籤不用關閉 -->
<img src="some.png" alt="">

<!-- <img src="some.png" alt=""></img> Error -->
```

## h tag

***主要用於文案語意呈現，需注重階層關係。***

`h_tag.html`

```html
<style>
    .good-article h1 {
        font-size: 18px;
        color: red;
    }

    .good-article h2 {
        font-size: 28px;
        color: #505050;
    }

    .good-article h3 {
        font-size: 14px;
        border: 1px solid #000;
        padding: 10px;
    }
</style>

<h1>H1</h1>
<h2>H2</h2>
<h3>H3</h3>
<h4>H4</h4>
<h5>H5</h5>
<h6>H6</h6>
<div>
    <h2>我是一篇文章 BAD</h2>
    <h1>第一章節</h1>
    <h3>第一段落</h3>
    <h1>第二章節</h1>
    <h3>第二段落</h3>
</div>

<div class="good-article">
    <h1>我是一篇文章 GOOD</h1>
    <h2>第一章節</h2>
    <h3>第一段落</h3>
    <h2>第二章節</h2>
    <h3>第二段落</h3>
</div>
```

***字體顯示大小是由css樣式決定，不可因為視覺而忽略階層關係。***

***一個頁面建議只有一個h1，避免被搜尋引擎認定惡意操作。***

## 區塊元素

對應 css `display:block`

`div` 無語意

`article` 內容較完整且能獨立存在

`section` 內容有主題性或是明確意義

***article跟section可互相為巢狀結構。***

***如果不清楚是否有語意，或是在切版階段連文案都沒有時，無腦div到底即可。***

## 行內元素

對應 css `display:inline`

`span` 無語意

`span_tag.html`

```html
<style>
    .text-red {
        color: red;
        font-size: 40px;
    }
</style>

<h1>span tag</h1>
<div class="text-red">我是第一名。</div>
<div><span class="text-red">我</span>是第一名。</div>
<div>
    <div class="text-red">我</div>是第一名。
</div>
```

## 超連結

對應 css `display:inline`

`a` 無語意

`href` 必填屬性

`target` 開啟方式

- `_self` 預設值，現有視窗轉跳，連結目標與現在頁面有前後文關係時使用

- `_blank` 開新視窗，連結目標與現在頁面無前後文關係時使用


## 一頁式實作

`a_one_page.html`

```html
<style>
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html,
    body {
        scroll-behavior: smooth;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;
        background: #000;
        color: #fff;
        height: 80px;
        position: fixed;
        width: 100%;
    }

    .menu ul {
        list-style-type: none;
        display: flex;
        color: #fff;
        gap: 15px;
    }

    .menu ul a {
        color: inherit;
        text-decoration: none;
        transition: 0.6s;
    }

    .menu ul a:hover {
        color: red;
    }

    .page {
        width: 100%;
        height: 100vh;
        background: rgb(24, 57, 148);
        color: yellow;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 50px;
        font-weight: 700;
    }

    #about,
    #contact {
        background: red;
    }
</style>

<div class="header">
    <div>LOGO</div>
    <div class="menu">
        <ul>
            <li>
                <a href="#">HOME</a>
            </li>
            <li>
                <a href="#about">ABOUT</a>
            </li>
            <li>
                <a href="#product">PRODUCT</a>
            </li>
            <li>
                <a href="#contact">CONTACT</a>
            </li>
        </ul>
    </div>
</div>
<div class="page">HOME</div>
<div class="page" id="about">ABOUT</div>
<div class="page" id="product">PRODUCT</div>
<div class="page" id="contact">CONTACT</div>
```

## 圖示元素

`img`

`src` 必填屬性

`alt` 當圖片不存在時顯示

`a_one_page.html`

```html
<style>
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html,
    body {
        scroll-behavior: smooth;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;
        background: #000;
        color: #fff;
        height: 80px;
        position: fixed;
        width: 100%;
    }

    .menu ul {
        list-style-type: none;
        display: flex;
        color: #fff;
        gap: 15px;
    }

    .menu ul a {
        color: inherit;
        text-decoration: none;
        transition: 0.6s;
    }

    .menu ul a:hover {
        color: red;
    }

    .page {
        width: 100%;
        height: 100vh;
        background: rgb(24, 57, 148);
        color: yellow;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 50px;
        font-weight: 700;
    }

    #about,
    #contact {
        background: red;
    }

    .logo {
        max-width: 60px;
    }
</style>

<div class="header">
    <div>
        <a href="#">
            <img src="./logo.png" alt="網站圖示" class="logo">
        </a>
    </div>
    <div class="menu">
        <ul>
            <li>
                <a href="#">HOME</a>
            </li>
            <li>
                <a href="#about">ABOUT</a>
            </li>
            <li>
                <a href="#product">PRODUCT</a>
            </li>
            <li>
                <a href="#contact">CONTACT</a>
            </li>
        </ul>
    </div>
</div>
<div class="page">HOME</div>
<div class="page" id="about">ABOUT</div>
<div class="page" id="product">PRODUCT</div>
<div class="page" id="contact">CONTACT</div>
```


NEXT - 常用元素#影片