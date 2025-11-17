import "./style.css";

const homePage = document.getElementById('home');
const menuPage = document.getElementById('menu');
const contactPage = document.getElementById('contact');

//clear html
function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

//tab switching
homePage.addEventListener('click', loadHome);
menuPage.addEventListener('click', loadMenu);
contactPage.addEventListener('click',loadContact);

//homepage loader
function loadHome() {
    clearContent();

    const content = document.getElementById("content");

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to Odin Restaurant";

    const description = document.createElement("p");
    description.textContent = "The finest dishes cooked by finest chefs, for our finest customers";

    const restaurantImg = document.createElement("img");
    restaurantImg.alt = "Beautiful restaurant interior";
    restaurantImg.style.maxWidth = "100%";
    restaurantImg.style.height = "auto";
    restaurantImg.style.borderRadius = '12px';
    restaurantImg.style.marginTop = '2rem';

    content.appendChild(headline);
    content.appendChild(description);
    content.appendChild(restaurantImg);

}

//load site when first opened
loadHome();

//menupage loader
function loadMenu() {
    clearContent();

}

//contactpage loader
function loadContact() {
    clearContent();

}

