import { usePizzaContext } from '../../context/PizzaContext'

import './styles.css'

const PizzaName = () => {
  const { sortedList } = usePizzaContext()

  return (
    <div className='wrapper'>
      <div>
        <h3>Your pizza is: {sortedList ? sortedList[0]?.name : null}</h3>
        <h4>Price: {sortedList ? sortedList[0]?.price : null}</h4>
        <h4>Size: {sortedList ? sortedList[0]?.size : null}</h4>
        <h4>
          Delivery time: {sortedList ? sortedList[0]?.delivery_time : null}
        </h4>
      </div>
    </div>
  )
}

export default PizzaName
