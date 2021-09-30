export function GenericEmitter() {
  return {
    actions: [],
    fire() {
      this.actions.forEach((action) => action());
    },
    subscribe(action) {
      this.actions.push(action);
    },
    unsubscribe(action) {
      const index = this.actions.indexOf(action);
      if (index === -1) return; // not found
      this.actions = this.actions.splice(index, 1);
    },
  };
}

/* 

Usage


const myEmitter = new GenericEmitter();

myEmitter.subscribe(() => console.log('first callback'));
myEmitter.subscribe(() => console.log('second callback'));
myEmitter.subscribe(() => console.log('third callback'));

document.querySelector('#my-el').addEventListener('click', function() {
  myEmitter.fire();
});

*/
