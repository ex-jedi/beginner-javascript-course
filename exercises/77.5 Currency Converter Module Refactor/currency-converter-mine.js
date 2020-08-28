/*
  https://courses.wesbos.com/account/access/5e4818abd9cc836465201439/view/375922562

* Converting to modules
* 1. Break code into library (essential stuff), utilities and handlers
* 2. Handle console errors one by one
*/

// Imports
import { init } from './init';

// Start the app only when user mouses over it
const app = document.querySelector('.app');
app.addEventListener('mouseenter', init, { once: true });
