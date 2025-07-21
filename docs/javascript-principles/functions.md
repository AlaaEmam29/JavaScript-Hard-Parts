# Functions in JavaScript Principles

!!! abstract "Function Fundamentals"
    Functions are the building blocks of JavaScript execution, creating new execution contexts and managing the flow of the thread of execution.

## 🔧 Function Basics

### **Function Declaration**
```javascript
function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}
```

### **What Happens During Declaration**
1. **Function object** created in memory
2. **Code stored** as a property of the function object
3. **Function name** becomes a label in memory
4. **Available immediately** due to hoisting

## 🎯 Function Execution Model

### **Function Call Process**
```javascript
const output = multiplyBy2(3);
```

**Step-by-step execution:**

| Step | Action | Memory/Context |
|------|--------|----------------|
| 1 | Function call encountered | Thread pauses current execution |
| 2 | New execution context created | Fresh memory space allocated |
| 3 | Parameters assigned | `inputNumber: 3` |
| 4 | Function body executes | `result: 6` |
| 5 | Return statement | Value `6` returned |
| 6 | Context destroyed | Memory cleaned up |
| 7 | Thread continues | `output: 6` assigned |

### **Execution Context Creation**
Each function call creates:
- **New memory space** (local variables)
- **Parameter assignments** 
- **Return value handling**
- **Scope chain** for variable access

## 🧠 Function Memory Model

### **Function Object Structure**
```javascript
// When you declare a function
function add(a, b) {
  return a + b;
}

// JavaScript creates an object like:
{
  name: "add",
  parameters: ["a", "b"],
  body: "return a + b;",
  [[Call]]: // Internal method for execution
}
```

### **Function vs Function Call**
- **Function**: The stored code object
- **Function Call**: Execution of that code with specific arguments

```javascript
const myFunc = multiplyBy2;    // Reference to function object
const result = multiplyBy2(5); // Function call/execution
```

## 🔄 Function Execution Flow

### **Simple Function Execution**
```javascript
// Global execution context
function greet(name) {           // Function declaration stored
  const message = "Hello " + name;  // Executes in function context
  return message;                   // Returns to global context
}

const greeting = greet("World");  // Function call
console.log(greeting);            // Continues in global context
```

### **Nested Function Calls**
```javascript
function outer(x) {
  function inner(y) {
    return y * 2;
  }
  return inner(x) + 1;
}

const result = outer(5);  // Creates multiple execution contexts
```

**Execution flow:**
1. `outer(5)` called - new context created
2. `inner(5)` called - another new context created  
3. `inner` returns `10` - context destroyed
4. `outer` continues with `10 + 1` - returns `11`
5. `outer` context destroyed - `result = 11`

## 📊 Function Types and Execution

### **Function Declaration**
```javascript
// Available immediately (hoisted)
function declared() {
  return "I'm hoisted!";
}
```

### **Function Expression**
```javascript
// Available only after assignment
const expressed = function() {
  return "I'm not hoisted!";
};
```

### **Arrow Function**
```javascript
// Lexical this binding
const arrow = (x) => x * 2;
```

## 🎯 Key Function Principles

### **1. Functions Create Execution Contexts**
- Each call gets **fresh memory space**
- **Parameters** become local variables
- **Local variables** are isolated
- **Context destroyed** after execution

### **2. Functions Are First-Class Citizens**
- Can be **assigned to variables**
- Can be **passed as arguments**
- Can be **returned from functions**
- Can be **stored in data structures**

### **3. Functions Control Thread Flow**
- **Pause** current execution
- **Switch** to function context
- **Resume** after function returns
- **Maintain** execution order

## 🔍 Function Execution Examples

### **Parameter Passing**
```javascript
function processData(data) {
  // 'data' is a local copy of the passed value
  data.modified = true;  // Modifies the object reference
  return data;
}

const info = { name: "JavaScript" };
const processed = processData(info);
// 'info' object is modified (objects passed by reference)
```

### **Return Values**
```javascript
function calculate() {
  const result = 42;
  return result;  // Value copied to calling context
  // 'result' variable destroyed after return
}

const answer = calculate();  // 'answer' gets copy of 42
```

## 🔗 Function Relationships

### **Functions and Scope**
- Functions create **new scope**
- **Local variables** only accessible within function
- **Global variables** accessible from functions
- **Scope chain** determines variable access

### **Functions and Closures**
- Functions **remember** their creation environment
- **Lexical scope** preserved even after execution
- **Closure** enables data persistence

### **Functions and Hoisting**
- **Function declarations** fully hoisted
- **Function expressions** not hoisted
- **Execution order** matters for expressions

## 📚 Related Learning

- **[Thread of Execution](thread-of-execution.md)** - How functions interrupt the thread
- **[Call Stack](call-stack.md)** - How function calls are managed
- **[Functions & Callbacks](../functions-callbacks/resources.md)** - Advanced function patterns
- **[Closure](../closure/resources.md)** - How functions remember their environment

---

!!! success "Function Mastery"
    Understanding functions as **execution context creators** is fundamental to mastering JavaScript. Every function call is a mini-program with its own memory space and execution flow.

