FROM node:17
EXPOSE 3000
WORKDIR /home/node/app
RUN npm install
RUN npm build