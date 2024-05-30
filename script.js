// JavaScript to dynamically generate cards
const products = [
    { name: 'Neckband', price: '$10.00', imgSrc: 'assets/images/product-images/neckband.webp' },
    { name: 'Airpod', price: '$15.00', imgSrc: 'assets/images/product-images/airpod.webp' },
        { name: 'Airpod-131', price: '$20.00', imgSrc: 'assets/images/product-images/airpod131pro.webp' },
        { name: 'Airpod-161', price: '$25.00', imgSrc: 'assets/images/product-images/airpod161.webp' },
        { name: 'Airpod-191', price: '$30.00', imgSrc: 'assets/images/product-images/airpod191g.webp' },
        { name: 'Airpod-381', price: '$35.00', imgSrc: 'assets/images/product-images/airpod-381.webp' },
        { name: 'Bar-5400', price: '$40.00', imgSrc: 'assets/images/product-images/bar5400.webp' },
        { name: 'Airpod', price: '$45.00', imgSrc: 'assets/images/product-images/blackairpod.webp' },
        { name: 'Headphone', price: '$50.00', imgSrc: 'assets/images/product-images/headphone.webp' },
        { name: 'Speaker', price: '$55.00', imgSrc: 'assets/images/product-images/speaker.webp' },
        { name: 'Stormcall', price: '$60.00', imgSrc: 'assets/images/product-images/stormcall.webp' },
        { name: 'Watch', price: '$65.00', imgSrc: 'assets/images/product-images/watch.webp' },
        { name: 'Neckband', price: '$70.00', imgSrc: 'assets/images/product-images/neckband.webp' },
        { name: 'Bar-5400', price: '$75.00', imgSrc: 'assets/images/product-images/bar5400.webp' },
        { name: 'Headphone', price: '$80.00', imgSrc: 'assets/images/product-images/headphone.webp' },
        { name: 'Stormcall', price: '$80.00', imgSrc: 'assets/images/product-images/stormcall.webp' }
    ];

const productList = document.getElementById('product-list');

products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${product.imgSrc}" alt="${product.name}">
        <h3 id="product-name">${product.name}</h3>
        <p id="rate">${product.price}</p>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        <button id="addcart">Add to Cart</button>
    `;
    productList.appendChild(card);
});