import { Drink } from '../Drink/drink';
import { Layer } from '../Layer/layer';
import './menu.css';

export const Menu = () => {
  return (
    <section className="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu-intro">
          Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
        </p>
        <Drink
          id={0}
          name="Romano"
          ordered={false}
          image="http://localhost:4000/assets/cups/romano.png"
        />
        <div className="order-detail">
          <a href="/order.html">Detail objednávky</a>
        </div>
      </div>
    </section>
  );
};
