import { useEffect, useState } from 'react'

export default function ScoreKeeper () {
  const [score, setScore] = useState(0)
  useEffect(() => {
    if(localStorage['score'] !== undefined){
      setScore(JSON.parse(localStorage['score']))
    }else{
      localStorage['score'] = JSON.stringify(score)
    }
  }, [])

  useEffect(() => {
    localStorage['score'] = JSON.stringify(score)
  }, [score])
  
  return (
    <div>
      <h1>Your score is: {score}</h1>
      <button onClick={() => setScore(prevScore => prevScore + 1)}>+</button>
      <button onClick={() => setScore(prevScore => prevScore - 1)}>-</button>
    </div>
  )
}
