/* =================================================== 
      What Does ? How to Use ? 
=================================================== */
/*
Short Answer: replace jQuery.ready(...) with ON_LOAD.add(function(){});

Import this js file before any other script,
call ON_LOAD.init()
then pass as parameter to ON_LOAD.add() any function you want to execute on DOM ready.

Example: 

ON_LOAD.init();

const myFancyFunction = () => {
  // your code
}
ON_LOAD.add(myFancyFunction);


*/

export const ON_LOAD = {
  events: [],
  init() {
    document.addEventListener("DOMContentLoaded", this.fire.bind(this));
  },
  add(event) {
    this.events = [...this.events, event];
  },
  fire() {
    this.events.forEach((event) => event());
  },
};
