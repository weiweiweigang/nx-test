/*
 * @Author: Strayer
 * @Date: 2022-02-21
 * @LastEditors: Strayer
 * @LastEditTime: 2022-02-21
 * @Description: 
 * @FilePath: \nx-test\apps\next-test\pages\shopping-cart\api.ts
 */
export async function GetCommodityListApi(): Promise<any []> {
  return new Promise( resolve => {
    fetch('http://localhost:3010/getCommodityList', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      // body: JSON.stringify({
      //   query: `query Products($active: Boolean) {
      //             products(active: $active) {
      //                 name
      //                 price
      //             }
      //         }`,
      //   variables: { active: true },
      // }),
    }).then(async res => {
      const json = await res.json();
      console.log("success:",json );
      resolve(json)
    }).catch(err => {
      console.log("error:", err)
    })
  })
}