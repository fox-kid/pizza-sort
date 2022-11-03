import Picasso from '@toptal/picasso-provider'

import { Page } from '@toptal/picasso'

import { PizzaContextProvider } from './context/PizzaContext'
import RoutesComp from './RoutesComp'

function App() {
  return (
    <Picasso>
      <PizzaContextProvider>
        <Page>
          <Page.Content>
            <RoutesComp />
          </Page.Content>
          <Page.Footer />
        </Page>
      </PizzaContextProvider>
    </Picasso>
  )
}

export default App
