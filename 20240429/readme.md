# 20240429

## video tag

[範例影片下載](https://samplelib.com/sample-mp4.html)

下載 `3Mb` 影片檔案，放置到 `assets/video` 資料夾內。

`video_tag.html`

```html
<style>
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .video-player {
        width: 500px;
        margin: 20px auto;
    }

    .video-player video {
        max-width: 100%;
    }
</style>

<div class="video-player">
    <video controls loop autoplay muted>
        <source src="./assets/video/sample.mp4" type="video/mp4">
    </video>
</div>
```

### 屬性

- controls

顯示控制項目。

- muted

靜音。

- loop

循環播放。

- autoplay

自動播放，因為瀏覽器限制需搭配`muted`才會自動播放。

## 背景影片撥放

`background_video.html`

```html
<style>
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .wrap {
        width: 100%;
        height: 100vh;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .video-bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .slogan {
        position: relative;
        z-index: 3;
        color: #fff;
        font-size: 50px;
        font-weight: 600;
    }

    .mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background-color: #0000003f;
        backdrop-filter: blur(3px); // 模糊效果
    }
</style>

<div class="wrap">
    <h1 class="slogan">Hello World!</h1>
    <video autoplay loop muted class="video-bg">
        <source src="./assets/video/sample.mp4" type="video/mp4">
    </video>
    <div class="mask"></div>
</div>
```

## iframe

[注意CORS](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/CORS)

### 使用 google map

`分享` > `嵌入地圖`

### 使用 youtube

`分享` > `嵌入`

***部分影片無法在頁面上撥放***

`iframe_tag.html`

```html
<style>
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .title {
        text-align: center;
        font-size: 40px;
        margin: 15px auto;
    }

    .map-wrap {
        margin-bottom: 20px;
    }

    .map-wrap iframe {
        width: 100%;
    }

    .yt-wrap {
        margin: auto;
        text-align: center;
    }
</style>

<h1 class="title">聯絡我們</h1>
<div class="map-wrap">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.4131762040997!2d120.66118968666713!3d24.157238317343424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d78069134cb%3A0xf7a65bba8f974f36!2z5ZyL56uL6Ieq54S256eR5a245Y2a54mp6aSo!5e0!3m2!1szh-TW!2stw!4v1714389902266!5m2!1szh-TW!2stw"
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

<div class="yt-wrap">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/33hE0Z0iNys?si=melYgeH9EiGgzt8u"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
```

## ul tag

預設有 `list-style-type:disc` 建議改為 `list-style-type:none`

二階選單範例

`ul_tag.html`

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

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style-type: none;
    }

    .header {
        height: 80px;
        background: #000;
        color: #ffffff;
        position: fixed;
        width: 100%;
    }

    .menu {

        display: flex;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
        gap: 30px;
    }

    .page {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #dedede;
        font-size: 60px;
        font-weight: 700;
        height: 100vh;
    }

    .page:nth-child(odd) {
        background: yellow;
    }

    .menu>li {
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .menu>li>ul {
        position: absolute;
        background: #000;
        width: 300px;
        top: 80px;
        display: none;
    }

    .menu>li>ul>li {
        padding: 15px;
    }

    .menu>li>ul>li:hover {
        background: red;
    }

    .menu>li:hover>ul {
        display: block;
    }
</style>

<div class="header">
    <ul class="menu">
        <li>
            <a href="#about">About</a>
            <ul>
                <li>
                    <a href="#">About 1</a>
                </li>
                <li>
                    <a href="#">About 2</a>
                </li>
                <li>
                    <a href="#">About 3</a>
                </li>
                <li>
                    <a href="#">About 4</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#product">Product</a>
            <ul>
                <li>
                    <a href="#">Product 1</a>
                </li>
                <li>
                    <a href="#">Product 2</a>
                </li>
                <li>
                    <a href="#">Product 3</a>
                </li>
                <li>
                    <a href="#">Product 4</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#contact-us">Contact Us</a>
            <ul>
                <li>
                    <a href="#">Contact 1</a>
                </li>
                <li>
                    <a href="#">Contact 2</a>
                </li>
                <li>
                    <a href="#">Contact 3</a>
                </li>
                <li>
                    <a href="#">Contact 4</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#more">More</a>
            <ul>
                <li>
                    <a href="#">More 1</a>
                </li>
                <li>
                    <a href="#">More 2</a>
                </li>
                <li>
                    <a href="#">More 3</a>
                </li>
                <li>
                    <a href="#">More 4</a>
                </li>
            </ul>
        </li>
    </ul>
</div>
<div class="page" id="about">about</div>
<div class="page" id="product">product</div>
<div class="page" id="contact-us">contact-us</div>
<div class="page" id="more">more</div>
```

## table

同類型紀錄群組，與 `ul` 不同的是，`table` 一筆紀錄可有多個欄位。

`table_tag.html`

```html
<style>
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .title {
        font-size: 50px;
        font-weight: 700;
        margin: 20px auto;
        text-align: center;
    }

    .container {
        width: 800px;
        height: 100%;
        margin: auto;
    }

    .table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
    }

    .table th {
        background: #185dc5;
        color: #fff;
    }

    .table th,
    .table td {
        padding: 8px;
        border: 1px solid #454545;
        transition: 0.4s;
    }

    .table tbody tr:nth-child(even) td {
        background: #dedede;
    }

    .table tbody tr:hover td {
        background: rgb(245, 134, 8);
        color: #fff;
        cursor: pointer;
    }
</style>

 <div class="container">
    <h1 class="title">學生成績表</h1>
    <table class="table">
        <thead>
            <tr>
                <th>姓名</th>
                <th>分數</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>學生1</td>
                <td>100</td>
            </tr>
            <tr>
                <td>學生2</td>
                <td>100</td>
            </tr>
            <tr>
                <td>學生3</td>
                <td>100</td>
            </tr>
            <tr>
                <td>學生4</td>
                <td>100</td>
            </tr>
            <tr>
                <td>學生5</td>
                <td>100</td>
            </tr>
            <tr>
                <td>學生6</td>
                <td>100</td>
            </tr>
        </tbody>
    </table>
</div>
```