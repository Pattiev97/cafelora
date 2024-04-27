import { Drink } from '../Drink/drink';
import './menu.css';

const fetchDrinks = async () => {
  const response = await fetch(`http://localhost:4000/api/drinks`);
  const json = await response.json();
  return json.data;
};

const drinks = await fetchDrinks();
console.log(drinks);

export const Menu = ({ drinks }) => {
  return (
    <section className="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        {drinks.map((drink) => (
          <Drink
            id={drink.id}
            name={drink.name}
            ordered={drink.ordered}
            image={drink.image}
            layers={drink.layers}
          />
        ))}

        <div className="order-detail">
          <a href="/order.html">Detail objednávky</a>
        </div>
      </div>
    </section>
  );
};
