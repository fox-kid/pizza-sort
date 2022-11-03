import { Container, Link, Page, Typography } from '@toptal/picasso'

import PizzaName from '../../components/PizzaName'
import PizzaSortingDropdown from '../../components/PizzaSortingDropdown'
import PizzaIngredients from '../../components/PizzaIngredients'
import { NavButton } from '../../styles/styles'

const SorterPage = () => (
  <>
    <Page.TopBar title='Pizza sorter' />
    <Page.Content>
      <Page.Article>
        <PizzaSortingDropdown />
        <PizzaName />
        <PizzaIngredients />
        <NavButton href='/pizzalist'>Pizza list</NavButton>
      </Page.Article>
    </Page.Content>
  </>
)

export default SorterPage
