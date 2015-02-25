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
    window.addEventListener('load', function () {
        LINES.redraw();
    });
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
        delay = 200;

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

        var left = fadeLines.length;

        var randomNum = Math.floor(Math.random() * left);

        var line = fadeLines.splice(randomNum, 1)[0];

        line.state('invisible');

        delay = (Math.abs(350 - left * left) + 10) / 3;

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
    var links = {
        docs: {
            el: document.querySelector('.docs')
        },
        source: {
            el: document.querySelector('.source')
        }
    };

    var iconAnchor = LINES.createAnchor({
        el: icon
    });

    var dropSettings = {
        name: 'drop-line',
        state: 'idle',
        stroke: 3
    };

    links.docs.anchors = [
        LINES.createAnchor({
            el: links.docs.el,
            xOrigin: 0,
            yOrigin: 'top',
            xOffset: 1,
            yOffset: 1
        }),
        LINES.createAnchor({
            el: links.docs.el,
            xOrigin: .25,
            yOrigin: 'top',
            yOffset: 1
        }),
        LINES.createAnchor({
            el: links.docs.el,
            xOrigin: .75,
            yOrigin: 'top',
            yOffset: 1
        }),
        LINES.createAnchor({
            el: links.docs.el,
            xOrigin: 1,
            yOrigin: 'top',
            xOffset: -1,
            yOffset: 1
        })
    ];

    links.docs.lines = [
        LINES.createLine(
            links.docs.anchors[0],
            iconAnchor,
            dropSettings
        ),
        LINES.createLine(
            links.docs.anchors[1],
            iconAnchor,
            dropSettings
        ),
        LINES.createLine(
            links.docs.anchors[2],
            iconAnchor,
            dropSettings
        ),
        LINES.createLine(
            links.docs.anchors[3],
            iconAnchor,
            dropSettings
        )
    ];

    links.source.anchors = [
        LINES.createAnchor({
            el: links.source.el,
            xOrigin: 0,
            yOrigin: 'top',
            xOffset: 1,
            yOffset: 1
        }),
        LINES.createAnchor({
            el: links.source.el,
            xOrigin: .25,
            yOrigin: 'top',
            yOffset: 1
        }),
        LINES.createAnchor({
            el: links.source.el,
            xOrigin: .75,
            yOrigin: 'top',
            yOffset: 1
        }),
        LINES.createAnchor({
            el: links.source.el,
            xOrigin: 1,
            yOrigin: 'top',
            xOffset: -1,
            yOffset: 1
        })
    ];

    links.source.lines = [
        LINES.createLine(
            links.source.anchors[0],
            iconAnchor,
            dropSettings
        ),
        LINES.createLine(
            links.source.anchors[1],
            iconAnchor,
            dropSettings
        ),
        LINES.createLine(
            links.source.anchors[2],
            iconAnchor,
            dropSettings
        ),
        LINES.createLine(
            links.source.anchors[3],
            iconAnchor,
            dropSettings
        )
    ];

    var activeLink = '';

    var setActiveLink = function (linkName) {
        if (activeLink === linkName) return;

        if (activeLink) {
            links[activeLink].lines.forEach(function (line) {
                line.state('magnet');
            });
        }

        activeLink = linkName;
        github.setAttribute('data-link', linkName);
    };

    var iconDrag = new Dragger(icon, {
        start: function (pos) {
            links.docs.anchors.forEach(function (anchor) {
                anchor.offset();
            });
            links.source.anchors.forEach(function (anchor) {
                anchor.offset();
            });
            links.docs.lines.forEach(function (line) {
                line.state('magnet');
            });
            links.source.lines.forEach(function (line) {
                line.state('magnet');
            });
        },
        drag: function (pos) {
            icon.style.webkitTransform = 'translate(' + pos.x + 'px, ' + pos.y + 'px)';
            icon.style.transform = 'translate(' + pos.x + 'px, ' + pos.y + 'px)';
            iconAnchor.offset();

            var shortestWidth = 100;
            var shortest = '';

            links.docs.lines.forEach(function (line) {
                var width = line.redraw().width;
                if (width < 100) {
                    line.state('locked');
                } else {
                    line.state('magnet');
                }
                if (width < shortestWidth) {
                    shortestWidth = width;
                    shortest = 'docs';
                }
            });

            links.source.lines.forEach(function (line) {
                var width = line.redraw().width;
                if (width < 100) {
                    line.state('locked');
                } else {
                    line.state('magnet');
                }
                if (width < shortestWidth) {
                    shortestWidth = width;
                    shortest = 'source';
                }
            });

            setActiveLink(shortest);
        },
        stop: function (pos, hasChanged) {
            if (activeLink) {
                window.location = links[activeLink].el.getAttribute('href');
                return;
            }

            links.docs.lines.forEach(function (line) {
                line.state('idle');
            });
            links.source.lines.forEach(function (line) {
                line.state('idle');
            });
        }
    });
}());


// Match
(function () {
    'use strict';

    var match = document.querySelector('.Match');
    var mountains = match.querySelectorAll('.mountains li');
    var elevations = match.querySelectorAll('.elevations li');
    var activeMountain = null;
    var activeElevation = null;

    var lineSettings = {
        name: 'match-line',
        state: 'new',
        stroke: 3
    };

    var setStatus = function (item, status) {
        if (item.status === status) return;
        item.status = status;
        item.el.setAttribute('data-status', status);
    };

    var drawLine = function (mountain, elevation) {
        setStatus(mountain, 'selected');
        setStatus(elevation, 'selected');
        activeMountain = null;
        activeElevation = null;
        var line = LINES.createLine(mountain.anchor, elevation.anchor, lineSettings);

        setTimeout(function () {
            line.state('draw');
        }, 10);

        setTimeout(function () {
            var status = (mountain.key === elevation.key) ? 'correct' : 'incorrect';
            line.state(status);
            setStatus(mountain, status);
            setStatus(elevation, status);
        }, 510);
    };

    mountains = Array.prototype.map.call(mountains, function (mountain) {
        var key = mountain.getAttribute('data-key');
        mountain.removeAttribute('data-key');
        return {
            el: mountain,
            status: 'blank',
            key: key,
            anchor: LINES.createAnchor({
                el: mountain,
                xOrigin: 'right',
                xOffset: 1,
                yOrigin: 'center'
            })
        };
    });

    elevations = Array.prototype.map.call(elevations, function (elevation) {
        var key = elevation.getAttribute('data-key');
        elevation.removeAttribute('data-key');
        return {
            el: elevation,
            status: 'blank',
            key: key,
            anchor: LINES.createAnchor({
                el: elevation,
                xOrigin: 'left',
                xOffset: 1,
                yOrigin: 'center'
            })
        };
    });

    mountains.forEach(function (mountain) {
        mountain.el.addEventListener('click', function (e) {
            if (activeMountain === mountain) {
                activeMountain = null;
                setStatus(mountain, 'blank');
                return;
            }

            if (activeMountain) {
                setStatus(activeMountain, 'blank');
            }

            if (mountain.status === 'blank') {
                activeMountain = mountain;
                setStatus(mountain, 'active');

                if (activeElevation) {
                    drawLine(mountain, activeElevation);
                }
            }
        });
    });

    elevations.forEach(function (elevation, index) {
        elevation.el.addEventListener('click', function (e) {
            if (activeElevation === elevation) {
                activeElevation = null;
                setStatus(elevation, 'blank');
                return;
            }

            if (activeElevation) {
                setStatus(activeElevation, 'blank');
            }

            if (elevation.status === 'blank') {
                activeElevation = elevation;
                setStatus(elevation, 'active');

                if (activeMountain) {
                    drawLine(activeMountain, elevation);
                }
            }
        });
    });
}());
