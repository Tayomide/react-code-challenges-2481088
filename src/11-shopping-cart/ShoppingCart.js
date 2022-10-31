import { useEffect, useState} from 'react'

const items = [{
  name: 'apple',
  price: 0.39
}, {
  name: 'banana',
  price: 0.79
}, {
  name: 'cherry tomatoes',
  price: 3.99
}]

function ShoppingCart () {
  const [cart, setCart] = useState({})
  const [total, setTotal] = useState((0).toFixed(2))
  
  const addToCart = (item) => {
    const tempState = {...cart}
    if(tempState[item.name])return
    else tempState[item.name] = {...item, quantity:1}
    setCart(tempState)
  }

  const updateCart =(name, condition) => {
    const tempState = {...cart}
    switch(condition){
      case "add":
        tempState[name].quantity++
        break;
      case "subtract":
        if(tempState[name].quantity === 1)delete tempState[name]
        else tempState[name].quantity--
        break;
      default:
        throw new Error()
    }
    setCart(tempState)
  }

  useEffect(() => {
    let total = 0
    for(let { quantity, price} of Object.values(cart))total += quantity*price
    setTotal(total.toFixed(2))
  }, [cart])

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className='cart'>
        <div className='items'>
          <h2>Items</h2>
          {items.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>)
          )}
        </div>
        <div>
          <h2>Cart</h2>
          {Object.values(cart).map(item =>
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button onClick={() => updateCart(item.name, "subtract")}>-</button>
                {item.quantity}
                <button onClick={() => updateCart(item.name, "add")}>+</button>
              </p>
              <p>Subtotal: ${(item.quantity * item.price).toFixed(2)}</p>
            </div>
          )}
        </div>
      </div>
      <div className='total'>
        <h2>Total: ${total}</h2>
      </div>
    </div>
  )
}

export default ShoppingCart
