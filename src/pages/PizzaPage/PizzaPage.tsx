import { useParams } from 'react-router-dom'
import { Container, Page, Typography } from '@toptal/picasso'
import { usePizzaContext } from '../../context/PizzaContext'

const PizzaPage = () => {
  const { pizzaList } = usePizzaContext()
  let { id } = useParams()

  return (
    <Container>
      <Page.TopBar title='' />
      <Page.Content>
        <Page.Article>
          {pizzaList && pizzaList.some((pizza) => pizza.id === id) ? (
            pizzaList.map(
              (pizza) =>
                pizza.id === id && (
                  <Container>
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
                )
            )
          ) : (
            <Container>
              <Typography>No such pizza</Typography>
            </Container>
          )}
        </Page.Article>
      </Page.Content>
    </Container>
  )
}

export default PizzaPage
