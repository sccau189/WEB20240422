# 20240506

## 下拉選單

***使用select為主體，內容只能為option。***

`select.html`

```html
<select name="county">
    <option value="">縣市</option>
    <option value="TP">台北</option>
    <option value="台中">台中</option>
    <option>高雄</option>
</select>
```

- `name` -> 欄位名稱，傳送資料時欄位名稱。
- `value` -> 欄位數值，傳送資料時欄位數值。

***實際上發送的數值為value設定，option的內容單純顯示用。***

***option沒有value屬性時，內容即為數值。***

***option使用`selected`屬性可設定預設值。***

### 多選

- `name` -> 改用`[]`。
- `multiple` -> 多選型態。

`select_multiple.html`

```html
<div class="container">
    <h2>錯誤</h2>
    <form action="https://book.niceinfos.com/api/form/">
        <select name="county" multiple>
            <option value="">請選擇縣市</option>
            <option value="TP">台北</option>
            <option value="台中">台中</option>
            <option>高雄</option>
        </select>
        <button>送出</button>
    </form>
    <h2>正確</h2>
    <form action="https://book.niceinfos.com/api/form/">
        <select name="county[]" multiple>
            <option value="">請選擇縣市</option>
            <option value="TP">台北</option>
            <option value="台中">台中</option>
            <option>高雄</option>
        </select>
        <button>送出</button>
    </form>
</div>
```

## 檔案

```html
<input type="file" name="my-pic" />
```

- `type="file"` -> 檔案類型。
- `name` -> 欄位名稱，傳送資料時欄位名稱。

***顯示樣式為選擇檔案提示區塊，樣式調整受到限制。***

### 檔案傳送條件

- `enctype="multipart/form-data"`
- `method="POST"`

`file.html`

```html
<div class="container">
    <h1>FILE TAG</h1>
    <form action="https://book.niceinfos.com/api/form/" method="POST" enctype="multipart/form-data">
        <div>
            <!-- <label for="">選擇檔案</label> -->
            <input type="file" id="my-pic" name="my-pic">
        </div>
        <input type="hidden" name="inject" value="hello">
        <button>發送</button>
    </form>
</div>
```

## 前端讀取圖片顯示

***此方式將大量占用記憶體空間與文字長度***

`profile.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile</title>
    <style>
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
            margin: auto;
            position: relative;
            padding: 0 15px;
        }

        #my-picture {
            position: relative;
            width: 300px;
            height: 300px;
            border-radius: 300px;
            margin: 15px auto;
            background: #b4c7ff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            overflow: hidden;
            color: #031341;
            box-shadow: 0 0 2px 1px #031341;
            background-size: cover;
            background-position: center;
        }

        #my-picture label {
            cursor: pointer;
            position: relative;
            left: -100%;
            transition: 0.3s;
        }

        #my-picture:hover label {
            left: 0;
        }

        #pic-choice {
            display: none;
        }
    </style>
</head>

<body>
    <div class="container">
        <form>
            <div id="my-picture">
                <label for="pic-choice">上傳圖片</label>
                <input type="file" id="pic-choice" accept="image/*">
            </div>
        </form>
    </div>
</body>
<script>
    const reader = (file) => {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.onload = () => {
                let data = {
                    result: reader.result,
                    name: file.name,
                    size: file.size,
                    type: file.type,
                }
                resolve(data);
            }

            reader.readAsDataURL(file);
        })
    }

    let choice = document.querySelector('#pic-choice');
    let pic = document.querySelector('#my-picture');

    choice.addEventListener('change', async () => {
        let file = choice.files[0];
        if (file) {
            let data = await reader(file);
            pic.style.backgroundImage = `url(${data.result})`;
            console.log(data.result, data.result.length);
        }
    })
</script>

</html>
```

## CSS 宣告位置

### HTML標籤

```html
<style>
    h1 {
        color: red;
    }
</style>
```

### HTML屬性

```html
<h1 style="color: blue;">Hello World2</h1>
```

### 獨立檔案 .css

***推薦使用***

`assets/css/main.css`

```css
h1 {
    color: yellow;
    font-size: 60px;
}
```

`main.html`

```html
<head>
    <!-- ... -->
    <link rel="stylesheet" href="./assets/css/main.css">
</head>
```

## 常用單位

- `px` -> 像素，固定大小
- `%` -> 百分比，常用於寬度與高度，抓取上一層數值。
- `em` -> 百分比，`1em = 100%`，常用於文字大小，抓取上一層數值。
- `rem` -> 百分比，`1rem = 100%`，常用於文字大小，抓取最上層數值(`html`)。
- `vw` -> 畫面寬度百分比，`100vw = 100%`，抓取最上層數值(`html`)。
- `vh` -> 畫面高度百分比，`100vh = 100%`，抓取最上層數值(`html`)。

***抓取最上層數值只能用在第一層區塊，避免發生破版風險。***

`unit.html`'


NEXT - CSS#常用屬性