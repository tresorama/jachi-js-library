import { throttle } from "./debounce-throttling";

export function ObserverScroll(options) {
  const callArrayOfFunction = (a, args) => {
    if (Array.isArray(a)) {
      a.forEach((f) => {
        f && f(...args);
      });
    } else {
      f && f(...args);
    }
  };

  // state
  let lastScrollPos = 0;
  let lastScrollDirection = null;

  // adding scroll event
  const handler = function () {
    // detects new state and compares it with the new one
    const scrollPos = document.body.getBoundingClientRect().top;
    const scrollDirection = scrollPos > lastScrollPos ? "UP" : "DOWN";
    const derivedState = {
      bodyBoundingClientRect: document.body.getBoundingClientRect(),
      scrollPos,
      scrollDirection,
      scrollDirectionChanged: scrollDirection !== lastScrollDirection,
    };

    // call all callbacks
    callArrayOfFunction(options.onAfter, [derivedState]);

    // saves the new position for iteration.
    lastScrollPos = scrollPos;
    lastScrollDirection = scrollDirection;
  };
  window.addEventListener("scroll", throttle(handler, 200));
}

// Usage :
/*
new ObserverScroll({
  onAfter: [
    function firstCallback(scrollState) {
      const {
        bodyBoundingClientRect,
        scrollPos,
        scrollDirection,
        scrollDirectionChanged
      } = scrollState;
    },
    function secondCallback() {},
    function thirdCallback() {},
  ],
});

*/
