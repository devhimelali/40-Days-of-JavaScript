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


