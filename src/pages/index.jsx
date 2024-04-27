import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/header.jsx';
import { Banner } from '../components/Banner/banner.jsx';
import { Menu } from '../components/Menu/menu.jsx';
import { Gallery } from '../components/Gallery/gallery.jsx';
import { Contact } from '../components/Contact/contact.jsx';
import { Footer } from '../components/Footer/footer.jsx';

const fetchDrinks = async () => {
  const response = await fetch(`http://localhost:4000/api/drinks`);
  const json = await response.json();
  return json.data;
};

const drinks = await fetchDrinks();
// console.log(drinks);

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drinks} />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);

const navBtn = document.querySelector('.nav-btn');
const rollNav = document.querySelector('.rollout-nav');

navBtn.addEventListener('click', () => {
  rollNav.classList.toggle('nav-closed');
});

rollNav.addEventListener('click', () => {
  rollNav.classList.toggle('nav-closed');
});

const form = document.querySelectorAll('.drink__controls');
const orderDrink = async (e) => {
  e.preventDefault();
  const id = e.target.dataset.id;
  await fetch(`http://localhost:4000/api/drinks/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([
      { op: 'replace', path: '/ordered', value: !drinks[id] },
    ]),
  });
  window.location.reload();
};

form.forEach((item) => {
  item.addEventListener('submit', orderDrink);
});
