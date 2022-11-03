import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react'

import data from '../../pizza/pizzas.json'

export interface Pizza {
  id: string
  name: string
  price: number
  size: string
  delivery_time: number
  ingredients: string[]
}

export type SortByType = 'name' | 'price' | 'size' | 'delivery_time'

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
  const [pizzaList] = useState<Pizza[]>(data.data)
  const [sortBy, setSortBy] = useState<SortByType>('name')
  const [sortedList, setSortedList] = useState<Pizza[]>([])
  const [swap, setSwap] = useState<boolean>(false)

  useEffect(() => {
    const crt = [...pizzaList]

    const cmp = swap
      ? (a: Pizza, b: Pizza) => (a[sortBy] < b[sortBy] ? 1 : -1)
      : (a: Pizza, b: Pizza) => (a[sortBy] > b[sortBy] ? 1 : -1)

    const sorted = crt.sort(cmp)

    sortBy !== 'size' ? setSortedList(sorted) : setSortedList(sorted.reverse())
  }, [sortBy, swap, pizzaList])

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
