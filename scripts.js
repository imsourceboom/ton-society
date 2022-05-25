'use strict';

var throttling = function (f) {
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

var button = document.getElementById('gototop');
window.addEventListener(
  'scroll',
  throttling(function () {
    var pageY = window.pageYOffset;

    if (pageY >= 55) {
      button.classList.add('show');
    } else {
      button.classList.remove('show');
    }
  })
);

var moveGoToTop = function () {
  if (window.pageYOffset > 0) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
};

button.addEventListener('click', moveGoToTop);

var applyHere = document.querySelector('.coming-soon');

var pc_device = 'win16|win32|win64|mac|macintel';
var this_device = navigator.platform;
if (this_device) {
  if (pc_device.indexOf(navigator.platform.toLowerCase()) < 0) {
    console.log('MOBILE');
    applyHere.addEventListener('click', function () {
      applyHere.textContent = 'Coming Soon...';
      setTimeout(() => {
        applyHere.textContent = 'Apply here.';
      }, 500);
    });
  } else {
    console.log('PC');
    applyHere.addEventListener('mouseover', function () {
      applyHere.textContent = 'Coming Soon...';
    });

    applyHere.addEventListener('mouseout', function () {
      applyHere.textContent = 'Apply here.';
    });
  }
}
