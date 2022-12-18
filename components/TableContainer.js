import Order from './Order'

export default function TableContainer({data}) {
  //console.log(data)
  return (
    <>
      
        {data.map(el => (
          
            <Order price={el[0]} amount={el[1]}/>
          
        ))}
      
    </>
  )
}