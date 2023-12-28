if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
// 載入 express 並建構應用程式伺服器
const express = require('express')
require('./config/mongoose')
const app = express()

// 設定首頁路由
app.get('/', (req, res) => {
  res.send('hello world')
})

// 設定 port 3000
app.listen(process.env.PORT, () => {
  console.log('App is running on http://localhost:3000')
})