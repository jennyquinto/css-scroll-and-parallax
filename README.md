# CSS
## backgrounds 
**Definition**: backgrounds are a series of properties of box elements
**OPT**: color image repeat position size attachment origin clip
- color: it could be used to change the color of the background.
- image: it allows to place one or more images or gradients and you can put one or more in sequence and they stack one right after the other.
- position: How the background is positioned within it's container.
- size: it is the size of the background
- attachment: it lets to control how the background scrolls
- origin clip: they specify the positioning with padding and borders of either the background itself so it would be the backdround color or clip would refers to the background image
*values & keywords*
- background-repeat: repeat repeat-x repeat-y no-repeat space round
- background-position: k: left right top bottom center. Default: top left
-- xpos ypos 50%
-background-size: k: (default) auto, width/height cover contain
### background Combo
- background: bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment;

## Transition properties
**OPT**: property duration delay timing-function

## Animation properties
**OPT**: name duration delay timing-function iteration-count direction fill-mode play-state

# JS
- requestAnimationFrame(): This method can call another function, that is called a Callback that will perform your animation
- getBoundingClientRect(): it could be used to determine the position of an object and return rectangle. which allows you to access these all dimensions

## Page Scroll
- window.pageYOffset: that tell us how far from the top left of the window we are currently at.
- window.pageYOffset: it tells you how far to the right we have scrolled
- parallax effect: it is obtained by starting to scroll things at differents speeds