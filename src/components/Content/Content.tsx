import { Page } from '@toptal/picasso'

import PizzaName from '../PizzaName'
import PizzaSortingDropdown from '../PizzaSortingDropdown'
import PizzaIngredients from '../PizzaIngredients'

const Content = () => (
  <Page.Content>
    <Page.Article>
      <PizzaSortingDropdown />
      <PizzaName />
      <PizzaIngredients />
    </Page.Article>
  </Page.Content>
)

export default Content
