import { Container, Typography } from '@toptal/picasso'
import { usePizzaContext } from '../../context/PizzaContext'

import './styles.css'

const PizzaName = () => {
  const { sortedList } = usePizzaContext()

  return (
    <Container top='small' bottom='small'>
      <Typography align='center' variant='heading' size='xlarge'>
        Your pizza is: {sortedList ? sortedList[0]?.name : null}
      </Typography>
    </Container>
  )
}

export default PizzaName
