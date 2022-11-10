import { Page } from '@toptal/picasso'

import PizzaName from '../../components/PizzaName'
import PizzaSortingDropdown from '../../components/PizzaSortingDropdown'
import PizzaIngredients from '../../components/PizzaIngredients'

const SorterPage = () => (
  <>
    <Page.TopBar title='Pizza sorter' />
    <Page.Content>
      <Page.Article>
        <PizzaSortingDropdown />
        <PizzaName />
        <PizzaIngredients />
      </Page.Article>
    </Page.Content>
  </>
)

export default SorterPage
