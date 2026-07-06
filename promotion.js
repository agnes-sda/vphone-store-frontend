const promotions = [
  {
    id: 1,
    title: 'Spring Sale 2025',
    description: 'Get 20% off on all V-Phone products this spring!',
    image: 'https://plus.unsplash.com/premium_photo-1670152411569-7cbc00946857?w=600&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    title: 'Buy One Get One Free',
    description: 'Special BOGO offer on V-Phone Lite series until end of May.',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600&auto=format&fit=crop&q=60',
  },
  {
    id: 3,
    title: 'Exclusive Launch Offer',
    description: 'Be the first to own the latest V-Phone model with exclusive launch discounts!',
    image: 'https://plus.unsplash.com/premium_photo-1724076820794-3140772e74e5?w=600&auto=format&fit=crop&q=60',
  },
  {
    id: 4,
    title: 'Limited Time Discount',
    description: 'Grab the newest V-Phone model now with amazing discounts!',
    image: 'https://images.pexels.com/photos/3491940/pexels-photo-3491940.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];


const promoList = document.querySelector('.promotion-list');
const headerBg = document.querySelector('.header-bg');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

function displayPromotions() {
  promoList.innerHTML = '';
  promotions.forEach(promo => {
    const promoCard = document.createElement('article');
    promoCard.classList.add('promotion-card');
    promoCard.innerHTML = `
        <img src="${promo.image}" alt="${promo.title}" />
        <h3>${promo.title}</h3>
        <p>${promo.description}</p>
      `;
    promoList.appendChild(promoCard);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  displayPromotions();

  function toggleHeaderBg() {
    if (window.scrollY > 100) {
      headerBg.classList.add('show');
    } else {
      headerBg.classList.remove('show');
    }
  }
  toggleHeaderBg();
  window.addEventListener('scroll', toggleHeaderBg);

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
});
