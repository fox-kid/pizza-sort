import { PizzaContextProvider } from './context/PizzaContext'

import PizzaName from './components/PizzaName'
import PizzaSortingDropdown from './components/PizzaSortingDropdown'
import PizzaIngredients from './components/PizzaIngredients'
import './App.css'

function App() {
  return (
    <PizzaContextProvider>
      <main className="container">
        <PizzaSortingDropdown />
        <PizzaName />
        <PizzaIngredients />
      </main>
    </PizzaContextProvider>
  )
}

export default App
