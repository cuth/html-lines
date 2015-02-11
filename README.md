html-lines
==========

Draw a line using an HTML element between two existing elements. Lines can easily be made to work responsively when attaching the `redraw` method to the window.resize event. Use CSS to control line styles and animation. Use the LINES API to manipulate the lines.

LINES
-----
This is the global object created when loading html-lines.js.
```html
<script src="html-lines.js"></script>
```

If using CommonJS, **LINES** would be created by requiring.
```js
var LINES = require('html-lines');
```

### LINES.setOptions
@param - {Object}
Change the default options.
```js
LINES.setOptions({
    lineElementType: {String},
    nameAttribute: {String},
    stateAttribute: {String}
});

// defaults
{
    lineElementType: 'div',
    nameAttribute: 'data-line',
    stateAttribute: 'data-line-state'
}
```

### LINES.createAnchor
@param - {Object}
@return - {Object} instance of Anchor
```js
var anchor = LINES.createAnchor({
    el: {HTMLElement or querySelector String},
    xOffset: {Number},
    yOffset: {Number},
    xOrigin: {'center' or 'left' or 'right'},
    yOrigin: {'center' or 'top' or 'left'}
});

// defaults
{
    el: document.body,
    xOffset: 0,
    yOffset: 0,
    xOrigin: 'center',
    yOrigin: 'center'
}
```
*Anchors don't add anything to the DOM.*

### LINES.createLine
@param - {Object} instance of Anchor
@param - {Object} instance of Anchor
@param - {Object}
@return - {Object} instance of Line
```js
LINES.createLine(anchor1, anchor2, {
    name: {String},
    state: {String}
});

// defaults
{
    name: '',
    state: ''
}
```

### LINES.redraw
Recalculates anchor positions and changes line position and size and angle
```js
LINES.redraw();
```

### LINES.getAnchors
@return - {Array}
```js
var anchors = LINES.getAnchors();
```

### LINES.getLines
@return - {Array}
```js
var lines = LINES.getLines();
```

### LINES.destroyAll
```js
LINES.destroyAll();
```

Instance of Anchor
------------------

```js
var anchor = LINES.createAnchor(...);
```

### anchor.destory
```js
anchor.destory();
```
*Any lines attached to this anchor will also be destoryed.*

Instance of Line
----------------

```js
var line = LINES.createLine(...);
```

### line.name
@param - {String}
@return - {String}
```js
line.name('newName');
// or
var name = line.name(); // newName
```

### line.state
@param - {String}
@return - {String}
```js
line.state('newState');
// or
var state = line.state(); // newState
```

### line.destory
```js
line.destory();
```
