const ARRAY_NEWARRAY = () => {
  debugger;

  // ONE
  var nums1 = [1, 2, 3, 4]; // [1,2,3,4]
  var squared1 = nums1.map((x) => x * x); // [1,4,9,16]

  // TWO
  var nums2 = new Array(4); // [empty x 4]
  nums2 = nums2.map((x, i) => i + 1); // [empty x 4]
  // Array.map SKIPS empty array item, so num2 stay [empty x 4]
  var squared2 = nums2.map((x) => x * x); // [empty x 4]
  console.log(squared1, squared2);

  // TWO => fix 1 => SPREAD OPERATOR
  nums2 = new Array(4); // [empty x 4]
  nums2 = [...nums2]; // [undefined,undefined,undefined,undefined]
  nums2 = nums2.map((x, i) => i + 1); // [1,2,3,4]
  squared2 = nums2.map((x) => x * x); // [1,4,9,16]
  console.log(squared1, squared2);

  // TWO => fix 2 => Array.fill(undefined)
  nums2 = new Array(4); // [empty x 4]
  nums2 = nums2.fill(undefined); // [undefined,undefined,undefined,undefined]
  nums2 = nums2.map((x, i) => i + 1); // [1,2,3,4]
  squared2 = nums2.map((x) => x * x); // [1,4,9,16]
  console.log(squared1, squared2);

  // TWO => fix 3 => Array.fill(null)
  nums2 = new Array(4); // [empty x 4]
  nums2 = nums2.fill(null); // [undefined,undefined,undefined,undefined]
  nums2 = nums2.map((x, i) => i + 1); // [1,2,3,4]
  squared2 = nums2.map((x) => x * x); // [1,4,9,16]
  console.log(squared1, squared2);
};
const ARRAY_NEWARRAY_2 = () => {
  debugger;
  var first = [1, , 3]; //[1,empty,3]
  var second = [...first]; //[1,undefined,3]

  first.forEach((value, index) => {
    console.log(index, value);
  });
  /* this foreach skip item when index === 1
  0 1
  2 3
  */

  second.forEach((value, index) => {
    console.log(index, value);
  });
  /* this foreach DO NOT skip item when index === 1, because the array was filled by "..."
  0 1
  1 undefined
  2 3
  */
};
