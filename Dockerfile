FROM node:17
EXPOSE 3000
RUN npm install
RUN npm build