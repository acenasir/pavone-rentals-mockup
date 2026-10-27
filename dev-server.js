// Local preview server that mirrors the vercel.json rewrite. Run: node dev-server.js
const http = require("http");
const fs = require("fs");
const path = require("path");

const types = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".json": "application/json" };
const port = process.env.PORT || 4173;

http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p === "/") p = "/index.html";
  if (p.startsWith("/properties/")) p = "/property.html";
  const file = path.join(__dirname, path.normalize(p));
  if (!file.startsWith(__dirname)) return res.writeHead(403).end();
  fs.readFile(file, (err, data) => {
    if (err) return res.writeHead(404).end("Not found");
    res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream" }).end(data);
  });
}).listen(port, () => console.log(`http://localhost:${port}`));
