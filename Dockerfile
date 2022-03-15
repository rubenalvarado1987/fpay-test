
FROM node:10-alpine

RUN mkdir -p /Users/amaris/fpay-test/node_modules && chown -R node:node /Users/amaris/fpay-test

WORKDIR /Users/amaris/fpay-test

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "app.js" ]