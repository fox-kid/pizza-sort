import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import data from '../../pizza/pizzas.json'

export interface Pizza {
  name: string
  price: number
  size: string
  delivery_time: number
  ingredients: string[]
}

export type SortByType = 'name' | 'price' | 'size' | 'delivery_time'

export type CtxValues = {
  pizzaList: Pizza[] | undefined
  sortBy: SortByType
  setSortBy: (sortBy: SortByType) => void
  swap: boolean
  setSwap: (swap: boolean) => void
  sortedList: Pizza[] | undefined
}

const PizzaContext = createContext<CtxValues>({
  pizzaList: undefined,
  sortBy: 'name',
  setSortBy: () => {},
  swap: false,
  setSwap: () => {},
  sortedList: undefined,
})

const PizzaContextProvider = ({ children }: { children: ReactNode }) => {
  const [pizzaList, setPizzaList] = useState<Pizza[]>()
  const [sortBy, setSortBy] = useState<SortByType>('name')
  const [swap, setSwap] = useState<boolean>(false)

  useEffect(() => {
    setPizzaList(data.data)
  }, [])

  const sortedList = !swap
    ? pizzaList?.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1))
    : pizzaList?.sort((a, b) => (a[sortBy] < b[sortBy] ? 1 : -1))

  // If it's sorted by size, the alphabet should be in reverse here
  sortBy == 'size' && sortedList?.reverse()

  return (
    <PizzaContext.Provider
      value={{
        pizzaList: pizzaList,
        sortBy: sortBy,
        setSortBy: setSortBy,
        swap: swap,
        setSwap: setSwap,
        sortedList: sortedList,
      }}
    >
      {children}
    </PizzaContext.Provider>
  )
}

const usePizzaContext = () => {
  const context = useContext(PizzaContext)

  return context
}

export { PizzaContextProvider, PizzaContext, usePizzaContext }
