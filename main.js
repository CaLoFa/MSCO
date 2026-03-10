import './style.css'
import { renderMidnight } from './themes/midnight.js'

const app = document.querySelector('#app');
app.innerHTML = '<div id="theme-root"></div>';

const root = document.getElementById('theme-root');
renderMidnight(root);
