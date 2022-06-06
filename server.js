// # 手写静态资源服务器！
// 利用node开启服务，
// 1.响应字符串
const http = require("node:http");
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  hello, youjinli.
</body>
</html>`;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html;charset=UTF8");
  res.setHeader("Expires", new Date(Date.now() + 10).toUTCString());
  res.end(html);
});
server.listen(3000, () => {
  console.log("Listening 3000");
});
