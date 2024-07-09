# 20240527

## grid 基本使用

- `display:grid`

`grid.html`

## grid-template-colums

控制寬度

`grid_template_colums.html`

- 可給多個數值，每個數值之間使用`空格`區分
- 使用`repeat(次數, 單位)`可重複填滿
- `fr`會將剩下的寬度進行劃分後分配
    - `grid-template-columns: 1fr 9fr`
        - 寬度`1000px`時，劃分為`100px`與`900px`

## grid-template-rows

控制高度

- `grid-auto-rows: 100px` 每列高度`100px`
- `grid-auto-rows: minmax(100px, auto)` 每列高度最小`100px`，超過依據實際高度為主