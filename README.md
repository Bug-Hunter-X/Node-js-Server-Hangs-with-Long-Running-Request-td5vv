# Node.js Server Hang with Long-Running Request

This repository demonstrates a common issue in Node.js where a long-running request can block the event loop, causing the server to hang and become unresponsive to other requests.

## Bug Description
The `bug.js` file contains a Node.js HTTP server that simulates a long-running task.  This task involves a `setInterval` function that increments a counter and logs a message.  The server only responds after 10 iterations of this task.  If a client sends a request to this server while the long-running task is underway, the server will not respond to any other request.  This is because Node.js's single-threaded event loop is blocked.

## Solution
The solution, found in `bugSolution.js`, uses asynchronous operations (a worker thread) to prevent the main event loop from being blocked.  This allows the server to remain responsive even while handling long-running tasks.