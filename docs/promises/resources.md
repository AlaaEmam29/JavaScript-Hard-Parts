# Promises - All Resources

!!! abstract "Section Overview"
    **Microtask Queue, Promise Execution, then/catch, Promise Internals**
    
    Deep understanding of Promise implementation, microtask queue, and async/await patterns.

## 📚 Complete Resource Collection (12 Resources)

### Visual Understanding

#### 1. ⭐️🎀 JavaScript Visualized: Promises & Async/Await
**Author:** Lydia Hallie  
**Type:** Visual Understanding  
**URL:** [https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke](https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke)

**Focus:** Promise lifecycle, microtask queue, async/await internals

**Why Essential:** Visual understanding of promise execution

---

#### 2. JavaScript Visualized - Promise Execution
**Author:** Lydia Hallie  
**Type:** Visual Understanding  
**URL:** [https://www.lydiahallie.com/blog/promise-execution](https://www.lydiahallie.com/blog/promise-execution)

**Focus:** Promise Object internals, [[PromiseState]], [[PromiseResult]], Promise Capability records

**Why Essential:** Internal promise object structure

---

### Frontend Masters Course

#### 3. JavaScript: The New Hard Parts - Promises Section
**Author:** Will Sentance  
**Type:** Frontend Masters Course  
**URL:** [https://frontendmasters.com/courses/javascript-new-hard-parts/](https://frontendmasters.com/courses/javascript-new-hard-parts/)

**Focus:** Will Sentance's under-the-hood promise implementation, two-pronged façade functions, microtask queue mechanics

**Why Essential:** Complete promise understanding from Will Sentance

---

### Deep Technical Understanding

#### 4. Deep Dive into JavaScript Promises
**Author:** Tech Buildy  
**Type:** Deep Technical Understanding  
**URL:** [https://medium.com/@tech.buildy/deep-dive-into-javascript-promises-9f5c7762b11a](https://medium.com/@tech.buildy/deep-dive-into-javascript-promises-9f5c7762b11a)

**Focus:** Promise interaction with JavaScript runtime, microtask queue mechanics

**Why Essential:** Promise runtime interaction details

---

#### 5. Some questions about Promise in JavaScript
**Author:** Stack Overflow  
**Type:** Deep Technical Understanding  
**URL:** [https://stackoverflow.com/questions/53918221/some-questions-about-promise-in-javascript](https://stackoverflow.com/questions/53918221/some-questions-about-promise-in-javascript)

**Focus:** Promise internals creating microtask queue entries, then callback storage

**Why Essential:** Promise internal mechanics Q&A

---

#### 6. Microtasks and event loop
**Author:** JavaScript.info  
**Type:** Deep Technical Understanding  
**URL:** [https://tr.javascript.info/microtask-queue](https://tr.javascript.info/microtask-queue)

**Focus:** Promise jobs queue (microtask queue) in V8, asynchronous promise handling

**Why Essential:** V8 promise implementation details

---

### Official Documentation

#### 7. Using promises - MDN
**Author:** MDN  
**Type:** Official Documentation  
**URL:** [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

**Focus:** Promise chaining, error handling, async patterns

**Why Essential:** Official promise usage guide

---

### Mental Models

#### 8. Just JavaScript - Promises
**Author:** Dan Abramov  
**Type:** Mental Models  
**URL:** [https://justjavascript.com/](https://justjavascript.com/)

**Focus:** Mental model building for promise understanding

**Why Essential:** Correct mental models for promises

---

### Advanced Promise Patterns

#### 9. JavaScript Promises: An introduction
**Author:** Web.dev  
**Type:** Advanced Promise Patterns  
**URL:** [https://web.dev/promises/](https://web.dev/promises/)

**Focus:** Promise states, chaining, error handling, performance

**Why Essential:** Comprehensive promise introduction

---

#### 10. Promise Implementation from Scratch
**Author:** Level Up Coding  
**Type:** Advanced Promise Patterns  
**URL:** [https://levelup.gitconnected.com/understand-javascript-promises-by-building-a-promise-from-scratch-84c0fd855720](https://levelup.gitconnected.com/understand-javascript-promises-by-building-a-promise-from-scratch-84c0fd855720)

**Focus:** Building promises from scratch, understanding internals

**Why Essential:** Complete understanding through implementation

---

#### 11. Advanced Promise Patterns
**Author:** Bit  
**Type:** Advanced Promise Patterns  
**URL:** [https://blog.bitsrc.io/advanced-promise-patterns-promise-memoization-3f8f4c5d8d8b](https://blog.bitsrc.io/advanced-promise-patterns-promise-memoization-3f8f4c5d8d8b)

**Focus:** Promise memoization, advanced async patterns

**Why Essential:** Advanced promise usage patterns

---

#### 12. JavaScript Promises Fundamentals Every Engineer Should Know
**Author:** YouTube  
**Type:** Advanced Promise Patterns  
**URL:** [https://www.youtube.com/watch?v=KIovWu7DJO0](https://www.youtube.com/watch?v=KIovWu7DJO0)

**Focus:** Promise fundamentals, microtask queue, event loop interaction

**Why Essential:** Video explanation of promise fundamentals

---

## 🎯 Learning Path for This Section

### Beginner Level
1. Start with **Lydia Hallie's Visual Understanding** for promise visualization
2. Read **MDN's Official Documentation** for basic promise usage

### Intermediate Level  
3. Study **Will Sentance's Frontend Masters Course** for complete understanding
4. Read **Web.dev's comprehensive introduction**

### Advanced Level
5. Dive into **Deep Technical Understanding** resources for internals
6. Study **V8 promise implementation** details

### Expert Level
7. Build **Promise Implementation from Scratch** for complete understanding
8. Master **Advanced Promise Patterns** and optimization techniques

## 🔗 Related Sections

- **[Asynchronous JavaScript](../asynchronous-javascript/resources.md)** - How promises work with the event loop
- **[Advanced ES6+ Concepts](../advanced-concepts/resources.md)** - async/await and modern promise patterns
- **[JavaScript Principles](../javascript-principles/resources.md)** - Execution context and promise creation

## 💡 Key Concepts Covered

- **Promise States**: Pending, fulfilled, rejected
- **Microtask Queue**: High-priority async execution
- **Promise Chaining**: Sequential async operations
- **Error Handling**: Catch and finally mechanisms
- **async/await**: Syntactic sugar over promises
- **Promise Internals**: [[PromiseState]], [[PromiseResult]]
- **Performance**: Promise optimization and best practices

---

!!! tip "Study Tip"
    Focus on understanding promises as **two-pronged façade functions** that trigger both immediate synchronous code and future asynchronous code via the microtask queue. Practice tracing promise execution through the event loop.

