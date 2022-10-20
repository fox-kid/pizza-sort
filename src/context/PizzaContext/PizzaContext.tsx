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

export type SortByType = 'name' | 'price' | 'size' | 'delivery_time' | string

export type CtxValues = {
  pizzaList: Pizza[]
  sortBy: SortByType
  setSortBy: (sortBy: SortByType) => void
  swap: boolean
  setSwap: (swap: boolean) => void
  pizza: Pizza | undefined
  setPizza: (pizza: Pizza) => void
  sortedList: Pizza[]
  setSortedList: (sortedList: Pizza[]) => void
}

const PizzaContext = createContext<CtxValues>({
  pizzaList: [],
  sortBy: 'name',
  setSortBy: () => {},
  swap: false,
  setSwap: () => {},
  pizza: undefined,
  setPizza: () => {},
  sortedList: [],
  setSortedList: () => {},
})

const PizzaContextProvider = ({ children }: { children: ReactNode }) => {
  const [pizzaList, setPizzaList] = useState<Pizza[]>(data.data)
  const [sortBy, setSortBy] = useState<SortByType>('name')
  const [sortedList, setSortedList] = useState<Pizza[]>([])
  const [swap, setSwap] = useState<boolean>(false)
  const [pizza, setPizza] = useState<Pizza>()

//   useEffect(() => {
//     const sorted = swap
//       ? pizzaList.sort((a: any, b: any) => (a[sortBy] < b[sortBy] ? 1 : -1))
//       : pizzaList.sort((a: any, b: any) => (a[sortBy] > b[sortBy] ? 1 : -1))
//     setSortedList(sorted)
//   }, [sortBy, swap])

  return (
    <PizzaContext.Provider
      value={{
        pizzaList: pizzaList,
        sortBy: sortBy,
        setSortBy: setSortBy,
        swap: swap,
        setSwap: setSwap,
        pizza: pizza,
        setPizza: setPizza,
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
