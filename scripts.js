'use strict';

var throttling = function throttling(f) {
  var interval =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var isPending = false;
  return function () {
    for (
      var _len = arguments.length, param = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      param[_key] = arguments[_key];
    }

    if (!isPending) {
      isPending = !!setTimeout(function () {
        f.apply(void 0, param);
        isPending = false;
      }, interval);
    }
  };
};

var button = document.createElement('a');

button.setAttribute('href', '#body');
button.style.cssText =
  '\n    position: fixed;\n    bottom: 6vh;\n    right: 5vw;\n    z-index: 999999;\n    display: none;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    box-shadow: 2px 2px 8px rgba(169, 239, 241, 0.432);\n    backdrop-filter: blur(4px);\n    background-image: url(https://icongr.am/clarity/arrow.svg?size=30&color=6b6b6b);\n    background-position: center;\n    background-size: 25px;\n    background-repeat: no-repeat;\n';

document.body.appendChild(button);

window.addEventListener(
  'scroll',
  throttling(function () {
    var pageY = window.pageYOffset;

    if (pageY >= 55) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  })
);
