import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <button onClick={()=> setCount((count)=>{return count+1})} >
      count {count}
      </button>
    </>
  )
}

export default App
