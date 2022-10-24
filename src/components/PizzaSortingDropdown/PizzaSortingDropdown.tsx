import { usePizzaContext } from '../../context/PizzaContext'

import './styles.css'

const PizzaSortingDropdown = () => {
  const { sortBy, setSortBy, swap, setSwap, updateSortedList } =
    usePizzaContext()

  const handleSelect = (e: React.ChangeEvent<{ value: string }>) => {
    const sorter = e.target.value
    setSortBy(sorter)
    updateSortedList({ sorter })
  }

  const handleSwap = () => {
    setSwap(!swap)
    updateSortedList(sortBy)
  }

  return (
    <div className='dropdown'>
      <h3>Select Pizza Sorting Method</h3>
      <div className='preference'>
        <select onChange={(e) => handleSelect(e)}>
          <option value='name'>Name</option>
          <option value='price'>Price</option>
          <option value='size'>Size</option>
          <option value='delivery_time'>Delivery time</option>
        </select>
        <button
          className={`${swap ? 'btn swap reversed' : 'btn swap'} `}
          onClick={() => handleSwap()}
        />
      </div>
    </div>
  )
}

export default PizzaSortingDropdown
