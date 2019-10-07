// NO TOCAR!!!
var submenus;
var productosCarrusel = [];
var productosDestacados = [
  ["img/product/product1.png", "Accessories", "Quartz Belt Watch", "$150.00"],
  ["img/product/product1.png", "product_title", "product_category", "price"]
];
// NO TOCAR!!!

// 1 - Arreglar el header (Header Menu Area)
// 1.1 - Cambia el valor de los submenus para que tengan los mismos valores que https://array-test.netlify.com/
var submenus = [
  // Submenu "Shop"
  [
    ["lorem ipsum", "link.html"],
    ["lorem ipsum", "link.html"],
    ["lorem ipsum", "link.html"]
  ],
  // Submenu "Blog"
  [
    ["lorem ipsum", "link.html"],
    ["lorem ipsum", "link.html"],
    ["lorem ipsum", "link.html"]
  ],
  // Submenu "Pages"
  [
    ["lorem ipsum", "link.html"],
    ["lorem ipsum", "link.html"],
    ["lorem ipsum", "link.html"]
  ]
];

// 2 - Arreglar el corrusel (Hero Carousel)
// 2.1 - Agrega los dos los elementos restantes con el metodo .push() para obtener el mismo resultado que en https://array-test.netlify.com/
// help: img/home/hero-slide1.png img/home/hero-slide2.png img/home/hero-slide3.png
productosCarrusel.push([
  "img/home/hero-slide1.png",
  "Wireless Headphone",
  "Accessories Item"
]);

// 3 - Arreglar el listado de productos destacados (Trending product)
// 3.1 - Quita el ultimo elemento del listado con .pop()
// 3.2 - Agrega elementos al listado para obtener el mismo resultado que en https://array-test.netlify.com/

/* NO TOCAR */
var header = document.querySelectorAll(".nav-item.submenu.dropdown");
header.forEach(function(element, index) {
  var list = document.createElement("ul");
  list.className = "dropdown-menu";
  submenus[index].forEach(function(el) {
    var listElement = document.createElement("li");
    listElement.className = "nav-item";

    var link = document.createElement("a");
    link.className = "nav-link";
    link.href = el[1];
    link.appendChild(document.createTextNode(el[0]));

    listElement.appendChild(link);
    list.appendChild(listElement);
  });
  element.appendChild(list);
});

var carrusel = document.getElementById("carrusel");
productosCarrusel.forEach(function(element) {
  var container = document.createElement("div");
  container.className = "hero-carousel__slide";

  var image = document.createElement("img");
  image.src = element[0];
  image.className = "img-fluid";

  var link = document.createElement("a");
  link.className = "hero-carousel__slideOverlay";
  link.src = "#";

  var title = document.createElement("h3");
  title.appendChild(document.createTextNode(element[1]));

  var description = document.createElement("p");
  description.appendChild(document.createTextNode(element[2]));

  link.appendChild(title);
  link.appendChild(description);
  container.appendChild(image);
  container.appendChild(link);
  carrusel.appendChild(container);
});

var destacados = document.getElementById("destacados");
productosDestacados.forEach(function(element) {
  var container = document.createElement("div");
  container.className = "col-md-6 col-lg-4 col-xl-3";

  var subContainer = document.createElement("div");
  subContainer.className = "card text-center card-product";

  // Product img
  var cardProduct = document.createElement("div");
  cardProduct.className = "card-product__img";
  var image = document.createElement("img");
  image.className = "card-img";
  image.src = element[0]; // element value
  cardProduct.appendChild(image);

  // List of items
  var list = document.createElement("ul");
  list.className = "card-product__imgOverlay";
  var liSearch = document.createElement("li");
  var liSearchButton = document.createElement("button");
  var liIcon = document.createElement("i");
  liIcon.className = "ti-search";
  liSearchButton.appendChild(liIcon);
  liSearch.appendChild(liSearchButton);
  var liShopping = document.createElement("li");
  var liShoppingButton = document.createElement("button");
  var liShIcon = document.createElement("i");
  liShIcon.className = "ti-shopping-cart";
  liShoppingButton.appendChild(liShIcon);
  liShopping.appendChild(liShoppingButton);
  var liHeart = document.createElement("li");
  var liHeartButton = document.createElement("button");
  var lIcon = document.createElement("i");
  lIcon.className = "ti-heart";
  liHeartButton.appendChild(lIcon);
  liHeart.appendChild(liHeartButton);
  list.appendChild(liSearch);
  list.appendChild(liShopping);
  list.appendChild(liShIcon);
  cardProduct.appendChild(list);

  // Card Body
  var cardBody = document.createElement("div");
  cardBody.className = "card-body";
  var description = document.createElement("p");
  description.appendChild(document.createTextNode(element[1])); // element value
  var title = document.createElement("h4");
  title.className = "card-product__title";
  title.appendChild(document.createTextNode(element[2])); // element value
  var titleLink = document.createElement("a");
  titleLink.href = "single-product.html";
  title.appendChild(titleLink);

  var price = document.createElement("p");
  price.className = "card-product__price";
  price.appendChild(document.createTextNode(element[3])); // element value
  cardBody.appendChild(title);
  cardBody.appendChild(description);
  cardBody.appendChild(price);

  subContainer.appendChild(cardProduct);
  subContainer.appendChild(cardBody);
  container.appendChild(subContainer);
  destacados.appendChild(container);
});
