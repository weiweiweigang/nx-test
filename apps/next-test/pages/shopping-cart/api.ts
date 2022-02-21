/*
 * @Author: Strayer
 * @Date: 2022-02-21
 * @LastEditors: Strayer
 * @LastEditTime: 2022-02-22
 * @Description: 
 * @FilePath: \test2\nx-test\apps\next-test\pages\shopping-cart\api.ts
 */
export async function GetCommodityListApi(): Promise<any []> {
  return new Promise( resolve => {
    fetch('http://localhost:3010/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        query: `{
          commodityList(active: true) {
            name,
            price
          }
        }`,
      }),
    }).then(async res => {
      const json = await res.json();
      console.log("success:",json.data.commodityList);
      resolve(json.data.commodityList)
    }).catch(err => {
      console.log("error:", err)
    })
  })
}