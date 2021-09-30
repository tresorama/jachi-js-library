import { GenericEmitter } from "./GenericEmitter";

export function fakeUseState(initialState) {
  let state = initialState;
  const getState = () => state;
  const setState = (newState) => {
    state = newState;
    onUpdateState.fire();
  };
  const onUpdateState = new GenericEmitter();
  return [getState, setState, onUpdateState];
}

/*

Usage

const [getState, setState, onUpdateState] = fakeUseState(initialState)

onUpdateState.subscribe(function() {
  const state = getState();
  ....
  ....
})

setTimeout(() => {
  setState(!getState());
}, 2000)

*/
