export function forceReflow({ el = document.body, position = "afterbegin" }) {
  const string = `
<div class="force-reflow">
  <p>Force reflow</p>
</div>
  `;
  el.insertAdjacentHTML(position, string);
  setTimeout(() => {
    const node = document.querySelector(".force-reflow");
    node.parentElement.removeChild(node);
  }, 1);
}

/*

Usage :

forceReflow({
  el: document.querySelector(".my-element-to-reflow"),
  position: 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend'
});


        */
