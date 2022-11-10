import { Route, Routes } from 'react-router-dom'

import ROUTES_LIST from './config/routes'
import SorterPage from './pages/SorterPage'
import PizzaListPage from './pages/PizzaListPage'
import NotFound from './pages/NotFound'
import PizzaPage from './pages/PizzaPage'
import Navigation from './components/Navigation'
import PizzaCreate from './pages/PizzaCreate'

const RoutesComponent = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={ROUTES_LIST.ROUTE_SORTER} element={<SorterPage />} />
        <Route
          path={ROUTES_LIST.ROUTE_PIZZAS}
          element={<PizzaListPage />}
        />
        <Route path={ROUTES_LIST.ROUTE_PIZZA} element={<PizzaPage />} />
        <Route path={ROUTES_LIST.ROUTE_CREATE_PIZZA} element={<PizzaCreate/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default RoutesComponent
