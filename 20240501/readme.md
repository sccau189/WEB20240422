# 20240501

## 表單

`form.html`

```html
<form action="" method="GET">
    <div>
        <label for="login-account">帳號</label>
        <input type="text" name="account" value="" placeholder="輸入帳號" id="login-account" />
    </div>
    <div>
        <input type="text" name="name" value="" placeholder="輸入名稱" />
    </div>
    <div>
        <input type="password" name="passowrd" value="" placeholder="輸入密碼" />
    </div>
    <div>
        <button type="submit">發送</button>
    </div>
    <div>
        <button type="button" onclick="sayHi()">我不會發送</button>
    </div>
</form>

<script>
    const sayHi = () => {
        alert('Hi, 我不會發送，但是我會打招呼!');
    }
</script>
```

## 會員登入實戰

`login.html`

```html
<style>
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .login-block {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        position: relative;
    }

    .login-block::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #00000067;
    }

    .login-wrap {
        position: relative;
        z-index: 2;
        width: 400px;
        height: 350px;
        background-color: #fff;
        border-radius: 8px;
        padding: 20px;
    }

    .login-block .slogan {
        text-align: center;
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 20px;
    }

    .login-block label {
        display: block;
        margin-bottom: 5px;
        font-weight: 600;
        font-size: 20px;
    }

    .login-block .item {
        margin-bottom: 20px;
    }

    .login-block .item input {
        width: 100%;
        height: 50px;
        padding: 10px;
        font-size: 18px;
        outline: 0;
        border: 1px solid #383838;
        border-radius: 8px;
    }

    .btn-wrap {
        text-align: right;
    }

    .btn-wrap button {
        padding: 10px 20px;
        border: 0;
        background: #154db5;
        color: #fff;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 1px;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.4s;
    }

    .btn-wrap button:hover {
        background: #ff2d2d;
    }
</style>

<div class="login-block">
    <div class="login-wrap">
        <h1 class="slogan">會員登入</h1>
        <form action="https://book.niceinfos.com/api/form/" method="GET">
            <div class="form-row">
                <div class="item">
                    <label for="login-account">帳號</label>
                    <input type="text" id="login-account" name="account" placeholder="輸入帳號" />
                </div>
                <div class="item">
                    <label for="login-password">密碼</label>
                    <input type="password" id="login-password" name="password" placeholder="輸入密碼" />
                </div>
            </div>
            <div class="btn-wrap">
                <button>登入</button>
            </div>
        </form>
    </div>
</div>
```

## 數字輸入

`number.html`

```html
<input type="number" name="qty" placeholder="輸入數量" min="1" max="10" />
```

- `type="number"` -> 文字輸入類型。
- `name` -> 欄位名稱，傳送資料時欄位名稱。
- `value` -> 欄位數值，傳送資料時欄位數值。
- `placeholder` -> 提示文字，當無數值時顯示。
- `min` -> 最小值限制，無法限制直接輸入。
- `max` -> 最大值限制，無法限制直接輸入。

***e為數學符號，可以輸入是正常的。***

## 單選

`radio.html`

```html
<input type="radio" name="gender" value="male" id="gender-male" />
```

- `type`="radio" -> 單選類型。
- `name` -> 欄位名稱，傳送資料時欄位名稱。
- `value` -> 欄位數值，傳送資料時欄位數值。
- `checked` -> 預設選取

***顯示樣式為圓形，樣式調整受到限制。***

***name為群組的名稱，同一個群組選項要使用同樣的名稱。***

### 自訂 radio 樣式

`fake_radio.html`

```html
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
    margin: 0 auto;
    padding: 0 15px;
    position: relative;
}

.slogan {
    margin-bottom: 20px;
}

.fake-radio {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.fake-radio label {
    cursor: pointer;
}

.fake-radio .fake-icon {
    display: inline-flex;
    width: 20px;
    height: 20px;
    border: 2px solid #646464;
    border-radius: 20px;
    cursor: pointer;
    position: relative;
    align-items: center;
    justify-content: center;
}

.fake-radio .fake-icon::after {
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 12px;
    background: red;
    display: none;
}

.fake-radio input[type=radio]:checked~.fake-icon::after {
    display: block;
}

.fake-radio input[type=radio] {
    display: none;
}
</style>

<div class="container">
    <form action="https://book.niceinfos.com/api/form/" method="GET">
        <h1 class="slogan">Fake Radio</h1>
        <div class="fake-radio">
            <input type="radio" name="gender" value="male" id="gender-male" checked>
            <label for="gender-male" class="fake-icon"></label>
            <label for="gender-male">男</label>
        </div>
        <div class="fake-radio">
            <input type="radio" name="gender" value="female" id="gender-female">
            <label for="gender-female" class="fake-icon"></label>
            <label for="gender-female">女</label>
        </div>
        <div class="fn-wrap">
            <button>發送</button>
        </div>
    </form>
</div>
```

## 多選

`checkbox.html`

- `[]` 代表陣列
- 不使用陣列則只會帶入最後一個數值

```html
<form action="https://book.niceinfos.com/api/form/" method="GET">
    <div><input type="checkbox" name="music[]" value="a1" id="music-a1" /> <label for="music-a1">A1</label></div>
    <div><input type="checkbox" name="music[]" value="a2" id="music-a2" /> <label for="music-a2">A2</label></div>
    <div><input type="checkbox" name="music[]" value="a3" id="music-a3" /> <label for="music-a3">A3</label></div>
    <div><input type="checkbox" name="music[]" value="a4" id="music-a4" /> <label for="music-a4">A4</label></div>
    <div>
        <button>正確</button>
    </div>
</form>

<form action="https://book.niceinfos.com/api/form/" method="GET">
    <div><input type="checkbox" name="music" value="a1" id="music-fa1" /> <label for="music-fa1">A1</label></div>
    <div><input type="checkbox" name="music" value="a2" id="music-fa2" /> <label for="music-fa2">A2</label></div>
    <div><input type="checkbox" name="music" value="a3" id="music-fa3" /> <label for="music-fa3">A3</label></div>
    <div><input type="checkbox" name="music" value="a4" id="music-fa4" /> <label for="music-fa4">A4</label></div>
    <div>
        <button>錯誤</button>
    </div>
</form>
```

## 多行輸入

```html
<textarea name="remark" cols="30" rows="10"></textarea>
```

- `cols` 欄數(column)，影響寬度。
- `rows` 列數(row)，影響高度。

***寬度與高度使用css的width與height來設定。***

禁止調整寬高

```html
<style>
    textarea {
        resize: none;
    }
</style>
```

### 聯絡我們表單

`textarea.html`

```html
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
    margin: 0 auto;
    padding: 0 15px;
    position: relative;
}

.slogan {
    margin-bottom: 20px;
}

.form-item {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
}

.form-item label {
    font-weight: 700;
    cursor: pointer;
}

.form-item input {
    width: 100%;
    height: 50px;
    padding: 10px;
    font-size: 18px;
    outline: 0;
    border: 1px solid #dedede;
}

.form-item textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    font-size: 18px;
    outline: 0;
    border: 1px solid #dedede;
    resize: none;
}

.send-wrap {
    text-align: right;
}

.send-wrap button {
    padding: 10px 20px;
    border: 0;
    background: #1863d3;
    color: #fff;
    font-size: 18px;
    border-radius: 6px;
    letter-spacing: 1px;
    font-weight: 700;
    transition: 0.4s;
    cursor: pointer;
}

.send-wrap button:hover {
    background: rgb(207, 31, 31);
}
</style>

<div class="container">
    <form action="https://book.niceinfos.com/api/form/" method="GET">
        <h1 class="slogan">聯絡我們</h1>
        <div class="form-item">
            <label for="name">姓名</label>
            <input type="text" name="name" id="name" value="" placeholder="輸入姓名">
        </div>
        <div class="form-item">
            <label for="email">信箱</label>
            <input type="text" name="email" id="email" value="" placeholder="輸入信箱">
        </div>
        <div class="form-item">
            <label for="mobile">手機</label>
            <input type="text" name="name" id="mobile" value="" placeholder="輸入手機">
        </div>
        <div class="form-item">
            <label for="content">內容</label>
            <textarea name="content" id="content" placeholder="輸入內容"></textarea>
        </div>
        <div class="send-wrap">
            <button>留言</button>
        </div>
    </form>
</div>
```

NEXT - 表單元素#檔案