'use strict';

import { playSound } from '../handlers/play-sound.js';

/**
 * calls the playSound when a user press a key
 */
window.addEventListener('keydown', playSound);
