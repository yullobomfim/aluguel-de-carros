FROM node:16

COPY package.json ./

RUN mkdir /services

WORKDIR /services

RUN npm install

EXPOSE 9000

ENTRYPOINT ["node", "server.js"]