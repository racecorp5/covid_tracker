# Base Node
FROM node:15.6 AS base
WORKDIR /app

COPY package*.json /app/
RUN npm install

COPY . /app
RUN npm run build

EXPOSE 3000
ENV NODE_ENV=production
CMD ["node" , "server"]
