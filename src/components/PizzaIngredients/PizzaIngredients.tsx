import { usePizzaContext } from '../../context/PizzaContext'

import './styles.css'

const PizzaIngredients = () => {
  const { sortedList } = usePizzaContext()

  return (
    <div className='ingredients__wrapper'>
      <h4>Ingredients:</h4>
      <div className='ingredients__images'>
        {sortedList
          ? sortedList[0]?.ingredients.map((src) => (
              <div key={src} className='ingredients__img'>
                <img
                  src={require(`../../images/${src}.jpg`)}
                  alt={src}
                  title={src}
                />
              </div>
            ))
          : null}
      </div>
    </div>
  )
}

export default PizzaIngredients
