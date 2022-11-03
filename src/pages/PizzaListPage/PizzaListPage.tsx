import { Container, Page, Typography } from '@toptal/picasso'
import { usePizzaContext } from '../../context/PizzaContext'
import { NavButton } from '../../styles/styles'

const PizzaListPage = () => {
  const { pizzaList } = usePizzaContext()

  return (
    <Container>
      <Page.TopBar title='Pizza list' />
      <Page.Content>
        <Page.Article>
          {pizzaList
            ? pizzaList.map((pizza) => (
                <Container key={pizza.name} padded='medium' bottom='small'>
                  <Typography>Name: {pizza.name}</Typography>
                  <Typography>
                    Delivery time: {pizza.delivery_time} minutes
                  </Typography>
                  <Typography>Price: ${pizza.price}</Typography>
                  <Typography>Size: {pizza.size}</Typography>
                  <Container>
                    Ingredients:
                    {pizza.ingredients.map((src) => (
                      <div key={src} className='ingredients__img'>
                        <img
                          src={require(`../../images/${src}.jpg`)}
                          alt={src}
                          title={src}
                        />
                      </div>
                    ))}
                  </Container>
                </Container>
              ))
            : null}
        </Page.Article>
        <NavButton href='/'>Home page</NavButton>
      </Page.Content>
    </Container>
  )
}

export default PizzaListPage
