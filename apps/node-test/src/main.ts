/*
 * @Author: Strayer
 * @Date: 2022-02-20
 * @LastEditors: Strayer
 * @LastEditTime: 2022-02-21
 * @Description: 
 * @FilePath: \test2\nx-test\apps\node-test\src\main.ts
 */
console.log('Hello World!');
import express = require('express');
const app = express()
const port = 3010

app.all("*",function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","content-type");
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options')
    res.sendStatus(200);  
  else
    next();
})

app.get('/getCommodityList', (req, res) => {
  res.send([{
    name: 'a',
    price: 100
  },{
    name: 'b',
    price: 200
  }])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})