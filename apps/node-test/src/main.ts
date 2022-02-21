/*
 * @Author: Strayer
 * @Date: 2022-02-20
 * @LastEditors: Strayer
 * @LastEditTime: 2022-02-22
 * @Description: 
 * @FilePath: \test2\nx-test\apps\node-test\src\main.ts
 */
import express = require('express');
import { graphqlHTTP } from 'express-graphql';
import { GraphqlRoot, GraphqlSchema } from './graphql';

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

app.use('/graphql', graphqlHTTP({
  schema: GraphqlSchema,
  rootValue: GraphqlRoot,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})