export const blogsMeta = [
  {
    slug: "how-the-internet-works",
    title: "How the Internet Works: From DNS to HTTP",
    description: "A deep dive into how the internet functions under the hood.",
    targetWords: 3000,
    content: `
The internet is a massive global network that allows billions of devices to communicate.
At its core, it relies on standardized protocols that define how data is transmitted.

When you type a URL into your browser, the first step is DNS resolution.
DNS (Domain Name System) converts human-readable domain names into IP addresses.
This happens through a hierarchy of DNS servers, starting from root servers
to authoritative name servers.

Once the IP address is resolved, the browser establishes a TCP connection.
Modern browsers often use HTTPS, which adds a TLS handshake for encryption.
After the connection is established, the browser sends an HTTP request.

The server processes the request and responds with an HTTP response,
containing status codes, headers, and a response body.
This response may include HTML, CSS, JavaScript, or binary data.

Understanding this flow helps developers debug latency issues,
optimize performance, and design better web applications.
    `,
  },

  {
    slug: "javascript-engine-and-runtime",
    title: "Inside the JavaScript Engine: V8, Event Loop, and Memory",
    description: "Understand how JavaScript actually runs in the browser and Node.js.",
    targetWords: 3000,
    content: `
JavaScript is often misunderstood as a slow or single-threaded language.
In reality, its performance depends heavily on the JavaScript engine.

A JavaScript engine like V8 converts JavaScript code into machine code.
It uses techniques like Just-In-Time compilation to optimize execution.
The engine manages memory using a garbage collector.

The runtime environment provides additional capabilities.
In browsers, this includes Web APIs like DOM, Fetch, and Timers.
In Node.js, it includes file system and networking APIs.

The event loop is responsible for handling asynchronous operations.
It continuously checks the call stack and task queues to decide
what code should execute next.

Understanding these internals helps developers write non-blocking,
high-performance JavaScript applications.
    `,
  },

  {
    slug: "react-reconciliation-and-fiber",
    title: "React Reconciliation & Fiber Explained",
    description: "How React efficiently updates the DOM using Fiber architecture.",
    targetWords: 3000,
    content: `
React uses a virtual representation of the UI called the Virtual DOM.
When state changes, React compares the new virtual tree with the previous one.
This process is known as reconciliation.

Before Fiber, React updates were synchronous and could block the UI.
Fiber introduced incremental rendering, allowing React to pause and resume work.

Each Fiber node represents a unit of work.
React prioritizes updates such as animations and user interactions.
This leads to smoother UI experiences.

Understanding Fiber helps developers reason about re-renders,
performance optimizations, and React’s concurrent features.
    `,
  },

  {
    slug: "nextjs-app-router-deep-dive",
    title: "Next.js App Router Deep Dive",
    description: "Layouts, Server Components, Routing, and Performance explained.",
    targetWords: 3000,
    content: `
The App Router in Next.js introduces a new mental model for building applications.
Routing is based on folders, making it intuitive and scalable.

Server Components allow code to run on the server by default.
This reduces bundle size and improves performance.
Client Components are used only when interactivity is required.

Layouts persist across route changes, avoiding unnecessary re-renders.
Streaming enables progressive rendering of pages.

Understanding the App Router is essential for building fast,
SEO-friendly, and maintainable applications with Next.js.
    `,
  },

  {
    slug: "how-browsers-render-webpages",
    title: "How Browsers Render Web Pages",
    description: "From HTML parsing to painting pixels on the screen.",
    targetWords: 3000,
    content: `
Browsers follow a multi-step process to render a webpage.
First, the HTML is parsed into a DOM tree.
CSS is parsed into a CSSOM tree.

The DOM and CSSOM are combined to form the render tree.
The browser then calculates layout and determines the position of elements.

Painting converts visual elements into pixels.
Finally, compositing layers are combined to display the page.

Understanding this process helps developers avoid layout thrashing
and write more performant CSS and JavaScript.
    `,
  },

  {
    slug: "authentication-vs-authorization",
    title: "Authentication vs Authorization",
    description: "JWT, Sessions, OAuth, and modern security explained.",
    targetWords: 3000,
    content: `
Authentication verifies who a user is.
Authorization determines what a user is allowed to do.

Common authentication methods include sessions and JWTs.
OAuth enables secure third-party authentication.

Security mistakes can lead to data leaks and breaches.
Understanding these concepts is critical for building secure systems.
    `,
  },

  {
    slug: "rest-vs-graphql",
    title: "REST vs GraphQL: A Practical Comparison",
    description: "When to use REST, when to use GraphQL, and why.",
    targetWords: 3000,
    content: `
REST is based on resource-oriented endpoints.
It is simple, cache-friendly, and widely adopted.

GraphQL allows clients to request exactly the data they need.
This reduces over-fetching and under-fetching.

Each approach has trade-offs.
Choosing the right one depends on application requirements.
    `,
  },

  {
    slug: "how-databases-work",
    title: "How Databases Work Internally",
    description: "Indexes, transactions, ACID, and query optimization.",
    targetWords: 3000,
    content: `
Databases store and retrieve data efficiently.
Indexes speed up queries but add overhead to writes.

Transactions ensure data consistency.
ACID properties define reliability guarantees.

Understanding internals helps developers write efficient queries
and design scalable data models.
    `,
  },

  {
    slug: "system-design-basics",
    title: "System Design Basics for Frontend Developers",
    description: "Scalability, caching, CDNs, and architecture fundamentals.",
    targetWords: 3000,
    content: `
System design is not just for backend engineers.
Frontend developers must understand scalability and performance.

Caching reduces latency and server load.
CDNs distribute content globally.

Good system design improves user experience and reliability.
    `,
  },

  {
    slug: "web-performance-optimization",
    title: "Web Performance Optimization",
    description: "Core Web Vitals, caching, lazy loading, and best practices.",
    targetWords: 3000,
    content: `
Web performance directly affects user engagement.
Core Web Vitals measure real-world performance.

Techniques like lazy loading and code splitting
reduce initial load times.

Optimizing performance is an ongoing process,
not a one-time task.
    `,
  },
];
