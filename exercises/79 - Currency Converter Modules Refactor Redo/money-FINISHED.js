// *=========================================
// ** Imports  **
// *=========================================

import { init } from './init';

// Only start app when someone mouses over it
const app = document.querySelector('.app');
app.addEventListener('mouseenter', init, { once: true });
