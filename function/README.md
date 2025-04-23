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

