# 20240522

## POPUP 練習

`popup.html`

按鈕互動

- 使用 `:checked` 與`相鄰選擇器`做搭配
- `display:inline`預設會有無法消除的間距

## 布局方式 display

`display.html`
 
- `block` 會佔據整列，適合第一層劃分所屬範圍用
- `inline` 不會佔據整列，但也無法認識`width`與`height`，且會有不可處理的間距問題
- `inline-block` 不會佔據整列，可認識`width`與`height`，會有不可處理的間距問題
- `flex` 與 `block` 相同，但是多了縱軸對齊可使用，且可消除`inline`不可處理的間距問題
- `inline-flex` 與 `inline-block` 相同，但是多了縱軸對齊可使用

## flex justify-content

水平排列

`flex_justify_content.html`

## flex align-content

垂直排列

`flex_align_content.html`


## flex align-items

垂直對齊

`flex_align_items.html`

- `stretch` 內容區塊無高度時展延
- `flex-start` 靠上
- `center` 置中
- `flex-end` 靠下
- `baseline` 第一個文字出現的地方

## flex align-self

個別垂直對齊

`flex_align_self.html`

***通常放在子階層***

- `stretch` 內容區塊無高度時展延
- `flex-start` 靠上
- `center` 置中
- `flex-end` 靠下
- `baseline` 第一個文字出現的地方

## flex-wrap

內容超出時行為

- `no-wrap` 不換行，預設，不足時壓縮內容
- `wrap` 換行
- `wrap-reverse` 換行反轉