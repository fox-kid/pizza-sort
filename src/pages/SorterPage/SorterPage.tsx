import { Container, Link, Page, Typography } from '@toptal/picasso'

import PizzaName from '../../components/PizzaName'
import PizzaSortingDropdown from '../../components/PizzaSortingDropdown'
import PizzaIngredients from '../../components/PizzaIngredients'
import ROUTES_LIST from '../../config/routes'
import { palette } from '@toptal/picasso-provider'

const SorterPage = () => (
  <>
    <Page.TopBar title='Pizza sorter' />
    <Page.Content>
      <Page.Article>
        <PizzaSortingDropdown />
        <PizzaName />
        <PizzaIngredients />
        <Container
          inline
          style={{ backgroundColor: palette.grey.darker }}
          padded='small'
        >
          <Typography size='medium'>
            <Link color='white' href={ROUTES_LIST.ROUTE_PIZZA_LIST}>
              Go to see Pizza List
            </Link>
          </Typography>
        </Container>
      </Page.Article>
    </Page.Content>
  </>
)

export default SorterPage
