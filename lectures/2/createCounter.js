const createCounter = () => {
  // A variable defined in a factory or constructor function scope
  // is private to that function.
  let count = 0;
return ({
    // Any other functions defined in the same scope are privileged:
    // These both have access to the private `count` variable
    // defined anywhere in their scope chain (containing function
    // scopes).
    click: () => count += 1,
    getCount: () => count.toLocaleString()
  });
};

const counter = createCounter();
counter.click();
counter.click();
counter.click();

console.log(
  counter.getCount()
);