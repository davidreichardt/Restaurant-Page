export function navbar() {
  const navbar = document.querySelector('nav');

  navbar.innerHTML = `
    <div class='nav-logo'>Pasta Place</div>
    <div class='nav-button'>
      <button class='button' id='nav-home'>Home</button>
      <button class='button' id='nav-menu'>Menu</button>
      <button class='button' id='nav-contact'>Contact</button>
    </div>
  `;
}
