const http = require('http');
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello NxNW Tech Meetup!\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://host:${port}/`);
});
