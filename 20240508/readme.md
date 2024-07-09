# 20240508

## http status code

- 1xx 持續通訊 101 websocket
- 2xx 表示正常 200
- 3xx 表示轉跳 301 302 304
- 4xx 表示無法存取 404 422
- 5xx 主機端爆炸 500 502 504

## 查詢屬性相容性

https://caniuse.com/

## 圖片設定規則

寬度與高度只能設定其一為固定

## 寬度

`width`

設定多少就是多少，固定

## 最大寬度

`max-width`

- 當寬度小於設定值時，使用當下寬度
- 當寬度大於設定值時，維持設定值

## 最小寬度

`min-width`

- 當寬度小於設定值時，維持設定值
- 當寬度大於設定值時，使用當下寬度

`width.html`

## 高度

`height`

- `px` 固定單位，通用型
- `%` 通常出現在第二層
- `vh` 通常出現在第一層

## 最大高度

`max-height`

- 當高度小於設定值時，使用當下寬度
- 當高度大於設定值時，維持設定值

## 最小高度

`min-height`

- 當高度小於設定值時，維持設定值
- 當高度大於設定值時，使用當下寬度

## 行高

`line-height`

- 可用來做垂直置中，有第二行時破版

```css
.some {
    height: 100px;
    line-height: 100px;
}
```

- 設定行高時就要盡量避免設定高度

`height.html`

## 水平對齊

`text-align`

- `left` 靠左，預設值 (start)
- `center` 置中
- `right` 靠右 (end)
- `justify` 平均分散，可避免右側不整齊


## 文字大小

`font-size`

- `px` 固定
- `em` 百分比，找上一層為`被乘數`
- `rem` 百分比，找`html`為`被乘數`，通常用於第一層

## 文字顏色

`color`

使用16進制(`#000000` ~ `#FFFFFF`)色碼表示

## 文字樣式

`font-style`

- `normal` 正常，預設值
- `italic` 斜體

## 字型

`font-family`

https://fonts.google.com/

## 字體寬度

`font-weight`

100(細) ~ 900(粗)

***不要加上單位***

```css
.some {
    font-weight: 800; /* 正確 */
    font-weight: 800px; /* 錯誤 */
}
```

```html
<!-- html 註解方式 -->
```

## 背景顏色

`background`

***看到開發者工具屬性旁邊有箭頭。表示大屬性，可展開查看小屬性***

NEXT 常用屬性#背景顏色