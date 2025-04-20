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
