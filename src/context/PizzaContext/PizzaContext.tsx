import { createContext, ReactNode, useContext, useState } from 'react'

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
  updateSortedList: (sorter: any) => void
}

const PizzaContext = createContext<CtxValues>({
  pizzaList: [],
  sortBy: 'name',
  setSortBy: () => {},
  swap: false,
  setSwap: () => {},
  sortedList: [],
  setSortedList: () => {},
  updateSortedList: () => {},
})

const PizzaContextProvider = ({ children }: { children: ReactNode }) => {
  const [pizzaList] = useState<Pizza[]>(data.data)
  const [sortBy, setSortBy] = useState<SortByType>('name')
  const [sortedList, setSortedList] = useState<Pizza[]>([])
  const [swap, setSwap] = useState<boolean>(false)

  const updateSortedList = ({ sorter }: any) => {
    const sorted = swap
      ? pizzaList.sort((a: any, b: any) => (a[sorter] < b[sorter] ? 1 : -1))
      : pizzaList.sort((a: any, b: any) => (a[sorter] > b[sorter] ? 1 : -1))

    sorter !== 'size' ? setSortedList(sorted) : setSortedList(sorted.reverse())
  }

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
        updateSortedList: updateSortedList,
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
