export function fakeUseRef(intialValue) {
  let ref = { current: intialValue || null };
  const getRef = () => ref.current;
  const updateRef = (newValue) => (ref.current = newValue);
  return [getRef, updateRef];
}

/*

Usage

const [getRefValue, setRefValue] = fakeUseRef(initialValue);

*/
