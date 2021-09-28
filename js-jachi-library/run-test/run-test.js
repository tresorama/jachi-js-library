// TEST UTILITIES
const testLogger = ({ label, testPassed, ...rest }) => {
  console.groupCollapsed(
    `%c  %c test passed : ${testPassed}`,
    `
      background-color: ${testPassed ? "green" : "red"};
      margin-right: 10px;
      `,
    `
      background-color: transparent;
      `
  );

  console.table({ label, testPassed });
  console.log(rest);
  console.groupEnd();
};
const runTest = (testTask) => {
  const { input, manipulation, expected } = testTask;
  const output = manipulation(input);
  const outcome = JSON.stringify(output) == JSON.stringify(expected);
  testLogger({
    ...testTask,
    output,
    testPassed: outcome,
  });
};

module.exports = {
  runTest,
};
