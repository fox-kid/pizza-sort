import Picasso from '@toptal/picasso-provider'

import { Page } from '@toptal/picasso'

import { PizzaContextProvider } from './context/PizzaContext'
import RoutesComponent from './RoutesComponent'

function App() {
  return (
    <Picasso>
      <PizzaContextProvider>
        <Page>
          <Page.Content>
            <RoutesComponent />
          </Page.Content>
          <Page.Footer />
        </Page>
      </PizzaContextProvider>
    </Picasso>
  )
}

export default App
