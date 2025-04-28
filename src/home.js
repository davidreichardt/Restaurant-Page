import './home.css';
import diningImg from './images/dining.jpg';

export function goToHome(content) {
  content.innerHTML = `
    <div class='background-container' style="background-image: url('${diningImg}');">
      <div class='overlay'>
        <div class='restaurant-name'>
          <h1>Pasta Place</h1>
        </div>
        <div class='restaurant-description'>
          <p>Pasta Place is a cozy restaurant that serves fresh, homemade pasta dishes every day. We focus on simple, high-quality ingredients and traditional recipes. Whether you are looking for a classic spaghetti, a creamy Alfredo, or a rich lasagna, we offer something for everyone. Our goal is to provide great food in a warm and welcoming atmosphere.</p>
        </div>
      </div>
    </div>
  `;
}
