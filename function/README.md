## 📘 What is a Function in JavaScript?
A function in JavaScript is a reusable block of code designed to perform a specific task. Instead of writing the same code multiple times, you can create a function and call it whenever needed.

---
## 🧠 Why Use Functions in JavaScript?

**1. Reusability**
- Write once, use many times. You can call a function whenever you need it, instead of repeating the same code.
  ```javascript
  function greet(name) {
       console.log("Hello, " + name);
   }

   greet("Alice");
   greet("Bob");
   ```
   
**2. Modularity** 
   - Break large programs into smaller, manageable chunks (functions). This makes your code cleaner and easier to understand.

**3. Avoid Repetition (DRY Principle)** 
   - Don't Repeat Yourself. You can define a function once and reuse it multiple times.

**4. Easier Testing and Debugging**
   - Functions make it easier to test and debug your code. You can focus on testing individual functions instead of the entire program.

**5. Better Organization**
   - Functions help group related code together, making your codebase more structured and easier to navigate.

**6. Return Values**
- Functions can return values, which can be useful for complex calculations or data processing.
  ```javascript
  function add(a, b) {
     return a + b;
  }
     ```
    
## 📚 Declaring a Function
A function definition consists of the ``function`` keyword, followed by:
- The name of the function.
- A list of parameters to the function, enclosed in parentheses and separated by commas.
- The JavaScript statements that define the function, enclosed in curly braces, ```{ /* … */ }```.

### 📝 Basic Syntax:

```javascript
function functionName(parameters) {
    // code to execute
}
```

### 🧪 Example: Print "Hello, world!"
```javascript
function sayHello() {
    console.log("Hello, world!");
}

sayHello(); // Output: Hello, world!
```
---
## 📚 Function Invocation
To invoke a function, you use the function name followed by parentheses, like this:
```javascript
functionName(parameters);
```
### 🧪 Example: 
```javascript
const square = function (number) {
  return number * number;
};

square(5); // function invocation
```
---
## 📚 Function as Expression
A function expression is when a function is defined and assigned to a variable. Unlike a function declaration, a function expression is not hoisted, which means it can only be used after it’s defined.

### 📝 Basic Syntax:

```javascript
const functionName = function (parameters) {
    // code to execute
}
```
### 🧪 Example: 
```javascript
const greet = function(name) {
  console.log("Hello, " + name);
};

greet("Alice"); // Output: Hello, Alice
```
### ✅ Key Features of Function Expressions:
**1. Anonymous or Named** 
 - Function expressions are often anonymous (no name), but can also be named.
    ```javascript
    const sayHi = function hello() {
      console.log("Hi!");
    };
    ```
**2. Used as Values**
 - You can pass function expressions as arguments to other functions, return them from functions, or assign them to variables.
    ```javascript
    const add = function(a, b) {
      return a + b;
    };
    ```
**3. Not Hoisted**
 - Function expressions are not hoisted, which means they can only be used after they are defined.
    ```javascript
    sayHello(); // ❌ Error
    
    const sayHello = function() {
      console.log("Hello");
    };
    ```
---

### ✅ Advantages of Function Expressions:
- **Flexibility:** Can be used as callbacks, event handlers, or part of expressions.
- **Encapsulation:** Keeps the scope limited and avoids polluting the global namespace.
- **Control Over Execution:** Executes only when explicitly invoked.

### ✅ Disadvantages of Function Expressions:
- **Not Hoisted:** Function expressions are not hoisted, which means they can only be used after they are defined.
- **Limited Reusability:** Function expressions are limited to being used as values.
- **No Name:** Function expressions are often anonymous, which can make them harder to debug.

### ✅ Function Expression vs Declaration:
| **Feature** | **Function Expression** | **Function Declaration** |
| --- | --- | ---|
| **Hoisting** | Not hoisted; defined at runtime. | Hoisted; can be called before definition. |
| **Syntax** | Defined within an expression. | Uses function keyword with a name. |
| **Usage** | Useful for callbacks and dynamic functions. | Best for defining reusable functions. |

## 📚 Function Parameters and Arguments
In JavaScript, parameters and arguments work together to allow functions to accept input and perform tasks using that input.

### 🔹 What Are Parameters?
- **Parameters** are like placeholders or input variables defined in the function declaration.
- You can think of **parameters** as labels for the values that the function will receive when it is called.

``` javascript
function greet(name) {
  console.log("Hello, " + name);
}
```
➡️ In this example, ``name`` is a **parameter**.

### 🔹 What Are Arguments?
- Arguments are the actual values passed to the function when it is invoked (called).
- These values replace the parameters inside the function.

```javascript
greet("Alice"); // "Alice" is an argument
```
➡️ `"Alice"` is the **argument** passed to the greet function.

### ✅ Why Are Parameters and Arguments Useful?
1. 🔁 **Reusability** – One function can work with different values.
2. 🎯 **Dynamic Behavior** – You can modify function output based on input.
3. 🔍 **Cleaner Code** – Helps avoid repeating similar blocks of code.

### 🧪 Example with Multiple Parameters and Arguments:
```javascript
function introduce(name, age, profession) {
  console.log(`Hi, I'm ${name}, a ${age}-year-old ${profession}.`);
}

introduce("Sara", 30, "developer");
// Output: Hi, I'm Sara, a 30-year-old developer.
```
- Parameters: `name`, `age`, `profession`

- Arguments: `"Sara"`, `30`, `"developer"`

### 🛠 JavaScript Flexibility with Parameters and Arguments

#### 🟢 1. Extra Arguments Are Ignored

```javascript
function sayHi(name) {
  console.log("Hi " + name);
}

sayHi("Tom", "Extra"); // "Extra" is ignored
```

#### 🟡 2. Missing Arguments Are undefined

```javascript
function showInfo(name, age) {
  console.log(name, age);
}

showInfo("Alex"); // age will be undefined
```
#### 🔵 3. Using the arguments Object

- In non-arrow functions, you can access all passed arguments using the **arguments** object.

```javascript
function total() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

total(1, 2, 3, 4); // Returns 10
```
#### 🟣 4. Rest Parameters `(...)`

- Use rest parameters when you want to accept an **unlimited number of arguments**.

```javascript
function showAll(...items) {
    items.forEach(item => console.log(item));
}

showAll("apple", "banana", "cherry");

```
### 📋 Parameter vs Argument – Summary Table
| **🔍 Feature** |	**🧪 Parameter** |	**🧪 Argument** |
|----------------| --- | --- |
| **Defined In** | Function definition | Function call |
| **Purpose** | Acts as a placeholder | Actual data passed into function |
| **Where written** | Inside `()` after `function` keyword | Inside `()` during function invocation |
| **Can be more/fewer?** | Yes, JS handles missing/excess values | Yes, extra args ignored, missing = `undefined` |
---

## 📚 What Are Default Parameters?
**Default parameters** allow you to **set default values** for function parameters **if no value (or `undefined`) is passed** when the function is called.

This makes your function more flexible and helps avoid `undefined` values.

---
### ✅ Basic Syntax:

```javascript
function functionName(param1 = defaultValue1, param2 = defaultValue2) {
  // code block
}
```
### 🧪 Example:
```javascript
function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet("Alice"); // Output: Hello, Alice
greet();        // Output: Hello, Guest
```
➡️ In this example, if you don’t pass an argument to `name`, it defaults to `"Guest"`.

### 📌 Why Use Default Parameters?

* Avoids `undefined` values.
* Provides fallback values.
* Makes your code cleaner and easier to read.
* Prevents runtime errors when arguments are missing.

### 🧪 Example with Multiple Defaults:
```javascript
function createUser(username = "Anonymous", age = 0) {
  console.log(`User: ${username}, Age: ${age}`);
}

createUser("John", 25);   // User: John, Age: 25
createUser("Jane");       // User: Jane, Age: 0
createUser();             // User: Anonymous, Age: 0
```
---
## 📚 What is a Rest Parameter?
The **rest parameter** allows a function to accept **an indefinite number of arguments** as an **array**.

It uses the `...` (three dots) syntax and must be the **last parameter** in the function definition.

### 📝 Basic Syntax:

```javascript
function functionName(...restParameter) {
  // restParameter is an array
}
```
### 🧪 Example:
```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));         // 6
console.log(sum(4, 5, 6, 7, 8));   // 30
```
➡️ All arguments passed to `sum` are collected into the `numbers` array.

### 🔍 Use Cases:
1. Handling variable number of arguments:

```javascript
function showNames(first, ...others) {
  console.log("First:", first);
  console.log("Others:", others);
}

showNames("Alice", "Bob", "Charlie", "Dave");
/*
First: Alice
Others: [ 'Bob', 'Charlie', 'Dave' ]
*/
```

2. Replacing the old `arguments` object:

```javascript
function oldWay() {
  console.log(arguments); // not an array, can't use array methods
}

function newWay(...args) {
  console.log(args); // real array
}
```
### ⚠️ Important Rules:

* Only **one rest parameter** is allowed in a function.
* It **must be the last parameter**.
* It creates a **real array** (unlike the `arguments` object in older JS).

---

## 📚 What are Nested Functions?
A **nested function** is simply a function defined **within another function**. The inner (nested) function is **accessible only within the outer function** and can use the variables of the outer function due to **lexical scoping.**

### 🧠 Why Use Nested Functions?
* **Encapsulation:** Keep helper functions private and not accessible from the outside.
* **Organization:** Group related logic together.
* **Closure Creation:** The inner function can "remember" variables from the outer function even after the outer function finishes.

### 🧪 Basic Example:
```javascript
function outerFunction(name) {
  function greet() {
    console.log("Hello, " + name);
  }

  greet();
}

outerFunction("Alice"); // Output: Hello, Alice
```
> 🧠 `greet()` can access `name` from `outerFunction` due to **closure**.

### 🧪 Returning a Nested Function:
```javascript
function outer(a) {
  return function inner(b) {
    return a + b;
  };
}

const addFive = outer(5);  // inner(b) is returned
console.log(addFive(3));   // Output: 8
```
> 🧠 Here, `inner()` “remembers” the value of `a` from `outer()` — this is a **closure**.

### 📌 Things to Remember:

* Nested functions are **not hoisted** outside the parent function.
* Inner functions can **access all variables and parameters** of the outer function.
* They're commonly used in **closures**, **callbacks**, and **module patterns**.
---

## 📚 What is a Callback Function?
A **callback function** is **a function passed as an argument to another function**, which is then **invoked (called) inside the outer function** to complete some kind of routine or action.

### 🧠 Why Use Callback Functions?
* Handle **asynchronous operations** (like fetching data, reading files, etc.).
* Allow **custom behavior** in generic functions.
*  Enable **reusability** and **flexibility** in your code.

### 🧪 Example: Basic Callback
```javascript
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Alice", sayBye);
// Output:
// Hello, Alice
// Goodbye!
```
> 🧠 In this example, `sayBye` is a callback function that is invoked inside the `greet` function.
### 🧪 Example: Callback with Arguments
```javascript
function add(a, b, callback) {
  const result = a + b;
  callback(result);
}

function logResult(result) {
  console.log("Result:", result);
}

add(2, 3, logResult);
// Output: Result: 5
```
> 🧠 In this example, `logResult` is a callback function that takes the result as an argument and logs it.

### 🧪 Example: Callback with Anonymous Function
```javascript
function processUserInput(callback) {
  const name = "Bob";
  callback(name);
}

processUserInput(function(name) {
  console.log("Welcome, " + name);
});

// Output: Welcome, Bob
```
> 🧠 In this example, an **anonymous function** is used as a callback function.

### 📌 Synchronous vs Asynchronous Callbacks
####✅ Synchronous Callbacks:

```javascript
function calculate(num, callback) {
  return callback(num);
}

function square(x) {
  return x * x;
}

console.log(calculate(5, square)); // Output: 25
```
> 🧠 In this example, the callback function `square` is executed **synchronously**.

####✅ Asynchronous Callbacks:

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received!");
  }, 1000);
}

fetchData(function(message) {
  console.log(message); // Output after 1 sec: Data received!
});
```
> 🧠 In this example, the callback function is executed **asynchronously** after a delay of 1 second.

### 📌 Key Points:

* Callbacks can be **named** or **anonymous**.
* Useful in **event handling**, **APIs**, and **timers**.
* Are the **foundation of promises** and **async/await**.

---
## 📚 What is a Pure Function?
A **pure function** is a function that:
1. Given the same input, always returns the same output, and
2. Does not cause any side effects (like modifying global variables, logging to the console, or changing a DOM element).

### 🧠 Characteristics of Pure Functions:
| **Feature** | **Description** |
| --- | --- |
| **Deterministic** | Same input → same output. |
| **No Side Effects** | Doesn’t modify external state. |
| **Self-contained** | Only depends on its input parameters. |

### 🧪 Example: Pure Function
```javascript
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Always returns 5
```
*  Same output for same inputs.
*  Doesn’t modify anything outside its scope.

### ❌ Example: Not a Pure Function
```javascript
let count = 0;

function increment() {
  count++;
  return count;
}

console.log(increment()); // Always returns 1
console.log(increment()); // Always returns 2
```

* ❌ Modifies count (external variable) → **side effect**.
* ❌ Result depends on external state → **not pure**.

### 📦 Why Use Pure Functions?
* **Easier to test** (no setup/teardown needed).
* **Reliable** and predictable.
* Great for **debugging** and **reasoning** about code.
* Encourages **immutable** data handling.

### 🧠 Common Use in Functional Programming
Pure functions are a big part of libraries and frameworks like:

* `React` (with functional components)
* `Redux` (reducers must be pure)
* `Ramda`, `Lodash`, etc.

---

## 📚 What is a Higher-Order Function?
A **Higher-Order Function** is a function that does **at least one** of the following:

1. **Takes another function as an argument.**
2. **Returns a function as a result.** 

In simple terms:
> A function that works with other functions — either taking them in, returning them, or both!

### 🧪 Example 1: Passing a Function as an Argument
```javascript
function greet(name) {
  return "Hello, " + name;
}

function processUserInput(callback) {
  const name = "Alice";
  console.log(callback(name));
}

processUserInput(greet); // Output: Hello, Alice
```
✅ `processUserInput` is a **higher-order function** because it accepts `greet` as a **callback**.

### 🧪 Example 2: Returning a Function
```javascript
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10
```
✅ `multiplier` is a **higher-order function** because it **returns a function**.

### 🎯 Real-World Examples (Built-in HOFs)

JavaScript has many built-in higher-order functions, especially for arrays:

* ✅ `forEach`
```javascript
  [1, 2, 3].forEach(function(num) {
  console.log(num);
  });
```

* ✅ `map`
```javascript
  [1, 2, 3].map(function(num) {
  return num * 2;
  });
```
* ✅ `filter`
```javascript
  [1, 2, 3, 4, 5].filter(function(num) {
  return num % 2 === 0;
  });
```
* ✅ `reduce`
```javascript
  [1, 2, 3].reduce(function(total, num) {
  return total + num;
  });
```

### 📦 Benefits of Higher-Order Functions

* 🧠 **Abstraction**: Separate the “what” from the “how.”
* 🔄 **Reusability**: Reuse logic with different callbacks.
* 🧼 **Cleaner Code:** Shorter, more expressive code.

