import { usePizzaContext } from '../../context/PizzaContext';

import './styles.css';

const PizzaSortingDropdown = () => {
  const { sorterArr, setSortBy, swap, setSwap } = usePizzaContext();

  const handleSelect = (e: any) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="dropdown">
      <h3>Select Pizza Sorting Method</h3>
      <div className="preference">
        <select onChange={(e) => handleSelect(e)}>
          {sorterArr.map((opt) => {
            return (
              <option value={opt} key={opt}>
                {opt.includes('_') ? opt.replace('_', ' ') : opt}
              </option>
            );
          })}
        </select>
        <button className="btn swap" onClick={() => setSwap(!swap)} />
      </div>
    </div>
  );
};

export default PizzaSortingDropdown;
