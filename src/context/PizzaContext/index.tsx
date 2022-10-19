import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import data from '../../pizza/pizzas.json';

export interface Pizza {
  name: string;
  price: number;
  size: string;
  delivery_time: number;
  ingredients: string[];
}

export type SorterType = ['name', 'price', 'size', 'delivery_time'];
export type SortByType = 'name' | 'price' | 'size' | 'delivery_time';

export type ctxValues = {
  pizzaList: Pizza[] | undefined;
  sorterArr: SorterType;
  setSorterArr: (sorter: SorterType) => void;
  sortBy: SortByType;
  setSortBy: (sortBy: SortByType) => void;
  swap: boolean;
  setSwap: (swap: boolean) => void
};

const PizzaContext = createContext<ctxValues>({
  pizzaList: undefined,
  sorterArr: ['name', 'price', 'size', 'delivery_time'],
  setSorterArr: () => {},
  sortBy: 'name',
  setSortBy: () => {},
  swap: false,
  setSwap: () => {}
});

const PizzaContextProvider = ({ children }: { children: ReactNode }) => {
  const [pizzaList, setPizzaList] = useState<Pizza[]>();
  const [sorterArr, setSorterArr] = useState<SorterType>([
    'name',
    'price',
    'size',
    'delivery_time',
  ]);
  const [sortBy, setSortBy] = useState<SortByType>('name');
  const [swap, setSwap] = useState<boolean>(false);

  useEffect(() => {
    setPizzaList(data.data);
  }, []);

  return (
    <PizzaContext.Provider
      value={{
        pizzaList: pizzaList,
        sorterArr: sorterArr,
        setSorterArr: setSorterArr,
        sortBy: sortBy,
        setSortBy: setSortBy,
        swap: swap,
        setSwap: setSwap
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

const usePizzaContext = () => {
  const context = useContext(PizzaContext);

  return context;
};

export { PizzaContextProvider, PizzaContext, usePizzaContext };
