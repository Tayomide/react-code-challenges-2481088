import { useRef, useEffect } from "react"

export default function FocusInput() {
  const Input = useRef()

  useEffect(() => {
    Input.current.focus()
  }, [])

  return (
    <div>
      <label htmlFor='focused-input'>Focus me on page load!</label>
      <input name='focused-input' ref={Input}></input>
    </div>
  )
}
