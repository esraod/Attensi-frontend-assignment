import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import productcategories from '../data/productcategories.json'
import Popup from '../components/Popup'
import { useState } from 'react'

export default function Home() {
  console.log(productcategories)
  const [popup, setPopup] = useState(null)
  return (
    <div className={styles.container}>
      <Head>
        <title>Attensi Frontend Assignment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {productcategories.map((category) => (
          <div key={category.id}>
            {category.title}
            <ul>
              {category.products.map((product) => (
                <li onClick={() => setPopup(product)} key={product.id}>
                  {product.title}
                  {product.type}
                  <img style={{ height: '48px' }} src={product.image} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>
      <Popup data={popup} setPopup={setPopup}></Popup>
    </div>
  )
}
