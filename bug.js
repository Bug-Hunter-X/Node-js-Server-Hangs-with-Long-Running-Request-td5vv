const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task
  let count = 0;
  const intervalId = setInterval(() => {
    count++;
    console.log('Processing...', count);
    if (count === 10) {
      clearInterval(intervalId);
      res.writeHead(200);
      res.end('Done!');
    }
  }, 100);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});