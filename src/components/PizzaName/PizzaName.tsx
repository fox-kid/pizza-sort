import { usePizzaContext } from '../../context/PizzaContext';

import './styles.css';

const PizzaName = () => {
  const { pizzaList, sortBy, swap } = usePizzaContext();

  const list = !swap
    ? pizzaList?.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1))
    : pizzaList?.sort((a, b) => (a[sortBy] < b[sortBy] ? 1 : -1));

  // If it's sorted by size, the alphabet should be in reverse here
  sortBy == 'size' && list?.reverse();

  return (
    <div className="wrapper">
      <ul>
        {list?.map((pizza) => (
          <li key={pizza.name} className="list_item">
            <h4>{pizza.name}</h4>
            <p>Price: {pizza.price}</p>
            <p>Size: {pizza.size}</p>
            <p>Delivery time: {pizza.delivery_time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaName;
