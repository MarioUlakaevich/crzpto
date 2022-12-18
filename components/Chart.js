import { createChart } from "lightweight-charts"
import { useRef, useEffect } from "react"

export default function Chart(props) {
  const container = useRef()
  const {data} = props
  useEffect(() => {
    const chart = createChart(container.current, {
      width : 800,
      height : 400
    })
    chart.timeScale().fitContent()
    const candleSeries = chart.addCandlestickSeries()
    candleSeries.setData(data)

    return () => {
      chart.remove()
    }
  }, [data])
  return (
    <>
      <div ref={container}></div>
    </>
  )
}