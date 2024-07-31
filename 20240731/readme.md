# 20240731

## 設定 firebase realtime database 讀寫權限

`Realtime Database` > `規則`

```js
{
  "rules": {
    "todo": {
    	"$uid": {
        ".write": "$uid === auth.uid",
        ".read": "$uid === auth.uid"
      },     
      ".read": false,
      ".write": false
    },
    ".read": false,
    ".write": false
  }
}
```

`todo.js`

```js
database.listen(this.uid 改為 database.listen(`todo/${this.uid}`

database.write(this.uid 改為  database.write(`todo/${this.uid}`
```