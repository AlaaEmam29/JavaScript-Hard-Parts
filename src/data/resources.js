// JavaScript Hard Parts - Deep Learning Resources Data
export const resourcesData = {
  "javascript-principles": {
    title: "JavaScript Principles",
    subtitle: "Thread of Execution, Functions, Call Stack, Global Context",
    icon: "⚡",
    description: "Master the fundamental execution model of JavaScript with the most important and unique resources.",
    resources: [
      {
        id: 1,
        title: "JavaScript execution model (Official MDN)",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model",
        author: "MDN Web Docs",
        type: "Official Specifications",
        focus: "Agents, realms, stack, queue, heap - complete execution infrastructure",
        essential: "THE official specification-level explanation of JavaScript execution model"
      },
      {
        id: 2,
        title: "Thread of Execution - Frontend Masters",
        url: "https://frontendmasters.com/courses/javascript-hard-parts-v2/thread-of-execution/",
        author: "Will Sentance",
        type: "Educational Excellence",
        focus: "Line-by-line execution with memory allocation visualization",
        essential: "Master educator's precise language: 'It threads its way down and executes'"
      },
      {
        id: 3,
        title: "JavaScript for Serious Developers: Understanding the Thread of Execution",
        url: "https://medium.com/@chamin.njay/javascript-for-serious-developers-understanding-the-thread-of-execution-a19f4788fa99",
        author: "Chamin Jayasooriya",
        type: "Deep Mechanisms",
        focus: "Single-threaded nature, call stack, asynchronous execution, performance optimization",
        essential: "Bridges synchronous execution with asynchronous patterns comprehensively"
      },
      {
        id: 4,
        title: "Journey into JavaScript's Event Loop, Single Thread, and Beyond",
        url: "https://dev.to/ibrahzizo360/unveiling-the-javascript-magic-event-loop-single-thread-and-beyond-10pi",
        author: "Ibrahim Abdullahi",
        type: "Deep Mechanisms",
        focus: "Core execution model with event loop integration",
        essential: "Explains how single-threaded execution enables asynchronous behavior"
      },
      {
        id: 5,
        title: "V8 JavaScript Engine Explained",
        url: "https://hackernoon.com/javascript-v8-engine-explained-3f940148d4ef",
        author: "HackerNoon",
        type: "Engine-Level Technical",
        focus: "V8 single-threaded execution engine implementation details",
        essential: "Engine-level understanding of thread execution with optimization strategies"
      },
      {
        id: 6,
        title: "Thread Of Execution And Call Stack In Javascript",
        url: "https://kiprotichdominic.hashnode.dev/thread-of-execution-and-call-stack-in-javascript",
        author: "Kiprotich Dominic",
        type: "Deep Mechanisms",
        focus: "Thread execution and call stack relationship with memory management",
        essential: "Focused specifically on thread execution mechanics with practical examples"
      },
      {
        id: 7,
        title: "Understanding Execution Context, Thread, and Functions in Javascript",
        url: "https://dev.to/dipakkr/understanding-execution-context-thread-and-functions-in-javascript-3cnc",
        author: "Dipak Kumar",
        type: "Deep Mechanisms",
        focus: "Thread execution creates and manages execution contexts, hoisting",
        essential: "Connects thread execution with execution context creation and function calls"
      },
      {
        id: 8,
        title: "JavaScript Internals: What's Under the Hood?",
        url: "https://medium.com/geekculture/javascript-internals-whats-under-the-hood-29946f0ae156",
        author: "Geek Culture",
        type: "Engine-Level Technical",
        focus: "Complete JavaScript engine internals, callback queue, event loop integration",
        essential: "Complete picture of engine architecture and execution pipeline"
      }
    ]
  },
  "functions-callbacks": {
    title: "Functions & Callbacks",
    subtitle: "Higher-Order Functions, Generalized Functions, Arrow Functions",
    icon: "🔄",
    description: "Master function creation, invocation, and callback patterns for powerful JavaScript programming.",
    resources: [
      {
        id: 1,
        title: "🔥🕺🏼 JavaScript Visualized: Hoisting",
        url: "https://dev.to/lydiahallie/javascript-visualized-hoisting-478h",
        author: "Lydia Hallie",
        type: "Visual Understanding",
        focus: "Variable and function hoisting mechanisms, memory allocation",
        essential: "Visual understanding of function hoisting"
      },
      {
        id: 2,
        title: "⚡️⛓ JavaScript Visualized: Scope (Chain)",
        url: "https://dev.to/lydiahallie/javascript-visualized-scope-chain-13pd",
        author: "Lydia Hallie",
        type: "Visual Understanding",
        focus: "Lexical scope and scope chain resolution with visual examples",
        essential: "How functions access variables in outer scopes"
      },
      {
        id: 3,
        title: "You Don't Know JS: Scope & Closures",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/README.md",
        author: "Kyle Simpson",
        type: "Deep Mechanisms",
        focus: "Lexical scope, function vs block scope, hoisting mechanisms",
        essential: "Fundamental understanding of function scope"
      },
      {
        id: 4,
        title: "JavaScript Function Internals and Performance",
        url: "https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e",
        author: "Alexander Zlatkov",
        type: "Technical Deep Dives",
        focus: "V8 engine function optimization, compilation mechanisms",
        essential: "How JavaScript engines optimize function calls"
      },
      {
        id: 5,
        title: "Understanding JavaScript Functions: A Deep Dive",
        url: "https://javascript.plainenglish.io/understanding-javascript-functions-a-deep-dive-6c8b8c6e3c8f",
        author: "JavaScript in Plain English",
        type: "Technical Deep Dives",
        focus: "Function object mechanisms, first-class citizen behavior",
        essential: "Functions as objects and their internal structure"
      },
      {
        id: 6,
        title: "Higher-Order Functions in JavaScript – Explained with Practical Examples",
        url: "https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained-with-examples/",
        author: "FreeCodeCamp",
        type: "Technical Deep Dives",
        focus: "HOF patterns, functional programming concepts, callback mechanisms",
        essential: "Understanding callback patterns and functional programming"
      },
      {
        id: 7,
        title: "JavaScript 30",
        url: "https://javascript30.com/",
        author: "Wes Bos",
        type: "Practical Deep Learning",
        focus: "30 vanilla JS projects, no frameworks, practical function understanding",
        essential: "Hands-on practice with function patterns"
      },
      {
        id: 8,
        title: "Beginner JavaScript",
        url: "https://beginnerjavascript.com/",
        author: "Wes Bos",
        type: "Practical Deep Learning",
        focus: "Learn JavaScript functions from scratch with practical projects",
        essential: "Comprehensive function learning with real projects"
      },
      {
        id: 9,
        title: "JavaScript Arrow Functions: Fat and Concise Syntax in ES6",
        url: "https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/",
        author: "SitePoint",
        type: "Advanced Function Concepts",
        focus: "Arrow function mechanics, this binding, lexical scope",
        essential: "Understanding arrow function behavior differences"
      },
      {
        id: 10,
        title: "Understanding JavaScript Function Invocation and \"this\"",
        url: "https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/",
        author: "Yehuda Katz",
        type: "Advanced Function Concepts",
        focus: "Function invocation patterns, this binding mechanisms",
        essential: "How this is determined in different function contexts"
      }
    ]
  },
  "closure": {
    title: "Closure",
    subtitle: "Lexical Environment, Function Memory, Practical Applications",
    icon: "🔒",
    description: "Deep dive into closures - how functions remember their lexical environment and practical use cases.",
    resources: [
      {
        id: 1,
        title: "JavaScript Visualized - Closures (YouTube)",
        url: "https://www.youtube.com/watch?v=6Ixyltr8_R0",
        author: "Lydia Hallie",
        type: "Visual Understanding",
        focus: "Visual closure explanation with createUserManager use case",
        essential: "Visual understanding of closure creation and usage"
      },
      {
        id: 2,
        title: "I never understood JavaScript closures",
        url: "https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8",
        author: "Olivier De Meulder",
        type: "Gold Standard Article",
        focus: "Fundamental understanding of closure mechanisms (Referenced example)",
        essential: "THE definitive article for understanding closures deeply"
      },
      {
        id: 3,
        title: "You Don't Know JS: Scope & Closures - Closure Chapter",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch7.md",
        author: "Kyle Simpson",
        type: "Specification Level",
        focus: "Closure definition, lexical scope, function memory",
        essential: "Specification-level closure understanding"
      },
      {
        id: 4,
        title: "Advanced Guide to JavaScript Closures: From Fundamentals to Implementation",
        url: "https://medium.com/@tharunbalaji110/advanced-guide-to-javascript-closures-from-fundamentals-to-implementation-a22782aa8ca8",
        author: "Tharun Balaji",
        type: "Advanced Technical Deep Dives",
        focus: "Function and lexical environment combination, implementation details",
        essential: "Implementation-level understanding of closures"
      },
      {
        id: 5,
        title: "JavaScript Closures - Using the ECMA Spec",
        url: "https://stackoverflow.com/questions/15117687/javascript-closures-using-the-ecma-spec-please-explain-how-the-closure-is-cre",
        author: "Stack Overflow",
        type: "Advanced Technical Deep Dives",
        focus: "ECMA specification explanation of closure creation and maintenance",
        essential: "Official specification perspective on closures"
      },
      {
        id: 6,
        title: "A deep dive into JavaScript closures",
        url: "https://birdeatsbug.com/blog/a-deep-dive-into-javascript-closures",
        author: "Bird Eats Bug",
        type: "Advanced Technical Deep Dives",
        focus: "Inner function access to outer function scope mechanisms",
        essential: "Detailed mechanics of closure access patterns"
      },
      {
        id: 7,
        title: "Variable scope, closure - JavaScript.info",
        url: "https://javascript.info/closure",
        author: "JavaScript.info",
        type: "Advanced Technical Deep Dives",
        focus: "Lexical Environment object lifecycle and unreachability",
        essential: "Comprehensive closure tutorial with examples"
      },
      {
        id: 8,
        title: "Does a Javascript closure retain the entire parent lexical environment?",
        url: "https://stackoverflow.com/questions/59277687/does-a-javascript-closure-retain-the-entire-parent-lexical-environment-or-only-t",
        author: "Stack Overflow",
        type: "Memory Management & Optimization",
        focus: "Memory optimization in closures, what gets retained vs garbage collected",
        essential: "Understanding closure memory implications"
      },
      {
        id: 9,
        title: "Understanding JavaScript Closure in depth",
        url: "https://dev.to/srishtikprasad/understanding-javascript-closure-in-depth-411d",
        author: "Srishti Prasad",
        type: "Memory Management & Optimization",
        focus: "Function bundled with lexical environment, scope chain mechanics",
        essential: "Scope chain and closure interaction"
      },
      {
        id: 10,
        title: "Understanding Closures in JavaScript: A Friendly Guide",
        url: "https://rakeshgk.hashnode.dev/understanding-closures-in-javascript-a-friendly-guide-with-intuitive-examples",
        author: "Rakesh GK",
        type: "Practical Applications",
        focus: "Closure creation, outer lexical environment references",
        essential: "Practical examples of closure usage"
      },
      {
        id: 11,
        title: "JavaScript Closures Explained with Examples",
        url: "https://www.freecodecamp.org/news/javascript-closures-explained-with-examples/",
        author: "FreeCodeCamp",
        type: "Practical Applications",
        focus: "Practical closure patterns, module pattern, data privacy",
        essential: "Real-world closure applications"
      },
      {
        id: 12,
        title: "Closures in JavaScript Explained with Examples",
        url: "https://blog.bitsrc.io/closures-in-javascript-why-do-we-need-them-2097f5317daf",
        author: "Bit",
        type: "Practical Applications",
        focus: "Why closures exist, practical use cases, performance implications",
        essential: "Understanding the purpose and benefits of closures"
      }
    ]
  },
  "asynchronous-javascript": {
    title: "Asynchronous JavaScript",
    subtitle: "Event Loop, Web APIs, Callback Queue, Microtask Queue",
    icon: "⚡",
    description: "Master async programming with deep understanding of the event loop and browser APIs.",
    resources: [
      {
        id: 1,
        title: "Tasks, microtasks, queues and schedules - Jake Archibald",
        url: "https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/",
        author: "Jake Archibald",
        type: "Classic Deep Technical Resource",
        focus: "THE definitive spec-heavy guide to event loop mechanics",
        essential: "Explains execution order, microtask priority, browser inconsistencies"
      },
      {
        id: 2,
        title: "✨♻️ JavaScript Visualized: Event Loop",
        url: "https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif",
        author: "Lydia Hallie",
        type: "Visual Understanding",
        focus: "Event loop, call stack, web APIs, queue visualization with animations",
        essential: "Visual understanding of async execution flow"
      },
      {
        id: 3,
        title: "JavaScript Visualized - Event Loop, Web APIs, (Micro)task Queue (YouTube)",
        url: "https://www.youtube.com/watch?v=eiC58R16hb8",
        author: "Lydia Hallie",
        type: "Visual Understanding",
        focus: "Browser event loop, task queue, microtask queue, Web APIs interaction",
        essential: "Video explanation of async mechanisms"
      },
      {
        id: 4,
        title: "The JavaScript Event Loop — Deep Internals & Spec-Level Breakdown",
        url: "https://medium.com/@s35919223/the-javascript-event-loop-deep-internals-spec-level-breakdown-2add546aac4b",
        author: "Medium Author",
        type: "Engine-Level Deep Dives",
        focus: "Spec-level breakdown of event loop, microtask queue mechanics",
        essential: "Specification-level understanding of event loop"
      },
      {
        id: 5,
        title: "Macrotasks VS Microtasks: Deep Dive into JavaScript Internals",
        url: "https://blog.nashtechglobal.com/macrotasks-vs-microtasks-deep-dive-into-javascript-internals/",
        author: "NashTech",
        type: "Engine-Level Deep Dives",
        focus: "Internal coordination between microtasks and macrotasks",
        essential: "Understanding task prioritization"
      },
      {
        id: 6,
        title: "Understanding the JavaScript Event Loop: A Deep Dive",
        url: "https://awaitdeveloper.medium.com/understanding-the-javascript-event-loop-a-deep-dive-a305e51a579a",
        author: "Await Developer",
        type: "Engine-Level Deep Dives",
        focus: "Call stack, Callback Queue, and Web APIs orchestration",
        essential: "Complete event loop understanding"
      },
      {
        id: 7,
        title: "In depth: Microtasks and the JavaScript runtime environment",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth",
        author: "MDN",
        type: "Official Documentation",
        focus: "Official MDN deep dive into microtask execution and runtime environment",
        essential: "Authoritative guide to microtasks"
      },
      {
        id: 8,
        title: "You Don't Know JS: Async & Performance",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/README.md",
        author: "Kyle Simpson",
        type: "Async Patterns",
        focus: "Callbacks, promises, generators, async patterns, performance",
        essential: "Comprehensive async programming guide"
      },
      {
        id: 9,
        title: "Deep Dive into JavaScript Event Loop",
        url: "https://dev.to/imranmind/deep-dive-into-javascript-event-loop-20je",
        author: "Imran Mind",
        type: "Advanced Concepts",
        focus: "Call stack, web APIs, callback queue, microtask queue mechanics",
        essential: "Detailed event loop mechanics"
      },
      {
        id: 10,
        title: "Understanding the Event Loop, Callback Queue, and Call Stack",
        url: "https://dev.to/rajatoberoi/understanding-the-event-loop-callback-queue-and-call-stack-in-javascript-1k7c",
        author: "Rajat Oberoi",
        type: "Advanced Concepts",
        focus: "Event loop prioritization, microtask vs macrotask execution",
        essential: "Event loop prioritization rules"
      },
      {
        id: 11,
        title: "JavaScript: The New Hard Parts - Asynchronous JavaScript Section",
        url: "https://frontendmasters.com/courses/javascript-new-hard-parts/",
        author: "Will Sentance",
        type: "Frontend Masters Course",
        focus: "Will Sentance's deep dive into async fundamentals, Web Browser APIs, Event Loop rules",
        essential: "Comprehensive course on async JavaScript"
      },
      {
        id: 12,
        title: "Microtask Queues in Node.js Event Loop",
        url: "https://www.red-gate.com/simple-talk/development/javascript/microtask-queues-in-node-js-event-loop/",
        author: "Red Gate",
        type: "Advanced Concepts",
        focus: "High-priority task execution management in Node.js",
        essential: "Node.js specific async behavior"
      }
    ]
  },
  "promises": {
    title: "Promises",
    subtitle: "Microtask Queue, Promise Execution, then/catch, Promise Internals",
    icon: "🏗️",
    description: "Deep understanding of Promise implementation, microtask queue, and async/await patterns.",
    resources: [
      {
        id: 1,
        title: "⭐️🎀 JavaScript Visualized: Promises & Async/Await",
        url: "https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke",
        author: "Lydia Hallie",
        type: "Visual Understanding",
        focus: "Promise lifecycle, microtask queue, async/await internals",
        essential: "Visual understanding of promise execution"
      },
      {
        id: 2,
        title: "JavaScript Visualized - Promise Execution",
        url: "https://www.lydiahallie.com/blog/promise-execution",
        author: "Lydia Hallie",
        type: "Visual Understanding",
        focus: "Promise Object internals, [[PromiseState]], [[PromiseResult]], Promise Capability records",
        essential: "Internal promise object structure"
      },
      {
        id: 3,
        title: "JavaScript: The New Hard Parts - Promises Section",
        url: "https://frontendmasters.com/courses/javascript-new-hard-parts/",
        author: "Will Sentance",
        type: "Frontend Masters Course",
        focus: "Will Sentance's under-the-hood promise implementation, two-pronged façade functions, microtask queue mechanics",
        essential: "Complete promise understanding from Will Sentance"
      },
      {
        id: 4,
        title: "Deep Dive into JavaScript Promises",
        url: "https://medium.com/@tech.buildy/deep-dive-into-javascript-promises-9f5c7762b11a",
        author: "Tech Buildy",
        type: "Deep Technical Understanding",
        focus: "Promise interaction with JavaScript runtime, microtask queue mechanics",
        essential: "Promise runtime interaction details"
      },
      {
        id: 5,
        title: "Some questions about Promise in JavaScript",
        url: "https://stackoverflow.com/questions/53918221/some-questions-about-promise-in-javascript",
        author: "Stack Overflow",
        type: "Deep Technical Understanding",
        focus: "Promise internals creating microtask queue entries, then callback storage",
        essential: "Promise internal mechanics Q&A"
      },
      {
        id: 6,
        title: "Microtasks and event loop",
        url: "https://tr.javascript.info/microtask-queue",
        author: "JavaScript.info",
        type: "Deep Technical Understanding",
        focus: "Promise jobs queue (microtask queue) in V8, asynchronous promise handling",
        essential: "V8 promise implementation details"
      },
      {
        id: 7,
        title: "Using promises - MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises",
        author: "MDN",
        type: "Official Documentation",
        focus: "Promise chaining, error handling, async patterns",
        essential: "Official promise usage guide"
      },
      {
        id: 8,
        title: "Just JavaScript - Promises",
        url: "https://justjavascript.com/",
        author: "Dan Abramov",
        type: "Mental Models",
        focus: "Mental model building for promise understanding",
        essential: "Correct mental models for promises"
      },
      {
        id: 9,
        title: "JavaScript Promises: An introduction",
        url: "https://web.dev/promises/",
        author: "Web.dev",
        type: "Advanced Promise Patterns",
        focus: "Promise states, chaining, error handling, performance",
        essential: "Comprehensive promise introduction"
      },
      {
        id: 10,
        title: "Promise Implementation from Scratch",
        url: "https://levelup.gitconnected.com/understand-javascript-promises-by-building-a-promise-from-scratch-84c0fd855720",
        author: "Level Up Coding",
        type: "Advanced Promise Patterns",
        focus: "Building promises from scratch, understanding internals",
        essential: "Complete understanding through implementation"
      },
      {
        id: 11,
        title: "Advanced Promise Patterns",
        url: "https://blog.bitsrc.io/advanced-promise-patterns-promise-memoization-3f8f4c5d8d8b",
        author: "Bit",
        type: "Advanced Promise Patterns",
        focus: "Promise memoization, advanced async patterns",
        essential: "Advanced promise usage patterns"
      },
      {
        id: 12,
        title: "JavaScript Promises Fundamentals Every Engineer Should Know",
        url: "https://www.youtube.com/watch?v=KIovWu7DJO0",
        author: "YouTube",
        type: "Advanced Promise Patterns",
        focus: "Promise fundamentals, microtask queue, event loop interaction",
        essential: "Video explanation of promise fundamentals"
      }
    ]
  },
  "classes-prototypes": {
    title: "Classes & Prototypes",
    subtitle: "OOP, Prototype Chain, this, new, class, Factory Functions",
    icon: "🏗️",
    description: "Master JavaScript's object-oriented programming with prototypes, classes, and inheritance patterns.",
    resources: [
      {
        id: 1,
        title: "🎉👨‍👩‍👧‍👧 JavaScript Visualized: Prototypal Inheritance",
        url: "https://dev.to/lydiahallie/javascript-visualized-prototypal-inheritance-47co",
        author: "Lydia Hallie",
        type: "Visual Understanding",
        focus: "Prototype chain, inheritance mechanisms, object linking",
        essential: "Visual understanding of prototype chain"
      },
      {
        id: 2,
        title: "You Don't Know JS: this & Object Prototypes",
        url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/this-object-prototypes/README.md",
        author: "Kyle Simpson",
        type: "Deep OOP Understanding",
        focus: "this binding rules, objects, prototypes, behavior delegation",
        essential: "Complete understanding of JavaScript OOP"
      },
      {
        id: 3,
        title: "Understanding JavaScript's Prototype Chain: A Deep Dive",
        url: "https://callmerohit.medium.com/understanding-javascripts-prototype-chain-a-deep-dive-04fb7577eb0b",
        author: "Rohit",
        type: "Prototype Chain Deep Dives",
        focus: "Internal link mechanisms between objects and their prototypes",
        essential: "Prototype chain mechanics"
      },
      {
        id: 4,
        title: "A Deep Dive into JavaScript's Prototype Chain and the Foundational Role of Functions",
        url: "https://dev.to/satyajitgain/a-deep-dive-into-javascripts-prototype-chain-and-the-foundational-role-of-functions-1b62",
        author: "Satyajit Gain",
        type: "Prototype Chain Deep Dives",
        focus: "Property and method search mechanisms, automatic prototype creation",
        essential: "Function role in prototype system"
      },
      {
        id: 5,
        title: "JavaScript - The prototype chain in depth",
        url: "https://www.debuggr.io/js-prototype-in-depth/",
        author: "Debuggr",
        type: "Prototype Chain Deep Dives",
        focus: "Object connection mechanisms and inheritance implementation",
        essential: "In-depth prototype chain analysis"
      },
      {
        id: 6,
        title: "Understanding the JavaScript Prototype Chain & Inheritance",
        url: "https://blog.risingstack.com/javascript-prototype-chain-inheritance/",
        author: "RisingStack",
        type: "Prototype Chain Deep Dives",
        focus: "Prototype chain, closures, and scope chain debugging techniques",
        essential: "Debugging prototype issues"
      },
      {
        id: 7,
        title: "Deep Dive into JavaScript's \"this\" Keyword",
        url: "https://blog.carlosrojas.dev/deep-dive-into-javascripts-this-keyword-485fd78f5b90",
        author: "Carlos Rojas",
        type: "this Keyword Deep Understanding",
        focus: "Context determination mechanisms and execution context binding",
        essential: "Complete this keyword understanding"
      },
      {
        id: 8,
        title: "Understand JavaScript more deeply by writing a bind function",
        url: "https://medium.com/@adambomb/understand-javascript-more-deeply-by-writing-a-bind-function-8b619b242dcc",
        author: "Adam Bomb",
        type: "this Keyword Deep Understanding",
        focus: "Execution context binding mechanisms, implementing bind from scratch",
        essential: "Understanding this binding through implementation"
      },
      {
        id: 9,
        title: "The Ultimate Guide to JavaScript's 'this' Keyword",
        url: "https://noncodersuccess.medium.com/the-ultimate-guide-to-javascripts-this-keyword-a-deep-dive-into-javascript-s-this-keyword-6deef2baffb2",
        author: "Non Coder Success",
        type: "this Keyword Deep Understanding",
        focus: "Object reference mechanisms and context determination",
        essential: "Comprehensive this keyword guide"
      },
      {
        id: 10,
        title: "Inheritance and the prototype chain - MDN",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain",
        author: "MDN",
        type: "Official Specifications",
        focus: "Official specification of internal object links and prototype mechanisms",
        essential: "Authoritative prototype chain documentation"
      },
      {
        id: 11,
        title: "JavaScript Classes vs Prototypes",
        url: "https://medium.com/@parsyval/javascript-prototype-vs-class-a7015d5473b",
        author: "Parsyval",
        type: "Advanced OOP Patterns",
        focus: "Class syntax vs prototype patterns, performance implications",
        essential: "Understanding class vs prototype trade-offs"
      },
      {
        id: 12,
        title: "Factory Functions vs Constructor Functions vs Classes",
        url: "https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e",
        author: "Eric Elliott",
        type: "Advanced OOP Patterns",
        focus: "Different object creation patterns, pros and cons",
        essential: "Object creation pattern comparison"
      },
      {
        id: 13,
        title: "Understanding JavaScript Object Creation Patterns",
        url: "https://addyosmani.com/resources/essentialjsdesignpatterns/book/#constructorpatternjavascript",
        author: "Addy Osmani",
        type: "Advanced OOP Patterns",
        focus: "Constructor pattern, prototype pattern, module pattern",
        essential: "Design patterns for object creation"
      }
    ]
  },
  "advanced-es6": {
    title: "Advanced ES6+ Concepts",
    subtitle: "Generators, Iterators, async/await, Advanced Async Patterns",
    icon: "💡",
    description: "Master advanced ES6+ features for sophisticated async programming and data flow control.",
    resources: [
      {
        id: 1,
        title: "JavaScript: The New Hard Parts - Complete Course",
        url: "https://frontendmasters.com/courses/javascript-new-hard-parts/",
        author: "Will Sentance",
        type: "Frontend Masters Course",
        focus: "Will Sentance's complete 4h 46min course on ES6+ async features",
        essential: "Complete advanced async programming course"
      },
      {
        id: 2,
        title: "💡🎁 JavaScript Visualized: Generators and Iterators",
        url: "https://dev.to/lydiahallie/javascript-visualized-generators-and-iterators-e36",
        author: "Lydia Hallie",
        type: "Visual Understanding",
        focus: "Generator functions, iterator protocol, yield mechanics",
        essential: "Visual understanding of generators and iterators"
      },
      {
        id: 3,
        title: "JavaScript: The New Hard Parts - Iterators Section",
        url: "https://frontendmasters.com/courses/javascript-new-hard-parts/",
        author: "Will Sentance",
        type: "Iterators Deep Dive",
        focus: "Automated element access, stream creation from data, custom iterator implementation",
        essential: "Complete iterator understanding"
      },
      {
        id: 4,
        title: "Understanding JavaScript Iterators and Iterables",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators",
        author: "MDN",
        type: "Iterators Deep Dive",
        focus: "Iterator protocol, iterable objects, custom iterators",
        essential: "Official iterator documentation"
      },
      {
        id: 5,
        title: "JavaScript: The New Hard Parts - Generators Section",
        url: "https://frontendmasters.com/courses/javascript-new-hard-parts/",
        author: "Will Sentance",
        type: "Generators Deep Dive",
        focus: "function* declaration, dynamic data flows, asynchronous generators, control over deferred functionality",
        essential: "Advanced generator patterns"
      },
      {
        id: 6,
        title: "Understanding JavaScript Generators",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator",
        author: "MDN",
        type: "Generators Deep Dive",
        focus: "Generator objects, yield expressions, generator methods",
        essential: "Official generator documentation"
      },
      {
        id: 7,
        title: "JavaScript: The New Hard Parts - async/await Section",
        url: "https://frontendmasters.com/courses/javascript-new-hard-parts/",
        author: "Will Sentance",
        type: "async/await Deep Understanding",
        focus: "How async/await simplifies generators, under-the-hood implementation",
        essential: "async/await implementation details"
      },
      {
        id: 8,
        title: "Understanding async/await in JavaScript",
        url: "https://javascript.info/async-await",
        author: "JavaScript.info",
        type: "async/await Deep Understanding",
        focus: "Async function mechanics, error handling, promise integration",
        essential: "Comprehensive async/await guide"
      },
      {
        id: 9,
        title: "Patterns.dev",
        url: "https://patterns.dev/",
        author: "Patterns.dev",
        type: "Advanced Pattern Resources",
        focus: "Modern web development patterns, performance patterns, design patterns",
        essential: "Modern JavaScript patterns"
      },
      {
        id: 10,
        title: "33 JavaScript Concepts Every Developer Should Know",
        url: "https://github.com/leonardomso/33-js-concepts",
        author: "Leonardo Maldonado",
        type: "Advanced Pattern Resources",
        focus: "Comprehensive collection of JavaScript concepts with deep resources",
        essential: "Complete JavaScript concept collection"
      },
      {
        id: 11,
        title: "Overreacted Blog - Advanced React Patterns",
        url: "https://overreacted.io/",
        author: "Dan Abramov",
        type: "Mental Models",
        focus: "Advanced JavaScript patterns in React context",
        essential: "Advanced patterns from React core team"
      },
      {
        id: 12,
        title: "A Complete Guide to useEffect",
        url: "https://overreacted.io/a-complete-guide-to-useeffect/",
        author: "Dan Abramov",
        type: "Mental Models",
        focus: "Advanced async patterns, mental model corrections",
        essential: "Advanced async patterns in practice"
      }
    ]
  }
};

export const sectionOrder = [
  "javascript-principles",
  "functions-callbacks", 
  "closure",
  "asynchronous-javascript",
  "promises",
  "classes-prototypes",
  "advanced-es6"
];

export const learningPath = {
  beginner: {
    title: "Beginner to Intermediate",
    subtitle: "Foundation Building",
    phases: [
      {
        title: "Phase 1: Visual Understanding",
        description: "Start with Lydia Hallie's complete visual series for each topic",
        recommendations: [
          "JavaScript Engine → Hoisting → Scope Chain → Event Loop → Promises → Prototypes → Generators",
          "Watch the YouTube videos for reinforcement",
          "Use interactive examples to test understanding"
        ]
      },
      {
        title: "Phase 2: Practical Application", 
        description: "Build projects to practice concepts",
        recommendations: [
          "JavaScript 30 - Build 30 projects to practice concepts",
          "Beginner JavaScript - Structured learning with projects",
          "Practice closure patterns with real examples"
        ]
      },
      {
        title: "Phase 3: Specification Understanding",
        description: "Read foundational books and articles",
        recommendations: [
          "Read Kyle Simpson's YDKJS series in order",
          "Study Jake Archibald's tasks/microtasks article for async mastery",
          "Read official MDN documentation for each concept"
        ]
      }
    ]
  },
  intermediate: {
    title: "Intermediate to Advanced", 
    subtitle: "Deep Understanding",
    phases: [
      {
        title: "Phase 4: Engine-Level Knowledge",
        description: "Understand how JavaScript works under the hood",
        recommendations: [
          "Study engine-level resources for each topic",
          "Read V8 bytecode and optimization articles", 
          "Understand memory management and garbage collection"
        ]
      },
      {
        title: "Phase 5: Advanced Patterns",
        description: "Master advanced JavaScript patterns",
        recommendations: [
          "Take Will Sentance's New Hard Parts course for ES6+ features",
          "Study Dan Abramov's mental model articles",
          "Explore advanced async patterns with generators and async/await"
        ]
      },
      {
        title: "Phase 6: Implementation Understanding",
        description: "Build concepts from scratch",
        recommendations: [
          "Implement concepts from scratch (promises, iterators, generators)",
          "Study browser implementation differences",
          "Learn debugging techniques for complex async issues"
        ]
      }
    ]
  },
  advanced: {
    title: "Advanced to Expert",
    subtitle: "Mastery Level", 
    phases: [
      {
        title: "Phase 7: Specification Mastery",
        description: "Master the official specifications",
        recommendations: [
          "Read ECMAScript specifications directly",
          "Study browser engine source code (V8, SpiderMonkey)",
          "Understand performance implications of different patterns"
        ]
      },
      {
        title: "Phase 8: Teaching and Contributing",
        description: "Share knowledge and contribute to the community",
        recommendations: [
          "Explain concepts to others to test understanding",
          "Write technical articles about complex topics",
          "Contribute to open source projects using these concepts",
          "Mentor other developers in JavaScript fundamentals"
        ]
      }
    ]
  }
};

