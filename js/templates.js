const nav = document.querySelector(".nav");
const firstImage = document.querySelector(".first-image");
const products = document.querySelector(".products");
const footer = document.querySelector(".footer");

const navContent = `<nav>
<div class="nav-brand">
  <img src="images/logo.svg" alt="brand logo" />
  <span class="brand-name">Ofada Hub</span>
</div>
<div id= "hamburger" class="hamburger">
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
</div>
<div class="dropdown">
  <ul class="nav-list">
    <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
    <li class="nav-item">
      <a class="nav-link" href="about.html">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="testimonials.html">Testimonials</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="testimonials.html/#Faqs">FAQs</a>
    </li>
  </ul>
</div>
</nav>
`;

const productsContent = ` <h2 class="product-heading">Our Products</h2>
<p>
  OFADA HUB is a small/medium business into the production, processing,
  packaging, sale and distribution of the popular Nigeria local rice known
  as Ofada (brown rice)
</p>
<div class="list">
  <div class="price-list">
    <span class="list-heading"> PRICE LIST</span>
    <span class="list"> 2kg - 2,200 </span>
    <span class="list"> 5kg - 5,000 </span>
    <span class="list"> 10kg - 9,800 </span>
    <span class="list"> 25kg - 22,000</span>
  </div>
  <div class="distributor-list">
    <span class="list-heading"> DISTRIBUTOR’S PRICE LIST </span>
    <span class="list"> 2kg - 1,900 </span>
    <span class="list"> 5kg - 4,700 </span>
    <span class="list"> 10kg - 9,500 </span>
    <span class="list"> 25kg - 21,000 </span>
  </div>
</div>

<div class="product-images">
  <div class="product-image">
    <img src="images/ofada3.jpg" alt="product image" />
  </div>
  <div class="product-image">
    <img src="images/ofada4.jpg" alt="product image" />
  </div>
  <div class="product-image">
    <img src="images/ofada5.jpg" alt="product image" />
  </div>
  <div class="product-image">
    <img src="images/ofada6.jpg" alt="product image" />
  </div>
  <div class="product-image">
    <img src="images/ofada7.jpg" alt="product image" />
  </div>
  <div class="product-image">
    <img src="images/ofada8.jpg" alt="product image" />
  </div>
</div>`;

const footerContent = ` <div class="contact">
<h2 class="contact-heading">Contacts</h2>
<p><img src="images/call.svg" alt="call icon" /> +234 907 674 9176</p>
<p>
  <img src="images/location.svg" alt="location icon" /> 276, Agege Motor
  Road, Olorunsogo B/stop, Mushin, Lagos State.
</p>
<div class="social">
  <div class="social-list">
    <div class="social-icon facebook">
      <a href="http://" target="_blank"
        ><img src="images/facebook.svg" alt="facebook"
      /></a>
    </div>
    <div class="social-icon instagram">
      <a href="http://" target="_blank"
        ><img src="images/instagram.svg" alt="facebook"
      /></a>
    </div>
    <div class="social-icon twitter">
      <a href="http://" target="_blank"
        ><img src="images/twitter.svg" alt="facebook"
      /></a>
    </div>
    <div class="social-icon google-plus">
      <a href="http://" target="_blank"
        ><img src="images/google-plus.svg" alt="facebook"
      /></a>
    </div>
  </div>
</div>
</div>
<footer>
<ul class="footer-list">
  <li class="footer-link">
    <a href="">© <span class="year"></span> Ofadahub</a>
  </li>
  <li class="footer-link"><a href="">Privacy Policy and Terms</a></li>
  <li class="footer-link"><a href="">Schedule a Call</a></li>
  <li class="footer-link"><a href="">Newsletter</a></li>
</ul>
</footer>`;

nav.innerHTML = navContent;
const firstImageContent = document.createElement("img");
firstImageContent.src = "images/ofada1.jpg";
firstImage.appendChild(firstImageContent);
products.innerHTML = productsContent;
footer.innerHTML = footerContent;
