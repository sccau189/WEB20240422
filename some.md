```css
.page-content::after {
    content: '222';
    position: absolute;
    bottom: 0;
    left: calc(50% - 140px);
    width: 0;
    height: 5px;
    border-left: 100px solid red;
    border-right: 180px solid blue;
}
```