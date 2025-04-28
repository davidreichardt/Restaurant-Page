import { navbar } from './navbar';
import { goToHome } from './home';
import { goToMenu } from './menu';
import { goToContact } from './contact';

const navHome = document.getElementById('nav-home');
const navMenu = document.getElementById('nav-menu');
const navContact = document.getElementById('nav-contact');
const content = document.getElementById('content');

function clearContent() {
  content.innerHTML = '';
}

navHome.addEventListener('click', () => {
  clearContent();
  goToHome(content);
});

navMenu.addEventListener('click', () => {
  clearContent();
  goToMenu(content);
});

navContact.addEventListener('click', () => {
  clearContent();
  goToContact(content);
});

navbar();
goToHome(content);
