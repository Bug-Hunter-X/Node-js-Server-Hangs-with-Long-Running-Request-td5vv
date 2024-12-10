const http = require('http');
const { Worker } = require('worker_threads');

const server = http.createServer((req, res) => {
  const worker = new Worker('./long-task.js');

  worker.on('message', (result) => {
    res.writeHead(200);
    res.end('Done!');
  });

  worker.on('error', (err) => {
    res.writeHead(500);
    res.end('Error!');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// long-task.js
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log('Processing...', count);
  if (count === 10) {
    clearInterval(intervalId);
    postMessage('Task completed');
  }
}, 100);