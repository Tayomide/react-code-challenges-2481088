import { createContext, useState, useContext } from 'react'
const ColorContext = createContext({
  currentColor: "lightGrey",
  setCurrentColor: () => {}
});

function ColorPicker () {
  const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple']
  const globalColor = useContext(ColorContext)
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map(color => <button key={color} style={{ backgroundColor: color }} onClick={() => globalColor.setCurrentColor(color)}/>)}
    </div>
  )
}

function Pixel () {
  const [background, setBackground] = useState("lightGrey")
  const globalColor = useContext(ColorContext);
  return <div onClick={() => setBackground(globalColor.currentColor)} style={{ height: '20px', width: '20px', backgroundColor: `${background}`, margin: '1px' }} />
}

function Pixels () {
  const pixels = []
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '210px', margin: '0 auto' }}>
      {pixels}
    </div>
  )
}

export default function PixelArt () {
  const [currentColor, setCurrentColor] = useState("lightGrey")
  return (
    <ColorContext.Provider value={{currentColor, setCurrentColor}} >
      <ColorPicker/>
      <Pixels />
    </ColorContext.Provider>
  )
}
