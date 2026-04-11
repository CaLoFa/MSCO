import './style.css'
import { renderMidnight } from './themes/midnight.js'
import { renderLight } from './themes/light.js'

const app = document.querySelector('#app');
app.innerHTML = '<div id="theme-root"></div>';

const root = document.getElementById('theme-root');

if (window.location.pathname.endsWith('/light') || window.location.pathname.endsWith('/light/')) {
  renderLight(root);
} else {
  renderMidnight(root);
}
