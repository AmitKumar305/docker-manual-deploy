FROM node:16.13.0

WORKDIR /src

COPY package.json ./

RUN apt-get update

RUN npm install
RUN npm install pm2

COPY . .

EXPOSE 3000

CMD node index.js
