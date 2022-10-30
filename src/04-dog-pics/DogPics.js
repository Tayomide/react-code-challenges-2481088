import { useEffect, useState } from "react"

export default function DogPics () {
  const [image, setImage] = useState('')

  const fetchDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random").then(response => response.json()).then(response => setImage(response.message))
  }

  useEffect(() => {
    fetchDog()
  }, [])
  
  return (
    <div className='dog-pics'>
      <img src={image} alt="Random Dog Pics" />
      <button onClick={fetchDog}>🐶</button>
    </div>
  )
}
