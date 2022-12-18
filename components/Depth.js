import TableContainer from './TableContainer'

export default function Depth({data}) {
  //console.log(data.bids)
  return (
    <>
      <div className="tables">
        <TableContainer data={data.bids}/>
        <TableContainer data={data.asks}/>
      </div>

      
    </>
  )
}