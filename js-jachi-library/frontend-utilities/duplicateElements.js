export function duplicateElement({ selector, times = 1, elementModifierCallback }) {
  if (!selector) return; //abort
  const template = document.querySelector(selector);
  if (!template) {
    throw new Error(`
    Frontend Utilites - duplicateElement - Error :
      No el matches selector.
      selector => ${selector}
    `);
  }
  new Array(times).fill("not-null-value").map((unused, index) => {
    const clone = template.cloneNode(true);
    elementModifierCallback && elementModifierCallback(clone, index);
    template.parentElement.appendChild(clone);
  });
}

/*

Usage


duplicateElement({
  selector: ".my-element-to-duplicate",
  times: 14,
  elementModifierCallback: (el, index) => {
    // edit the cloned element ...
  },
});

*/
