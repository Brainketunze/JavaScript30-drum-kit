<!-- BEGIN TITLE -->

# DOCS

<!-- END TITLE -->

<!-- BEGIN TOC -->

- [handlers](#handlers)
  - [playSound.js](#srchandlersplaySoundjs)
  - [removeTransition.js](#srchandlersremoveTransitionjs)
- [listeners](#listeners)
  - [keydown.js](#srclistenerskeydownjs)
  - [transitioned.js](#srclistenerstransitionedjs)
- [init.js](#srcinitjs)

<!-- END TOC -->

<!-- BEGIN DOCS -->

---

# Handlers

Handler function define user interactions. They will:

- read user input from events and from the DOM
- read and modify program data variables
- process user data with logic functions
- update the DOM to show changes to the user
- log any important information for developers

---

### [./src/handlers/playSound.js](./src/handlers/playSound.js?study)

---

### [./src/handlers/removeTransition.js](./src/handlers/removeTransition.js?study)

[TOP](#DOCS)

---

---

# Listeners

Event listeners are used to connect handler functions to user interactions with the DOM.

You can use the same handler in many different listeners, or add more than one listeners to the same DOM element.

---

### [./src/listeners/keydown.js](./src/listeners/keydown.js?study)

<a name="user type"
calls the reverseHandler when a user types in the input field"></a>

## user input

calls the reverseHandler when a user types in the input field

---

### [./src/listeners/transitioned.js](./src/listeners/transitioned.js?study)

<a name="change separator
calls handler that changes the mirror-arts separator"></a>

## transitionend

calls handler that to stop playSound

[TOP](#DOCS)

---

---

## [./src/init.js](./src/init.js?study)

<!-- END DOCS -->