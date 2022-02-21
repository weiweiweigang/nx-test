/*
 * @Author: Strayer
 * @Date: 2022-02-20
 * @LastEditors: Strayer
 * @LastEditTime: 2022-02-21
 * @Description: 
 * @FilePath: \test2\nx-test\apps\next-test\pages\index.tsx
 */
import styles from './index.module.scss';
import Link from 'next/link';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Go To </span>
              <Link href="/shopping-cart">shopping-cart 👋</Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
