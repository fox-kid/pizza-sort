import { usePizzaContext } from '../../context/PizzaContext'

import './styles.css'

const PizzaName = () => {
  const { sortedList, sortBy, pizzaList, setSortedList, swap } = usePizzaContext()

  const sorted = swap
    ? pizzaList.sort((a: any, b: any) => (a[sortBy] < b[sortBy] ? 1 : -1))
    : pizzaList.sort((a: any, b: any) => (a[sortBy] > b[sortBy] ? 1 : -1))

  sortBy == 'size' ? setSortedList(sorted.reverse()) : setSortedList(sorted)
  setSortedList(sorted)

  return (
    <div className='wrapper'>
      <div>
        <h3>Your pizza is: {sortedList ? sortedList[0]?.name : null}</h3>
      </div>
    </div>
  )
}

export default PizzaName
