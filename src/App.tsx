import Picasso from '@toptal/picasso-provider'
import { Page } from '@toptal/picasso'

import { PizzaContextProvider } from './context/PizzaContext'
import Content from './components/Content'

function App() {
  return (
    <Picasso>
      <PizzaContextProvider>
        <Page>
          <Page.TopBar title='Pizza sorter' />
          <Page.Content>
            <Content />
          </Page.Content>
          <Page.Footer />
        </Page>
      </PizzaContextProvider>
    </Picasso>
  )
}

export default App
