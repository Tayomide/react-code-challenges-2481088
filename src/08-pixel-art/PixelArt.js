import { createContext, useState, useContext } from 'react'
const ColorContext = createContext();

function ColorPicker ({setCurrentColor}) {
  const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple']
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map(color => <button key={color} style={{ backgroundColor: color }} onClick={() => setCurrentColor(color)}/>)}
    </div>
  )
}

function Pixel () {
  const [background, setBackground] = useState("lightGrey")
  const color = useContext(ColorContext);
  return <div onClick={() => setBackground(color)} style={{ height: '20px', width: '20px', backgroundColor: `${background}`, margin: '1px' }} />
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
    <ColorContext.Provider value={currentColor} >
      <ColorPicker setCurrentColor={setCurrentColor}/>
      <Pixels />
    </ColorContext.Provider>
  )
}
