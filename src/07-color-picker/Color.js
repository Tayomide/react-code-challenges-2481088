export default function Color ({ hex, name, changeBackground }) {
  return (
    <button
      className='color-square'
      style={{ backgroundColor: hex }}
      onClick={() => changeBackground(hex)}
    >
      <h2>{name}</h2>
    </button>
  )
}
