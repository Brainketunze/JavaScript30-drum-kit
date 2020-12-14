<<<<<<< HEAD
# Drum Kit

A static web page for rhythmic expression built with only HTML, CSS & JavaScript.  This project uses .wav audio files and keypress events to turn the user's keyboard into a drum set.

Try the live demo [right here](https://hackyourfuture.be/drum-kit), it looks something like this:

[![drum kit screen shot](./images/screen-shot.png)](https://hackyourfuture.be/drum-kit)

---

## Notes

Studying this project we learned about:

* Dynamically setting classes
* Using the `<audio>` tag and .wav assets
* How the query selector can be used to easily interact with many elements
* How milestones, labels & issues can help organize work ->
  * user stories === milestones
  * tasks === issues
  * labels === what type of task it is

We struggled with:

* How to create the development strategy.  It was tricky to figure out that the `playHandler` can actually work without changing the `.played` class, once that was clear it was easier to create the _Keys Light Up_ user story.
* We kept making mistakes with the `data-key` attributes and linking the wrong keys and sounds.
* Merge Conflicts!  whoever invented these has no soul
* Keeping track of all the branches and forks.  OMG, github is confusing

These resources were very helpful:

* [KeyBoard Event Values](https://css-tricks.com/snippets/javascript/javascript-keycodes/)
* [gmlwjd9405/git-collaboration](https://github.com/gmlwjd9405/git-collaboration)
* [GitHub Project Management](https://github.com/features/project-management)

---

> * Code refactored from [Wes Bos](https://github.com/wesbos/JavaScript30/tree/master/01%20-%20JavaScript%20Drum%20Kit)
=======
# javaScript-drum-kit 

> A simple website allows the user to press nine different keys and listen to different sound associated with changes in the size and border of the keys , when the user press different keys during short period  ,the user will hear a sound like a drum. 

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)


## General info

The web site is created by `Wes Bos`, his code is written in a single `HTML` file. The main goal is learning how to separate the code into different files, in the repository the single `HTML` file has been divided in to `HTML`,`CSS` and five `JS` files.

## Screenshots
![Example screenshot](img/screenShot.png)

## Technologies
* JavaScript
* HTML
* CSS
* VSC code


## Setup
open index.html in your browser and enjoy! playing the drum 

## Code Examples

```js
**
 * play a music when the user press the nine keys , which are connected to audio files 
 * @param {Event} event - triggered whenever a user press one of the nine keys 
 */

 export function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  };
```


## Features
List of features ready and TODOs for future development

* 
* 
* 

To-do list:

* 
* 

## Status
Project is: _in progress_

## Inspiration
The project is created by `Wes Bos`
>>>>>>> 7e68282caebc953a56007ef560727799a25a7ef8
