import { useEffect, useState } from 'react'
import WindowEvent from './WindowEvent'

export default function ToggleWindowEvent () {
  const [windowEvent, setWindowEvent] = useState(false)
  const event = () => {
    window.alert("mouse pressed")
  }
  useEffect(() => {
    if(windowEvent)window.addEventListener("dblclick", event)
    return () => {
      window.removeEventListener("dblclick", event)
    }
  }, [windowEvent])
  return (
    <div>
      <button onClick={() => setWindowEvent(prevState => !prevState)}>Toggle Window Event</button>
      {windowEvent && <WindowEvent />}
    </div>
  )
}
