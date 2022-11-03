import { Route, Routes } from 'react-router-dom'

import ROUTES_LIST from './config/routes'
import SorterPage from './pages/SorterPage'
import PizzaListPage from './pages/PizzaListPage'
import NotFound from './pages/NotFound'
import PizzaPage from './pages/PizzaPage'

function RoutesComp() {
  return (
    <Routes>
      <Route path={ROUTES_LIST.ROUTE_SORTER} element={<SorterPage />} />
      <Route path={ROUTES_LIST.ROUTE_PIZZA_LIST} element={<PizzaListPage />} />
      <Route path={ROUTES_LIST.ROUTE_PIZZA} element={<PizzaPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default RoutesComp
