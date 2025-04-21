# 📘 JavaScript Loops
Loops are used to **repeat a block of code** multiple times. They're useful when you want to do something over and over again, like printing numbers, going through arrays, or doing calculations

---
## ✅ 1. ``for`` Loop
A **for** loop is used when you know how many times you want the code to repeat. It has three parts:

- **Initialization**: This is where you initialize a variable that will be used to control the loop.
- **Condition**: This is where you specify a condition that will be checked before each iteration of the loop.
- **Increment/Decrement**: This is where you update the variable used to control the loop.
### 📝 Basic Syntax:

```javascript
for (initialization; condition; increment/decrement) {
    // code to repeat
}
```
---
### 🧪 Example: Print numbers from 1 to 10
```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// Output: 1 2 3 4 5 6 7 8 9 10
```

### 🧪 Example: Print even numbers from 1 to 10
```javascript
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// Output: 2 4 6 8 10
```
### 🧪 Example: Print odd numbers from 1 to 10
```javascript
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
// Output: 1 3 5 7 9
```
---
## ✅ 2. ``while`` Loop
The ``while`` loop is used when you don't know how many times to loop. It runs the block as long as the condition is true. The ``while`` loop has one required part – the condition.

You often use an increment or decrement inside the loop body to update variables so that the condition eventually becomes false and the loop stops.
### 📝 Basic Syntax:

```javascript
while (condition) {
    // code to repeat
    // increment or decrement
}
```
---
### 🧪 Example: Print numbers from 1 to 10
```javascript
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
// Output: 1 2 3 4 5 6 7 8 9 10
```
### 🧪 Example: Print even numbers from 1 to 10
```javascript
let i = 1;
while (i <= 10) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}
// Output: 2 4 6 8 10
```
### 🧪 Example: Print odd numbers from 1 to 10
```javascript
let i = 1;
while (i <= 10) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}
// Output: 1 3 5 7 9
```

## ✅ 3. ``do-while`` Loop
A ``do-while`` loop is control structure similar to a ``while`` loop. It differs only on one point: a ``do`` loop always executes its body at least once.
### 📝 Basic Syntax:

```javascript
do {
    // code to repeat
    // increment or decrement
} while (condition);
```
---
### 🧪 Example: Greet the user until they enter their name
````javascript
let yourName;

do {
    yourName = prompt("What's your name?");
} while (!yourName);
console.log(`Hello, ${yourName}!`);
````
### 🧪 Example: Print numbers from 1 to 10
```javascript
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);
// Output: 1 2 3 4 5 6 7 8 9 10
```
### 🧪 Example: Print even numbers from 1 to 10
```javascript
let i = 1;
do {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
} while (i <= 10);
// Output: 2 4 6 8 10
```
### 🧪 Example: Print odd numbers from 1 to 10
```javascript
let i = 1;
do {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
} while (i <= 10);
// Output: 1 3 5 7 9
```

## ✅ 4. ``for-in`` Loop
The ``for-in`` loop is used to loop through the properties of an object.
### 📝 Basic Syntax:

```javascript
for (let key in object) {
    // code to repeat
}
```
---
### 🧪 Example: Print the keys and values of an object
```javascript
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(key, obj[key]);
}
// Output: a 1 b 2 c 3
```
### 🧪 Example: Print the keys and values of a user object
````javascript
let user = { name: "John", age: 30 };

for (let key in user) {
  console.log(key + ": " + user[key]);
}
````
---
## ✅ 5. ``for-of`` Loop
The ``for-of`` loop is used to loop through the values of an iterable array or string.
### 📝 Basic Syntax:

```javascript
for (let value of iterable) {
    // code to repeat
}
```
---
### 🧪 Example: Print the values of an array
```javascript
const arr = [1, 2, 3, 4, 5];

for (let value of arr) {
    console.log(value);
}
// Output: 1 2 3 4 5
```
### 🧪 Example: Print the values of a string
```javascript
const str = "Hello";

for (let char of str) {
    console.log(char);
}
// Output: H e l l o
```

### 🧪 Example: Print the values of an iterable array
````javascript
let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
  console.log(fruit);
}
````
---
## 📊 Summary Table
| Loop Type | Use Case | Iterates Over | Runs at least once |
|---------| --- | --- | --- |
| ``for`` | Fixed number of times | Index/Counter | ❌ No |
| ``while`` | 	Condition-based loop | Manual condition | ❌ No |
| ``do-while`` | Run once, then check | Manual condition | ✅ Yes |
| ``for-in`` | Iterate object properties | Objects | ❌ No |
| ``for-of`` | Iterate array/string values | Arrays, strings | ❌ No |

# ⚙️ Loop Control Statements
## 🔸 ``break`` Statement
The ``break`` statement is used to exit a loop. It can be used inside a ``for`` loop, ``while`` loop, or a ``do-while`` loop.
### 📝 Basic Syntax:

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
// Output: 1 2 3 4
```
## 🔹 ``continue`` Statement
The ``continue`` statement is used to skip the current iteration of a loop and move to the next iteration. It can be used inside a ``for`` loop, ``while`` loop, or a ``do-while`` loop.
### 📝 Basic Syntax:

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
// Output: 1 2 3 4 6 7 8 9 10
```
