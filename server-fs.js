// 2.响应文件
const http = require("node:http");
const fs = require("fs");
const html = fs.readFileSync("./hello.html");

const server = http.createServer((req, res) => {
  res.end(html);
});
server.listen(3000, () => {
  console.log("listener 3000");
});

// ## 对于前端这类纯静态资源，自己写代码无论从开发效率还是性能而言都是极差的，
// 这也是我们为何要求助于专业工具 nginx 之类进行静态资源服务的原因所在。
// Javascript 的性能毕竟有限，使用 nginx 作为静态资源服务器拥有更高的性能。
