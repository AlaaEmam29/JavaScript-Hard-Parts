# Call Stack

!!! abstract "Execution Context Management"
    The call stack is JavaScript's mechanism for tracking function calls and managing execution contexts in a Last-In-First-Out (LIFO) manner.

## 📚 What is the Call Stack?

The **call stack** is a data structure that tracks:
- **Which function** is currently executing
- **Where to return** when function completes
- **Order of function calls** and returns
- **Execution context** management

### **Stack Characteristics**
- **LIFO** - Last In, First Out
- **Push** - Add execution context when function called
- **Pop** - Remove execution context when function returns
- **Stack Pointer** - Points to current execution context

## 🔄 Call Stack Operations

### **Basic Stack Operations**

```javascript
function first() {
  console.log("First function");
  second();
  console.log("Back in first");
}

function second() {
  console.log("Second function");
  third();
  console.log("Back in second");
}

function third() {
  console.log("Third function");
}

first(); // Start execution
```

### **Call Stack Timeline**

| Step | Action | Call Stack | Output |
|------|--------|------------|---------|
| 1 | `first()` called | `[first]` | |
| 2 | Execute first | `[first]` | "First function" |
| 3 | `second()` called | `[first, second]` | |
| 4 | Execute second | `[first, second]` | "Second function" |
| 5 | `third()` called | `[first, second, third]` | |
| 6 | Execute third | `[first, second, third]` | "Third function" |
| 7 | `third()` returns | `[first, second]` | |
| 8 | Continue second | `[first, second]` | "Back in second" |
| 9 | `second()` returns | `[first]` | |
| 10 | Continue first | `[first]` | "Back in first" |
| 11 | `first()` returns | `[]` | |

## 🎯 Call Stack Visualization

### **Stack Growth and Shrinkage**

```javascript
function a() {
  console.log("Function a");
  b();
}

function b() {
  console.log("Function b");
  c();
}

function c() {
  console.log("Function c");
}

a();
```

**Visual representation:**
```
Step 1: a() called
┌─────────┐
│    a    │ ← Stack pointer
└─────────┘

Step 2: b() called from a()
┌─────────┐
│    b    │ ← Stack pointer
├─────────┤
│    a    │
└─────────┘

Step 3: c() called from b()
┌─────────┐
│    c    │ ← Stack pointer
├─────────┤
│    b    │
├─────────┤
│    a    │
└─────────┘

Step 4: c() returns
┌─────────┐
│    b    │ ← Stack pointer
├─────────┤
│    a    │
└─────────┘

Step 5: b() returns
┌─────────┐
│    a    │ ← Stack pointer
└─────────┘

Step 6: a() returns
┌─────────┐
│ (empty) │
└─────────┘
```

## 🔍 Call Stack and Execution Context

### **Each Stack Frame Contains**
- **Function name** and parameters
- **Local variables** and their values
- **Return address** (where to continue after return)
- **Scope chain** for variable resolution

### **Example with Variables**
```javascript
function outer(x) {
  const outerVar = x * 2;
  
  function inner(y) {
    const innerVar = y + outerVar;
    return innerVar;
  }
  
  return inner(5);
}

const result = outer(10);
```

**Call stack with execution contexts:**
```
Global Context:
- result: undefined (initially)
- outer: function

outer(10) Context:
- x: 10
- outerVar: 20
- inner: function

inner(5) Context:
- y: 5
- innerVar: 25
- return: 25
```

## ⚠️ Stack Overflow

### **What Causes Stack Overflow**
- **Infinite recursion** without base case
- **Too many nested** function calls
- **Stack size limit** exceeded

### **Stack Overflow Example**
```javascript
function infiniteRecursion() {
  return infiniteRecursion(); // No base case!
}

infiniteRecursion(); // RangeError: Maximum call stack size exceeded
```

### **Proper Recursion with Base Case**
```javascript
function countdown(n) {
  if (n <= 0) {           // Base case
    return "Done!";
  }
  console.log(n);
  return countdown(n - 1); // Recursive call
}

countdown(3);
// Output: 3, 2, 1, "Done!"
```

## 🔧 Call Stack in Different Scenarios

### **Synchronous Function Calls**
```javascript
function sync1() {
  console.log("Sync 1");
  sync2();
}

function sync2() {
  console.log("Sync 2");
}

sync1();
// Call stack: [sync1] → [sync1, sync2] → [sync1] → []
```

### **Asynchronous Operations**
```javascript
function async1() {
  console.log("Start");
  setTimeout(() => {
    console.log("Async callback");
  }, 0);
  console.log("End");
}

async1();
// Call stack: [async1] → [] (setTimeout delegated to Web API)
// Callback executes later via event loop
```

## 📊 Call Stack vs Execution Context

### **Call Stack**
- **Data structure** for managing function calls
- **Tracks order** of execution
- **LIFO behavior** for function returns
- **Memory management** for contexts

### **Execution Context**
- **Environment** where code executes
- **Contains variables** and scope information
- **Created** when function called
- **Destroyed** when function returns

### **Relationship**
- Call stack **contains** execution contexts
- Each stack frame **is** an execution context
- Stack **manages** context lifecycle
- Context **provides** execution environment

## 🛠️ Debugging with Call Stack

### **Browser Dev Tools**
- **Sources tab** shows current call stack
- **Breakpoints** pause execution
- **Step through** function calls
- **Inspect variables** in each context

### **Error Stack Traces**
```javascript
function level1() {
  level2();
}

function level2() {
  level3();
}

function level3() {
  throw new Error("Something went wrong!");
}

level1();
```

**Stack trace shows:**
```
Error: Something went wrong!
    at level3 (script.js:10)
    at level2 (script.js:6)
    at level1 (script.js:2)
    at script.js:13
```

## 🔗 Related Concepts

- **[Thread of Execution](thread-of-execution.md)** - How the call stack manages thread flow
- **[Functions](functions.md)** - How function calls create stack frames
- **[Execution Context](../functions-callbacks/resources.md)** - What each stack frame contains
- **[Asynchronous JavaScript](../asynchronous-javascript/resources.md)** - How async operations work with the call stack

---

!!! tip "Call Stack Mastery"
    Understanding the call stack is crucial for **debugging**, **performance optimization**, and **understanding JavaScript's execution model**. It's the foundation for mastering recursion, async programming, and error handling.

