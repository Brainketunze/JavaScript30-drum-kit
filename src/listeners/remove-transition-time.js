'use strict';

import { removeTransition } from '../handlers/remove-transition.js';

/*
 * calls the handler to stop the transition.
 */
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));