# 选择一个体积小的镜像
FROM node:14-alpine
# 设置工作目录
WORKDIR /code
# 把宿主机的代码添加到镜像当中
ADD . /code
# 安装依赖
RUN yarn
EXPOSE 3001
CMD npm start