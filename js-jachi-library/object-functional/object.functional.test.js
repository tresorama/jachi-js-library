const { runTest } = require("../run-test");
const {
  extractProperty,
  extractProperties,
  extractPropertiesByCondition,
} = require("./object.functional");

// TEST TASKS
const testTasks = [
  {
    input: {
      name: "mario",
      age: 50,
      city: "Rome",
    },
    manipulation: (input) => extractProperties(["name", "city"])(input),
    expected: {
      name: "mario",
      city: "Rome",
    },
  },
  {
    input: {
      name: "mario",
      age: 50,
      city: "Rome",
    },
    manipulation: (input) => extractProperties(["not-present-prop"])(input),
    expected: {},
  },
  {
    input: {
      name: "mario",
      age: 50,
      city: "Rome",
    },
    manipulation: (input) => extractProperties([null])(input),
    expected: {},
  },
  {
    input: {
      name: "mario",
      age: 50,
      city: "Rome",
    },
    manipulation: (input) => extractProperties([undefined])(input),
    expected: {},
  },
  {
    input: {
      name: "mario",
      age: 50,
      city: "Rome",
    },
    manipulation: (input) => extractProperties([])(input),
    expected: {},
  },
  {
    input: {
      name: "mario",
      age: 50,
      city: "Rome",
    },
    manipulation: (input) => extractProperties([{}])(input),
    expected: {},
  },
  {
    input: {
      name: "mario",
      age: 50,
      city: "Rome",
    },
    manipulation: (input) => extractProperties([[]])(input),
    expected: {},
  },
  {
    input: {
      name: "mario",
      age: 50,
      city: "Rome",
    },
    manipulation: (input) =>
      extractProperties([function iDoNothing() {}])(input),
    expected: {},
  },
  {
    input: {
      name: "mario",
      age: null,
      city: undefined,
    },
    manipulation: (input) => extractProperties(["name", "age"])(input),
    expected: {
      name: "mario",
    },
  },
];

testTasks.forEach((test, index) => {
  runTest({ ...test, label: `test-${index}` });
});
