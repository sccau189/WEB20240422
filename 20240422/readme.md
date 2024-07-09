# 20240422

## 建立專案資料夾

命名規則

- 使用小寫英文與數字組成
- 第一個字不要使用數字

## VSCODE 開啟專案方式

1. Open Folder > 選擇專案資料
2. 將專案資料夾直接拉入 VSCODE

## 套件安裝

### live server

- Extensions > search > live server
- 點右下角 `Go Live` 執行

#### live server 設定檔案

1. `ctrl` + `shift` + `p`
2. 輸入 `setting`
3. 使用鍵盤方向上下，選取 `open workspace settings(JSON)`

`.vscode/settings.json`

```json
{
    "liveServer.settings.root": "/",
    "liveServer.settings.CustomBrowser": "chrome",
    "liveServer.settings.file": "index.html",
}
```

### file icon theme

- Extensions > search > Material Icon Theme
- Set File Icon

### git graph

視覺化操作 GIT。

- Extensions > search > Git Graph

### tldraw

繪製流程圖。

- Extensions > search > tldraw
- 檔案名稱範例`flow.tldr`

### Markmap

使用 markdown 繪製心智圖。

- Extensions > search > Markmap
- 檔案名稱範例`flow.mm.md`

## 常用快速鍵

- Ctrl + C -> 複製
- Ctrl + X -> 剪下
- Ctrl + V -> 貼上
- Ctrl + A -> 全選
- Ctrl + S -> 存檔
- Ctrl + N -> 新增空白檔案
- Ctrl + Shift + N -> 建立新視窗

[GIT](./git_use.md)

NEXT: HTML-網頁組成