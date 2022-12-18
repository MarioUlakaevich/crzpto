import styles from '../styles/Home.module.css'
import dynamic from "next/dynamic"
const Chart = dynamic(() => import("../components/Chart"), {
  ssr: false
})
//const Depth = dynamic(() => import("../components/Depth"), {
  //ssr: false
//})
import Depth from '../components/Depth'

export default function Home({data, orders}) {
  
  return (
    <div className={styles.container}>
      <Chart data={data}/>
      <br/>
      <Depth data={orders}/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://api.binance.com/api/v3/klines?symbol=BTCTRY&interval=1h&limit=1000`)
  const resArr = await res.json()
  const data = resArr.map(d => {
    return {time: d[0]/1000, open: parseFloat(d[1]), high: parseFloat(d[2]), low: parseFloat(d[3]), close: parseFloat(d[4])}
  })
  
  const resOrder = await fetch(`https://api.binance.com/api/v3/depth?symbol=BTCTRY&limit=10`)
  const orders = await resOrder.json()
  
  return {
    props: {data, orders}, // will be passed to the page component as props
  }
}