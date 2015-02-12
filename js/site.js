/*global LINES */

(function () {
    'use strict';

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

    var settings = {
        name: 'logo',
        state: 'hidden',
        stroke: 5
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

    // bind events
    window.addEventListener('resize', function () {
        LINES.redraw();
    });

    // animation
    var time = 100;
    var fadeLines = _lines.slice();
    var delay = 10000;

    var revert = function () {
        fadeLines = _lines.slice();
        delay = 10000;

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

        delay = delay - delay / 3 + 50;

        setTimeout(fade, delay);
    };

    var reveal = function () {
        _lines.forEach(function (line, i) {
            setTimeout(function () {
                line.state('solid');
            }, i * time);
        });
        setTimeout(fade, _lines.length * 100 + delay);
    };

    reveal();
}());
