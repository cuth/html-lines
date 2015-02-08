/*global LINES */

(function () {
    'use strict';

    var lines = [];
    var debounce = null;
    var lineTimers = [];

    var animateLines = function () {
        LINES.redraw();

        var delay = 0;
        lineTimers = [];
        lines.forEach(function (line) {

            lineTimers.push(setTimeout(function () {
                line.state('active');
            }, delay));

            delay += 1000;
        });
    };

    var stopLineAnimation = function () {
        lineTimers.forEach(function (timer) {
            clearTimeout(timer);
        });

        lineTimers = [];
    };

    var anchor1 = LINES.createAnchor({
        el: '.anchor1'
    });

    var anchor2 = LINES.createAnchor({
        el: '.anchor2'
    });

    var anchorPageCorner = LINES.createAnchor({
        el: document.body,
        xOrigin: 'left',
        yOrigin: 'top'
    });

    lines.push(LINES.createLine(anchorPageCorner, anchor1, {
        name: 'line1',
        state: 'in-active'
    }));

    lines.push(LINES.createLine(anchor1, anchor2, {
        name: 'line2',
        state: 'in-active'
    }));

    lines.push(LINES.createLine(anchor2, anchorPageCorner, {
        name: 'line3',
        state: 'in-active'
    }));


    animateLines();


    window.addEventListener('resize', function () {
        clearTimeout(debounce);
        stopLineAnimation();

        lines.forEach(function (line) {
            line.state('in-active');
        });

        debounce = setTimeout(animateLines, 150);
    });
}());
