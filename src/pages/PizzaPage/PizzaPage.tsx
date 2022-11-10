import { useParams } from 'react-router-dom'
import { Container, Page, Typography, Link } from '@toptal/picasso'
import { usePizzaContext } from '../../context/PizzaContext'
import { palette } from '@toptal/picasso/utils'
import ROUTES_LIST from '../../config/routes'

import './styles.css'

const PizzaPage = () => {
  const { pizzaList } = usePizzaContext()
  let { id } = useParams<any>()
  const chosenPizza =
    pizzaList &&
    pizzaList.some((pizza) => pizza.id === id) &&
    pizzaList.filter((pizza) => pizza.id === id)

  return (
    <Container>
      <Page.TopBar
        title={chosenPizza ? chosenPizza[0].name : 'No such pizza'}
      />
      <Page.Content>
        <Container direction='column' alignItems='center'>
          <Page.Article>
            {chosenPizza ? (
              <Container
                padded='medium'
                bottom='small'
                flex
                direction='column'
                alignItems='center'
              >
                <Typography>Name: {chosenPizza[0].name}</Typography>
                <Typography>
                  Delivery time: {chosenPizza[0].delivery_time} minutes
                </Typography>
                <Typography>Price: ${chosenPizza[0].price}</Typography>
                <Typography>Size: {chosenPizza[0].size}</Typography>
                <Container>
                  <Typography align='center'>Ingredients:</Typography>
                  <div className='ingredients__images'>
                    {chosenPizza[0].ingredients.map((src) => (
                      <div key={src} className='ingredients__img'>
                        <img
                          src={require(`../../images/${src}.jpg`)}
                          alt={src}
                          title={src}
                        />
                      </div>
                    ))}
                  </div>
                </Container>
              </Container>
            ) : (
              <Container>
                <Typography>No such pizza</Typography>
              </Container>
            )}
          </Page.Article>
          <Container
            style={{
              backgroundColor: palette.blue.darker,
              width: 'fit-content',
              margin: 'auto',
            }}
            padded='medium'
            top='medium'
            flex
          >
            <Typography size='medium'>
              <Link color='white' href={ROUTES_LIST.ROUTE_SORTER}>
                Home page
              </Link>
            </Typography>
          </Container>
        </Container>
      </Page.Content>
    </Container>
  )
}

export default PizzaPage
