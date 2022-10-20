import { usePizzaContext } from '../../context/PizzaContext'

import './styles.css'

const PizzaName = () => {
  const { sortedList } = usePizzaContext()

  return (
    <div className="wrapper">
      <div>
        <h3>Your pizza is: {sortedList ? sortedList[0].name : null}</h3>
        {/* {list?.map((pizza) => (
          <li key={pizza.name} className="list_item">
            <h4>{pizza.name}</h4>
            <p>Price: {pizza.price}</p>
            <p>Size: {pizza.size}</p>
            <p>Delivery time: {pizza.delivery_time}</p>
          </li>
        ))} */}
      </div>
    </div>
  )
}

export default PizzaName
