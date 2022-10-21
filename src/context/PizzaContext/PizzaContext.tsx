import {
  createContext,
  ReactNode,
  useContext,
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

export type SortByType = 'name' | 'price' | 'size' | 'delivery_time' | string

export type CtxValues = {
  pizzaList: Pizza[]
  sortBy: SortByType
  setSortBy: (sortBy: SortByType) => void
  swap: boolean
  setSwap: (swap: boolean) => void
  sortedList: Pizza[]
  setSortedList: (sortedList: Pizza[]) => void
}

const PizzaContext = createContext<CtxValues>({
  pizzaList: [],
  sortBy: 'name',
  setSortBy: () => {},
  swap: false,
  setSwap: () => {},
  sortedList: [],
  setSortedList: () => {},
})

const PizzaContextProvider = ({ children }: { children: ReactNode }) => {
  const [pizzaList, setPizzaList] = useState<Pizza[]>(data.data)
  const [sortBy, setSortBy] = useState<SortByType>('name')
  const [sortedList, setSortedList] = useState<Pizza[]>([])
  const [swap, setSwap] = useState<boolean>(false)

  return (
    <PizzaContext.Provider
      value={{
        pizzaList: pizzaList,
        sortBy: sortBy,
        setSortBy: setSortBy,
        swap: swap,
        setSwap: setSwap,
        sortedList: sortedList,
        setSortedList: setSortedList,
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
