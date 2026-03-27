import './style.css'
import { renderMidnight } from './themes/midnight.js'
import { renderLight } from './themes/light.js'

const app = document.querySelector('#app');
app.innerHTML = '<div id="theme-root"></div>';

const root = document.getElementById('theme-root');

if (window.location.pathname === '/light' || window.location.pathname === '/light/') {
  renderLight(root);
} else {
  renderMidnight(root);
}
