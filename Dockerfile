FROM node:16

COPY package.json ./

RUN npm install

COPY . .

RUN mkdir -p /service

WORKDIR /service

COPY service /service

EXPOSE 9000
