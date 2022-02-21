/*
 * @Author: Strayer
 * @Date: 2022-02-21
 * @LastEditors: Strayer
 * @LastEditTime: 2022-02-22
 * @Description:
 * @FilePath: \test2\nx-test\apps\node-test\src\graphql.ts
 */
import { buildSchema } from 'graphql';

const CommodityListData = [
  { name: 'prod A', price: 1000, active: true },
  { name: 'prod B', price: 1500, active: true },
  { name: 'prod C', price: 2000, active: false },
];

export const GraphqlSchema = buildSchema(`
  type Commodity {
    name: String
    price: String
  }

  type Query {
    commodityList(active: Boolean): [Commodity]
  }
`)

export const GraphqlRoot = {
  commodityList: ({active}) => {
    const list = [];
    for(const item of CommodityListData) {
      if(item.active === active) {
        list.push({
          name: item.name,
          price: item.price
        })
      }
    }

    return list
  }
}