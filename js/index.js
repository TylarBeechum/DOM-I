const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const nav = document.querySelectorAll('a');
const navs = document.querySelectorAll('a');
const cta = document.getElementsByTagName('h1');
const button = document.getElementsByTagName('button')
const h4 = document.getElementsByTagName('h4');
const para = document.getElementsByTagName('p');
const foot = document.getElementsByTagName("footer")
const img1 = document.querySelector("#cta-img");
const img2 = document.querySelector(".middle-img");

nav[0].textContent = "Services";
nav[1].textContent = "Product";
nav[2].textContent = "Vision";
nav[3].textContent = "Features";
nav[4].textContent = "About";
nav[5].textContent = "Contact";

navs[0].style.color = "green";
navs[1].style.color = "green";
navs[2].style.color = "green";
navs[3].style.color = "green";
navs[4].style.color = "green";
navs[5].style.color = "green";


cta[0].textContent = "DOM Is Awesome";

button[0].textContent = "Get Started";

h4[0].textContent = "Features";
para[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."; 
h4[1].textContent = "About";
para[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
h4[2].textContent = "Services";
para[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
h4[3].textContent = "Product";
para[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
h4[4].textContent = "Vison";
para[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

h4[5].textContent = "Contact";
para[5].textContent = "123 Way 456 Street Somewhere, USA";
para[6].textContent = "1 (888) 888-8888";
para[7].textContent = "sales@greatidea.io";

foot[0].textContent = "Copyright Great Idea! 2018"

img1.src= "img/header-img.png";
img2.src = "img/mid-page-accent.jpg";

const head = document.getElementsByTagName('header');
const subheadline = document.createElement('h1');
subheadline.textContent = "My name is Tylar!";
subheadline.style.color = "Purple";
subheadline.style.fontSize ="3.4rem";
head[0].prepend(subheadline);


const hh = document.createElement('h1');
hh.textContent = "I guess";
hh.style.color = "slategrey";
hh.style.fontSize = " 3.4rem";
cta[1].prepend(hh);