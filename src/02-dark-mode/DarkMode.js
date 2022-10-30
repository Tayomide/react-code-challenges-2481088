import { useState } from "react"

export default function DarkMode () {
  const [lightMode, setLightMode] = useState(true)
  return (
    <div className={`page ${!lightMode && "dark-mode"}`}>
      <button className='dark-mode-button' onClick={()=>setLightMode(false)}>Dark Mode</button>
      <button className='light-mode-button' onClick={()=>setLightMode(true)}>Light Mode</button>
    </div>
  )
}
