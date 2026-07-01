const products = [
  {
    id: 1,
    name: 'V-Phone Z Pro',
    category: 'gaming',
    price: '1.500.000',
    image: 'image/phone-2.jpeg',
  },
  {
    id: 2,
    name: 'V-Camera Pro',
    category: 'camera',
    price: '3.500.000',
    image: 'image/camx.png',
  },
  {
    id: 3,
    name: 'V-Phone Lite',
    category: 'budget',
    price: '900.000',
    image: 'image/phone-4.png',
  },
  {
    id: 4,
    name: 'V-Phone G5',
    category: 'gaming',
    price: '1.200.000',
    image: 'image/phone-one.png',
  },
  {
    id: 5,
    name: 'V-Action Cam',
    category: 'camera',
    price: '3.200.000',
    image: 'image/action-cam.png',
  },
  {
    id: 6,
    name: 'V-Phone Max',
    category: 'budget',
    price: '4.000.000',
    image: 'image/phone-6.png',
  },
];

const productList = document.getElementById('product-list');
const filterButtons = document.querySelectorAll('.filters button');

const headerBg = document.querySelector('.header-bg');

function displayProducts(filter) {
  productList.innerHTML = '';
  let filteredProducts = products;
  if (filter && filter !== 'all') {
    filteredProducts = products.filter(p => p.category === filter);
  }

  // Toggle centered class based on product count
  if (filteredProducts.length < 3) {
    productList.classList.add('centered');
  } else {
    productList.classList.remove('centered');
  }

  filteredProducts.forEach(product => {
    const productElem = document.createElement('article');
    productElem.classList.add('product');
    productElem.innerHTML = `
      <div class="img-container">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <h3>${product.name}</h3>
      <p>Price: Rp. ${product.price}</p>
      <button onclick="window.location.href='register.html'" class="buy-btn">Buy Now</button>
    `;
    productList.appendChild(productElem);
  });
}


filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    displayProducts(button.getAttribute('data-filter'));
  });
});

// Initial load all products
displayProducts('all');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    headerBg.classList.add('show');
  } else {
    headerBg.classList.remove('show');
  }
});
// Responsive navigation toggle (hamburger menu)
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
});