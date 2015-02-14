
var LINES = (function () {
    'use strict';

    var _options = {
        lineElementType: 'div',
        nameAttribute: 'data-line',
        stateAttribute: 'data-line-state'
    };

    var _anchors = [];
    var _lines = [];

    var on = function (event, fn) {
        this._events = this._events || {};
        this._events[event] = this._events[event] || [];
        this._events[event].push(fn);
    };

    var off = function (event, fn) {
        this._events = this._events || {};
        if (event in this._events === false) return;
        if (typeof fn === 'undefined') {
            delete this._events[event];
            return;
        }
        var index = this._events[event].indexOf(fn);
        if (index > -1) {
            this._events[event].splice(index, 1);
        }
    };

    var emit = function (event /* , args... */) {
        this._events = this._events || {};
        if (event in this._events === false) return;
        for (var i = 0; i < this._events[event].length; i++) {
            this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
        }
    };

    var offset = function (anchor) {
        anchor = anchor || this;
        var x, y;

        var rect = anchor.el.getBoundingClientRect();

        if (typeof anchor.xOrigin === 'number') {
            x = rect.left + rect.width * anchor.xOrigin + anchor.xOffset;
        } else {
            switch (anchor.xOrigin) {
                case 'left':
                    x = rect.left + anchor.xOffset;
                    break;
                case 'right':
                    x = rect.left + rect.width - anchor.xOffset;
                    break;
                default:
                    x = rect.left + rect.width / 2 + anchor.xOffset;
                    break;
            }
        }

        if (typeof anchor.yOrigin === 'number') {
            y = rect.top + rect.height * anchor.yOrigin + anchor.yOffset;
        } else {
            switch (anchor.yOrigin) {
                case 'top':
                    y = rect.top + anchor.yOffset;
                    break;
                case 'bottom':
                    y = rect.top + rect.height - anchor.yOffset;
                    break;
                default:
                    y = rect.top + rect.height / 2 + anchor.yOffset;
                    break;
            }
        }

        anchor._offset = {
            left: x + window.pageXOffset,
            top: y + window.pageYOffset
        };
    };

    var Anchor = function (properties) {
        if (!properties || typeof properties !== 'object') return;

        if (typeof properties.el === 'string') {
            this.selector = properties.el;
            this.el = document.querySelector(properties.el);
        } else {
            this.el = properties.el || document.body;
        }

        this.xOffset = (typeof properties.xOffset === 'number') ? properties.xOffset : 0;
        this.yOffset = (typeof properties.yOffset === 'number') ? properties.yOffset : 0;
        this.xOrigin = (typeof properties.xOrigin === 'number' || typeof properties.xOrigin === 'string') ? properties.xOrigin : 'center';
        this.yOrigin = (typeof properties.yOrigin === 'number' || typeof properties.yOrigin === 'string') ? properties.yOrigin : 'center';

        offset.call(this);

        _anchors.push(this);
    };

    Anchor.prototype.offset = offset;

    Anchor.prototype.destroy = function () {
        var index = _anchors.indexOf(this);
        if (index > -1) {
            _anchors.splice(index, 1);
        }
        emit.call(this, 'destroyed');
    };


    var lineDistance = function (x1, y1, x2, y2) {

        var xlen = x2 - x1;
        xlen = xlen * xlen;

        var ylen = y2 - y1;
        ylen = ylen * ylen;

        return Math.sqrt(xlen + ylen);
    };

    var lineAngle = function (x1, y1, x2, y2) {
        return Math.atan2(y2 - y1, x2 - x1);
    };

    var draw = function (line) {
        line = line || this;

        var width = lineDistance(line.anchor1._offset.left, line.anchor1._offset.top, line.anchor2._offset.left, line.anchor2._offset.top);
        var angle = lineAngle(line.anchor1._offset.left, line.anchor1._offset.top, line.anchor2._offset.left, line.anchor2._offset.top);

        var strokeOffsetLeft = Math.sin(angle) * line._stroke / 2;
        var strokeOffsetTop = Math.cos(angle) * line._stroke / 2;

        var translateX = line.anchor1._offset.left + strokeOffsetLeft;
        var translateY = line.anchor1._offset.top - strokeOffsetTop;

        if (line._bleed) {
            translateX = translateX - strokeOffsetTop;
            translateY = translateY - strokeOffsetLeft;
            width = width + line._stroke;
        }

        line.el.style.webkitTransform  = 'translate(' + translateX + 'px, ' + translateY + 'px) rotate(' + angle + 'rad)';
        line.el.style.transform = 'translate(' + translateX + 'px, ' + translateY + 'px) rotate(' + angle + 'rad)';
        line.el.style.width = width + 'px';

        return {
            width: width,
            angle: angle
        };
    };

    var destroyLine = function () {
        var index = _lines.indexOf(this);
        if (index > -1) {
            _lines.splice(index, 1);

            document.body.removeChild(this.el);
        }

        off.call(this.anchor1, 'destroyed');
        off.call(this.anchor2, 'destroyed');
    };

    var Line = function (anchor1, anchor2, properties) {
        this.anchor1 = anchor1;
        this.anchor2 = anchor2;

        this._stroke = (typeof properties.stroke === 'number') ? properties.stroke : 1;
        this._bleed = (typeof properties.bleed === 'boolean') ? properties.bleed : false;
        this._name = (typeof properties.name === 'string') ? properties.name : '';
        this._state = (typeof properties.state === 'string') ? properties.state : '';

        this.el = document.createElement(_options.lineElementType);
        this.el.setAttribute(_options.nameAttribute, this._name);
        this.el.setAttribute(_options.stateAttribute, this._state);

        draw.call(this);

        document.body.appendChild(this.el);

        on.call(this.anchor1, 'destroyed', destroyLine.bind(this));
        on.call(this.anchor2, 'destroyed', destroyLine.bind(this));

        _lines.push(this);
    };

    Line.prototype.draw = draw;
    Line.prototype.destroy = destroyLine;

    Line.prototype.stroke = function (stroke) {
        if (typeof stroke === 'number') {
            this._stroke = stroke;
        }
        return this._stroke;
    };

    Line.prototype.name = function (name) {
        if (typeof name === 'string' && name !== this._name) {
            this._name = name;
            this.el.setAttribute(_options.nameAttribute, name);
        }
        return this._name;
    };

    Line.prototype.state = function (state) {
        if (typeof state === 'string' && state !== this._state) {
            this._state = state;
            this.el.setAttribute(_options.stateAttribute, state);
        }
        return this._state;
    };

    return {
        setOptions: function (options) {
            Object.keys(options).forEach(function (optionName) {
                _options[optionName] = options[optionName];
            });
        },
        createAnchor: function (properties) {
            return new Anchor(properties);
        },
        createLine: function (anchor1, anchor2, properties) {
            return new Line(anchor1, anchor2, properties);
        },
        redraw: function () {
            _anchors.forEach(offset);
            _lines.forEach(draw);
        },
        getAnchors: function () {
            return _anchors;
        },
        getLines: function () {
            return _lines;
        },
        destroyAll: function () {
            _anchors.forEach(function (anchor) {
                anchor.destory();
            });
        }
    };
}());

// export commonjs
if (typeof module !== 'undefined' && ('exports' in module)) {
    module.exports = LINES;
}
