import './drink.css';
import { Layer } from '../Layer/layer.jsx';


export const Drink = ({ id, name, ordered, image, layers}) => {
  return (
    <div className="drinks-list">
      <div className="drink">
        <div className="drink__product">
          <div className="drink__cup">
            <img src={`http://localhost:4000${image}`}/>
          </div>
          <div className="drink__info">
            <h3>{name}</h3>
            {
              layers.map((layer) => (
              <Layer color={layer.color} label={layer.label}/>
              ))
            }
          </div>
        </div>
        <form className="drink__controls">
          <input type="hidden" className="order-id" value="0" />
          <button className="order-btn">Objednat</button>
        </form>
      </div>
    </div>
  );
};
