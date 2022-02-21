/*
 * @Author: Strayer
 * @Date: 2022-02-20
 * @LastEditors: Strayer
 * @LastEditTime: 2022-02-21
 * @Description: 
 * @FilePath: \nx-test\apps\next-test\pages\shopping-cart\index.tsx
 */
import Link from "next/link"
import { useEffect, useState } from "react";
import { GetCommodityListApi } from "./api";
import styleIndex from './index.module.scss'

type commodityType = {
  name: string;
  price: number;
  count: number;
}

export default function ShoppingCart(props) {
  const [commodityList, setCommodityList] = useState<commodityType []>([])

  const sumTotalPrice = (commodityList: commodityType []) => {
    let  totalPrice = 0;
    for(const item of commodityList) {
      totalPrice += item.price * item.count
    }
    return totalPrice
  }

  const [totalPrice, setTotalPrice] = useState(0);

  const addCount = function(commodityName: string) {
    for(const item of commodityList) {
      if(item.name == commodityName) {
        item.count++
      }
    }
    setCommodityList([...commodityList]);
    setTotalPrice(sumTotalPrice(commodityList));
  }

  useEffect(() => {
    GetCommodityListApi().then(data => {
      const commodityList: commodityType [] = [];
      for(const item of data) {
        commodityList.push({
          ...item,
          count: 1
        })
      }
      setCommodityList([...commodityList]);
      setTotalPrice(sumTotalPrice(commodityList));
    })
  }, [])

  const getTableBody =function() {
    const  trList = [];

    for(const item of commodityList) {
      trList.push(
        <tr key={item.name}>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.count}</td>
          <td>
            <button className={styleIndex.button} onClick={() => addCount(item.name)} >
              add
            </button>
          </td>
        </tr>
      )
    }
    
    return trList
  }

  return (
    <>
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <div className={styleIndex.tableBox}>
      <table cellSpacing={0}>
          <colgroup>
            <col width={200} />
            <col width={200} />
            <col width={200} />
            <col width={200} />
          </colgroup>
          <thead>
            <tr>
              <th>name</th>
              <th>price</th>
              <th>count</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{getTableBody()}</tbody>
          <tfoot>
            <tr>
              <td colSpan={4}>total: {totalPrice}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  )
}