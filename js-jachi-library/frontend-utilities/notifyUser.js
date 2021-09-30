export const notifyUser = (message) => {
  const domNode = (() => {
    let el = document.querySelector(".notice");
    if (!el) {
      document.body.insertAdjacentHTML("afterbegin", '<div class="notice"></div>');
    }
    return document.querySelector(".notice");
  })();
  domNode.innerHTML = message;
  const timeToDestroy = 5000;
  domNode.destroyTimeout = setTimeout(() => {
    domNode.innerHTML = "";
    clearTimeout(domNode.destroyTimeout);
  }, timeToDestroy);
};

export const promptUser = (message, defaultValue) => prompt(message, defaultValue);
