# 20240529

## 一頁式切版

### slogan 雙色底線

```css
.slogan {
    text-align: center;
    font-size: 1.5rem;
    position: relative;
    padding-bottom: 15px;
}

.slogan::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: calc(50% - 150px);
    width: 0;
    height: 3px;
    border-left: 100px solid rgb(66, 66, 255);
    border-right: 200px solid #fff;
}
```

- 高度修改`height: 3px;`


### slogan2 雙色底線

```css
.slogan2 {
    text-align: center;
    font-size: 1.5rem;
    position: relative;
    padding-bottom: 12px;
    border-bottom: 3px solid #fff;
    border-image: linear-gradient(to right, #4242ff 30%, #fff 0%) 1;
}
```

- 調整`#4242ff 30%`中的`30%`控制藍色長度
- 高度修改`border-bottom: 3px solid #fff;`中的`3px`

### 中間虛線

#### 方式一

```css
.page-content>div:first-child {
    border-right: 3px dashed #fff;
    padding-right: 30px;
}
```

須配合

```css
.page-content {
    padding: 30px;
}
```

#### 方式二

```css
.page-content>div:first-child::after {
    content: '';
    position: absolute;
    width: 0;
    /** height 剩餘數值一半 */
    top: 5%;
    height: 90%;
    /** border-left-width 數值一半 */
    right: -2px;
    border-left: 4px dashed #fff;
}
```

不須配合

```css
.page-content {
    padding: 30px;
}
```

### 輸入框樣式

#### 方式一

```html
<div class="form-item">
    <label for="join-name">姓名</label>
    <input type="text" id="join-name">
</div>
<div class="form-item">
    <label for="join-email">真實信箱位置</label>
    <input type="text" id="join-email">
</div>
```

```css
.form-item {
    margin-bottom: 15px;
    position: relative;
}

.form-item input {
    width: 100%;
    height: 40px;
    border: 0;
    outline: 0;
    border-radius: 6px;
    font-size: 1.3rem;
    padding: 0 60px;
}

.form-item label {
    position: absolute;
    color: #535353;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-weight: 600;
    font-size: 1.1rem;
    cursor: pointer;
}
```

#### 方式二

``html
<div class="form-item-good">
    <label for="join-name">姓名</label>
    <input type="text" id="join-name">
</div>
<div class="form-item-good">
    <label for="join-email">真實信箱位置</label>
    <input type="text" id="join-email">
</div>
```

```css
.form-item-good {
    height: 40px;
    width: 100%;
    background: #fff;
    border-radius: 6px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    gap: 5px;
}

.form-item-good label {
    color: #535353;
    font-weight: 600;
}

.form-item-good input {
    height: 100%;
    border: 0;
    outline: 0;
    background: transparent;
    color: #000;
    font-size: 1.3rem;
}
```

#### 方式二破版修正

```html
<div class="form-item-good">
    <label for="join-name">姓名</label>
    <div>
        <input type="text" id="join-name">
    </div>
</div>
<div class="form-item-good">
    <label for="join-email">真實信箱位置</label>
    <div>
        <input type="text" id="join-email">
    </div>
</div>
```

```css
.form-item-good {
    height: 40px;
    width: 100%;
    background: #fff;
    border-radius: 6px;
    margin-bottom: 15px;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    padding: 0 10px;
    gap: 5px;
}

.form-item-good label {
    color: #535353;
    font-weight: 600;
}

.form-item-good input {
    height: 100%;
    border: 0;
    outline: 0;
    background: transparent;
    color: #000;
    width: 100%;
    font-size: 1.3rem;
}
```
