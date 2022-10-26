import { usePizzaContext, SortByType } from '../../context/PizzaContext'

import { Select, Container, Typography } from '@toptal/picasso'
import './styles.css'

const defaultSortType = (): never => {
  throw new Error('invalid sort type')
}

// Another way to get value by types

const getSortType = (value: string): SortByType => {
  switch (value) {
    case 'name':
      return 'name'
    case 'price':
      return 'price'
    case 'size':
      return 'size'
    case 'delivery_time':
      return 'delivery_time'
  }

  return defaultSortType()
}

const PizzaSortingDropdown = () => {
  const { sortBy, setSortBy, swap, setSwap } = usePizzaContext()

  const handleSelect = (e: React.ChangeEvent<{ value: string }>) => {
    const sorter = e.target.value

    setSortBy(sorter as SortByType)
  }

  const handleSwap = () => {
    setSwap(!swap)
  }

  return (
    <div className='dropdown'>
      <Container top='small' bottom='small'>
        <Typography align='center' variant='heading' size='large'>Select Pizza Sorting Method</Typography>
      </Container>
      <div className='preference'>
        <Select
          onChange={handleSelect}
          options={OPTIONS}
          value={sortBy}
          placeholder='Choose an option...'
          width='auto'
        />
        <button
          className={`${swap ? 'btn swap reversed' : 'btn swap'} `}
          onClick={() => handleSwap()}
        />
      </div>
    </div>
  )
}

const OPTIONS = [
  { value: 'name', text: 'Name' },
  { value: 'price', text: 'Price' },
  { value: 'size', text: 'Size' },
  { value: 'delivery_time', text: 'Delivery time' },
]

export default PizzaSortingDropdown
