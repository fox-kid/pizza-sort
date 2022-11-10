import { Container, Page, Typography, Link } from '@toptal/picasso'
import { usePizzaContext } from '../../context/PizzaContext'
import { palette } from '@toptal/picasso/utils'

import './styles.css'

const PizzaListPage = () => {
  const { pizzaList } = usePizzaContext()

  return (
    <Container>
      <Page.TopBar title='Pizza list' />
      <Page.Content>
        <Page.Article>
          {pizzaList
            ? pizzaList.map((pizza) => (
                <Container
                  key={pizza.name}
                  padded='medium'
                  bottom='small'
                  flex
                  direction='column'
                  alignItems='center'
                >
                  <Typography>Name: {pizza.name}</Typography>
                  <Typography>
                    Delivery time: {pizza.delivery_time} minutes
                  </Typography>
                  <Typography>Price: ${pizza.price}</Typography>
                  <Typography>Size: {pizza.size}</Typography>
                  <Container>
                    <Typography align='center'>Ingredients:</Typography>
                    <div className='ingredients__images'>
                      {pizza.ingredients.map((src) => (
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
                  <Container
                    inline
                    style={{ backgroundColor: palette.blue.darker }}
                    padded='medium'
                    top='medium'
                  >
                    <Typography size='medium'>
                      <Link
                        color='white'
                        href={`/pizza/${pizza.id}`}
                      >
                        Check pizza
                      </Link>
                    </Typography>
                  </Container>
                </Container>
              ))
            : null}
        </Page.Article>
      </Page.Content>
    </Container>
  )
}

export default PizzaListPage
