/*global LINES */

var debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    return function() {
        context = this;
        args = arguments;
        timestamp = new Date();
        var later = function() {
            var last = (new Date()) - timestamp;
            if (last < wait) {
                timeout = setTimeout(later, wait - last);
            } else {
                timeout = null;
                if (!immediate) result = func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        if (!timeout) {
            timeout = setTimeout(later, wait);
        }
        if (callNow) result = func.apply(context, args);
        return result;
    };
};


// Logo
(function () {
    'use strict';

    var differentStrokes = [
        {
            query: matchMedia('all'),
            size: 2
        },
        {
            query: matchMedia('(min-width: 500px)'),
            size: 4
        },
        {
            query: matchMedia('(min-width: 700px)'),
            size: 6
        },
        {
            query: matchMedia('(min-width: 1000px)'),
            size: 8
        }
    ];

    var getStrokeSize = function () {
        var size = 0;
        differentStrokes.forEach(function (stroke) {
            if (stroke.query.matches) {
                size = stroke.size;
            }
        });
        return size;
    };

    var logo = document.querySelector('.Logo');

    var html = {
        h: logo.querySelector('.html.h'),
        t: logo.querySelector('.html.t'),
        m: logo.querySelector('.html.m'),
        l: logo.querySelector('.html.l')
    };

    var lines = {
        l: logo.querySelector('.lines.l'),
        i: logo.querySelector('.lines.i'),
        n: logo.querySelector('.lines.n'),
        e: logo.querySelector('.lines.e'),
        s: logo.querySelector('.lines.s')
    };

    var _lines = [];

    var strokeSize = getStrokeSize();
    var settings = {
        name: 'logo',
        state: 'hidden',
        stroke: strokeSize,
        bleed: true
    };

    // H
    _lines.push(LINES.createLine(
        LINES.createAnchor({
            el: html.h,
            xOrigin: 'left',
            yOrigin: 'top'
        }),
        LINES.createAnchor({
            el: html.h,
            xOrigin: 'left',
            yOrigin: 'bottom'
        }),
        settings
    ));
    _lines.push(LINES.createLine(
        LINES.createAnchor({
            el: html.h,
            xOrigin: 'left',
            yOrigin: 'center'
        }),
        LINES.createAnchor({
            el: html.h,
            xOrigin: 'right',
            yOrigin: 'center'
        }),
        settings
    ));
    _lines.push(LINES.createLine(
        LINES.createAnchor({
            el: html.h,
            xOrigin: 'right',
            yOrigin: 'top'
        }),
        LINES.createAnchor({
            el: html.h,
            xOrigin: 'right',
            yOrigin: 'bottom'
        }),
        settings
    ));

    // T
    _lines.push(LINES.createLine(
        LINES.createAnchor({
            el: html.t,
            xOrigin: 'left',
            yOrigin: 'top'
        }),
        LINES.createAnchor({
            el: html.t,
            xOrigin: 'right',
            yOrigin: 'top'
        }),
        settings
    ));
    _lines.push(LINES.createLine(
        LINES.createAnchor({
            el: html.t,
            xOrigin: 'center',
            yOrigin: 'top'
        }),
        LINES.createAnchor({
            el: html.t,
            xOrigin: 'center',
            yOrigin: 'bottom'
        }),
        settings
    ));

    // M
    var mTopLeftAnchor = LINES.createAnchor({
        el: html.m,
        xOrigin: 'left',
        yOrigin: 'top'
    });
    var mCenterCenterAnchor = LINES.createAnchor({
        el: html.m,
        xOrigin: 'center',
        yOrigin: 'center'
    });
    var mTopRightAnchor = LINES.createAnchor({
        el: html.m,
        xOrigin: 'right',
        yOrigin: 'top'
    });
    _lines.push(LINES.createLine(
        mTopLeftAnchor
        ,
        LINES.createAnchor({
            el: html.m,
            xOrigin: 'left',
            yOrigin: 'bottom'
        }),
        settings
    ));
    _lines.push(LINES.createLine(
        mTopLeftAnchor,
        mCenterCenterAnchor,
        settings
    ));
    _lines.push(LINES.createLine(
        mCenterCenterAnchor,
        mTopRightAnchor,
        settings
    ));
    _lines.push(LINES.createLine(
        mTopRightAnchor,
        LINES.createAnchor({
            el: html.m,
            xOrigin: 'right',
            yOrigin: 'bottom'
        }),
        settings
    ));

    // L
    var lLeftBottomAnchor = LINES.createAnchor({
        el: html.l,
        xOrigin: 'left',
        yOrigin: 'bottom'
    });
    _lines.push(LINES.createLine(
        LINES.createAnchor({
            el: html.l,
            xOrigin: 'left',
            yOrigin: 'top'
        }),
        lLeftBottomAnchor,
        settings
    ));
    _lines.push(LINES.createLine(
        lLeftBottomAnchor,
        LINES.createAnchor({
            el: html.l,
            xOrigin: 'right',
            yOrigin: 'bottom'
        }),
        settings
    ));

    // L
    var lLeftBottomAnchor2 = LINES.createAnchor({
        el: lines.l,
        xOrigin: 'left',
        yOrigin: 'bottom'
    });
    _lines.push(LINES.createLine(
        LINES.createAnchor({
            el: lines.l,
            xOrigin: 'left',
            yOrigin: 'top'
        }),
        lLeftBottomAnchor2,
        settings
    ));
    _lines.push(LINES.createLine(
        lLeftBottomAnchor2,
        LINES.createAnchor({
            el: lines.l,
            xOrigin: 'right',
            yOrigin: 'bottom'
        }),
        settings
    ));

    // I
    _lines.push(LINES.createLine(
        LINES.createAnchor({
            el: lines.i,
            xOrigin: 'center',
            yOrigin: 'top'
        }),
        LINES.createAnchor({
            el: lines.i,
            xOrigin: 'center',
            yOrigin: 'bottom'
        }),
        settings
    ));

    // N
    var nLeftTopAnchor = LINES.createAnchor({
        el: lines.n,
        xOrigin: 'left',
        yOrigin: 'top'
    });
    var nRightBottomAnchor = LINES.createAnchor({
        el: lines.n,
        xOrigin: 'right',
        yOrigin: 'bottom'
    });
    _lines.push(LINES.createLine(
        nLeftTopAnchor,
        LINES.createAnchor({
            el: lines.n,
            xOrigin: 'left',
            yOrigin: 'bottom'
        }),
        settings
    ));
    _lines.push(LINES.createLine(
        nLeftTopAnchor,
        nRightBottomAnchor,
        settings
    ));
    _lines.push(LINES.createLine(
        LINES.createAnchor({
            el: lines.n,
            xOrigin: 'right',
            yOrigin: 'top'
        }),
        nRightBottomAnchor,
        settings
    ));

    // E
    var eLeftTopAnchor = LINES.createAnchor({
        el: lines.e,
        xOrigin: 'left',
        yOrigin: 'top'
    });
    var eLeftBottomAnchor = LINES.createAnchor({
        el: lines.e,
        xOrigin: 'left',
        yOrigin: 'bottom'
    });
    _lines.push(LINES.createLine(
        eLeftTopAnchor,
        eLeftBottomAnchor,
        settings
    ));
    _lines.push(LINES.createLine(
        eLeftTopAnchor,
        LINES.createAnchor({
            el: lines.e,
            xOrigin: 'right',
            yOrigin: 'top'
        }),
        settings
    ));
    _lines.push(LINES.createLine(
        LINES.createAnchor({
            el: lines.e,
            xOrigin: 'left',
            yOrigin: 'center'
        }),
        LINES.createAnchor({
            el: lines.e,
            xOrigin: .8,
            yOrigin: 'center'
        }),
        settings
    ));
    _lines.push(LINES.createLine(
        eLeftBottomAnchor,
        LINES.createAnchor({
            el: lines.e,
            xOrigin: 'right',
            yOrigin: 'bottom'
        }),
        settings
    ));

    // S
    var sLeftAnchor = LINES.createAnchor({
        el: lines.s,
        xOrigin: 'left',
        yOrigin: 0.33333
    });
    var sRightAnchor = LINES.createAnchor({
        el: lines.s,
        xOrigin: 'right',
        yOrigin: 0.66667
    });
    _lines.push(LINES.createLine(
        LINES.createAnchor({
            el: lines.s,
            xOrigin: 'right',
            yOrigin: 'top'
        }),
        sLeftAnchor,
        settings
    ));
    _lines.push(LINES.createLine(
        sLeftAnchor,
        sRightAnchor,
        settings
    ));
    _lines.push(LINES.createLine(
        sRightAnchor,
        LINES.createAnchor({
            el: lines.s,
            xOrigin: 'left',
            yOrigin: 'bottom'
        }),
        settings
    ));

    var redrawDebounce = debounce(function () {
        LINES.redraw();
    }, 150);

    // bind events
    window.addEventListener('resize', redrawDebounce);
    differentStrokes.forEach(function (stroke) {
        stroke.query.addListener(function () {
            var newStrokeSize = getStrokeSize();
            if (strokeSize !== newStrokeSize) {
                strokeSize = newStrokeSize;
                _lines.forEach(function (line) {
                    line.stroke(strokeSize);
                });
            }
        });
    });

    // animation
    var time = 100;
    var fadeLines = _lines.slice();
    var delay = 5000;

    var revert = function () {
        fadeLines = _lines.slice();
        delay = 5000;

        _lines.forEach(function (line) {
            line.state('hidden');
        });

        setTimeout(reveal, 200);
    };

    var fade = function () {

        if (fadeLines.length < 1) {
            revert();
            return;
        }

        var randomNum = Math.floor(Math.random() * fadeLines.length);

        var line = fadeLines.splice(randomNum, 1)[0];

        line.state('invisible');

        delay = delay - delay / 5 + 50;

        setTimeout(fade, delay);
    };

    var reveal = function () {
        _lines.forEach(function (line, i) {
            setTimeout(function () {
                line.state('solid');
            }, i * time);
        });
        setTimeout(fade, 15000);
    };

    reveal();
}());


// Github
(function () {
    'use strict';

    var github = document.querySelector('.Github');
    var icon = document.querySelector('.icon');
    var shadow = document.querySelector('.shadow');
    var docs = document.querySelector('.docs');
    var source = document.querySelector('.source');

    var shadowAnchor = LINES.createAnchor({
        el: shadow
    });

    var iconAnchor = LINES.createAnchor({
        el: icon
    });

    var iconLine = LINES.createLine(shadowAnchor, iconAnchor, {
        name: 'github-icon',
        state: 'idle',
        stroke: 5
    });

    var dropSettings = {
        name: 'drop-line',
        state: 'idle',
        stroke: 3
    };

    var docAnchors = [
        LINES.createAnchor({
            el: docs,
            xOrigin: 0,
            yOrigin: 'top',
            xOffset: 1,
            yOffset: 1
        }),
        LINES.createAnchor({
            el: docs,
            xOrigin: .25,
            yOrigin: 'top',
            yOffset: 1
        }),
        LINES.createAnchor({
            el: docs,
            xOrigin: .75,
            yOrigin: 'top',
            yOffset: 1
        }),
        LINES.createAnchor({
            el: docs,
            xOrigin: 1,
            yOrigin: 'top',
            xOffset: -2,
            yOffset: 1
        })
    ];

    var docLines = [
        LINES.createLine(
            docAnchors[0],
            iconAnchor,
            dropSettings
        ),
        LINES.createLine(
            docAnchors[1],
            iconAnchor,
            dropSettings
        ),
        LINES.createLine(
            docAnchors[2],
            iconAnchor,
            dropSettings
        ),
        LINES.createLine(
            docAnchors[3],
            iconAnchor,
            dropSettings
        )
    ];

    var iconDrag = new Dragger(icon, {
        start: function (pos) {
            github.setAttribute('data-state', 'dragging');
            iconLine.state('dragging');
            shadowAnchor.offset();
            docAnchors.forEach(function (anchor) {
                anchor.offset();
            });
            docLines.forEach(function (line) {
                line.state('magnet');
            });
        },
        drag: function (pos) {
            icon.style.transform = 'translate(' + pos.x + 'px, ' + pos.y + 'px)';
            iconAnchor.offset();
            iconLine.draw();
            docLines.forEach(function (line) {
                line.draw();
            });
        },
        stop: function (pos, hasChanged) {
            github.setAttribute('data-state', 'idle');
            iconLine.state('idle');
            docLines.forEach(function (line) {
                line.state('idle');
            });
        }
    });
}());